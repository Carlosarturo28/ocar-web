// lib/contentful.ts
import { TypeCodexPostFields } from '@/types';
import { TypeCodexPostSkeleton } from '@/types/TypeCodexPost';
import { Asset, AssetLink, createClient, Entry } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is required');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is required');
}

// Cliente de Contentful
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink }
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!('fields' in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}

export function parseContentfulCodexPost(
  codexPostEntry?: Entry<TypeCodexPostSkeleton, undefined, string>
): TypeCodexPostFields | null {
  if (!codexPostEntry) {
    return null;
  }

  return {
    title: codexPostEntry.fields.title || '',
    slug: codexPostEntry.fields.slug,
    summary: codexPostEntry.fields.summary,
    author: codexPostEntry.fields.author,
    isFeatured: codexPostEntry.fields.isFeatured,
    category: codexPostEntry.fields.category,
    tags: codexPostEntry.fields.tags,
    content: codexPostEntry.fields.content || undefined,
    featuredImage: codexPostEntry.fields.featuredImage,
  };
}

// Función para obtener todos los slugs (para generateStaticParams)
export async function getAllCodexPostSlugs(): Promise<string[]> {
  try {
    const entries = await client.getEntries<TypeCodexPostSkeleton>({
      content_type: 'codexPost',
      select: ['fields.slug'],
      limit: 1000,
    });

    return entries.items.map((item) => item.fields.slug);
  } catch (error) {
    console.error('Error fetching codex post slugs:', error);
    return [];
  }
}

export async function getCodexPostBySlug(
  slug: string
): Promise<TypeCodexPostFields | null> {
  try {
    const entries = await client.getEntries<TypeCodexPostSkeleton>({
      content_type: 'codexPost',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      'fields.slug': slug,
      include: 2,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const codexPostEntry = entries.items[0];
    return parseContentfulCodexPost(codexPostEntry);
  } catch (error) {
    console.error('Error fetching codex post by slug:', error);
    return null;
  }
}

// Función para obtener todos los posts (para la página de listado)
export async function getAllCodexPosts(
  limit = 100
): Promise<TypeCodexPostFields[]> {
  try {
    const entries = await client.getEntries<TypeCodexPostSkeleton>({
      content_type: 'codexPost',
      include: 2,
      limit,
      order: ['-sys.createdAt'] as const,
    });

    return entries.items
      .map(parseContentfulCodexPost) // convierte a TypeCodexPostFields | null
      .filter((post): post is TypeCodexPostFields => post !== null); // elimina nulls
  } catch (error) {
    console.error('Error fetching all codex posts:', error);
    return [];
  }
}

// Función para obtener posts destacados
export async function getFeaturedCodexPosts(
  limit = 10
): Promise<TypeCodexPostFields[]> {
  try {
    const entries = await client.getEntries<TypeCodexPostSkeleton>({
      content_type: 'codexPost',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      'fields.isFeatured': true,
      include: 2,
      limit,
      order: ['-sys.createdAt'] as const,
    });

    return entries.items
      .map(parseContentfulCodexPost) // convierte a TypeCodexPostFields | null
      .filter((post): post is TypeCodexPostFields => post !== null); // elimina nulls
  } catch (error) {
    console.error('Error fetching featured codex posts:', error);
    return [];
  }
}

// Función helper para obtener la URL de una imagen
export function getImageUrl(
  asset: Asset | undefined,
  width?: number,
  height?: number,
  format?: string
): string {
  if (!asset?.fields?.file?.url) return '';

  let url = `https:${asset.fields.file.url}`;

  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (format) params.append('fm', format);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  return url;
}
