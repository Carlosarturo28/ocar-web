// app/api/codex/route.ts
import { NextResponse } from 'next/server';
import { Document } from '@contentful/rich-text-types';
import { CodexEntry } from '@/types';

interface ContentfulSys {
  id: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ContentfulFileDetails {
  size?: number;
  image?: { width: number; height: number };
}

interface ContentfulAssetFile {
  url: string;
  contentType?: string;
  details?: ContentfulFileDetails;
}

interface ContentfulAsset {
  sys: ContentfulSys;
  fields: {
    title?: string;
    file?: ContentfulAssetFile;
  };
}

interface ContentfulLink {
  sys: { id: string; linkType: string; type: string };
}

interface ContentfulEntry<TFields> {
  sys: ContentfulSys;
  fields: TFields;
}

interface CodexPostFields {
  title: string;
  slug: string;
  summary: string;
  content: Document;
  featuredImage?: ContentfulLink;
  isFeatured?: boolean;
  tags?: string[] | string;
  author?: ContentfulLink[];
  category?: ContentfulLink[];
}

interface GenericEntryFields {
  title?: string;
  name?: string;
}

type AssetMap = Record<string, ContentfulAsset>;
type EntryMap<T> = Record<string, ContentfulEntry<T>>;

function byIdMap<T extends { sys: ContentfulSys }>(
  list: T[] = []
): Record<string, T> {
  const map: Record<string, T> = {};
  for (const it of list) map[it.sys.id] = it;
  return map;
}

export async function GET() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
  const locale = process.env.CONTENTFUL_LOCALE || 'en-US';

  if (!space || !accessToken) {
    return NextResponse.json(
      { error: 'Missing Contentful credentials' },
      { status: 500 }
    );
  }

  const url = new URL(
    `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries`
  );
  url.searchParams.set('content_type', 'codexPost');
  url.searchParams.set('include', '2');
  url.searchParams.set('order', '-sys.updatedAt');
  url.searchParams.set('locale', locale);

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  const data: {
    items: ContentfulEntry<CodexPostFields>[];
    includes?: {
      Asset?: ContentfulAsset[];
      Entry?: ContentfulEntry<GenericEntryFields>[];
    };
  } = await res.json();

  const assets: AssetMap = byIdMap(data.includes?.Asset);
  const entries: EntryMap<GenericEntryFields> = byIdMap(data.includes?.Entry);

  const toImageUrl = (assetLink?: ContentfulLink): string | undefined => {
    if (!assetLink?.sys?.id) return;
    const asset = assets[assetLink.sys.id];
    const url = asset?.fields?.file?.url;
    return url ? `https:${url}` : undefined;
  };

  const toAuthors = (links?: ContentfulLink[]): string[] => {
    if (!links?.length) return [];
    return links
      .map((l) => entries[l.sys.id])
      .map((e) => e?.fields?.name || e?.fields?.title || '')
      .filter((v): v is string => Boolean(v));
  };

  const toCategories = (links?: ContentfulLink[]): string[] => {
    if (!links?.length) return [];
    return links
      .map((l) => entries[l.sys.id])
      .map((e) => e?.fields?.title || e?.fields?.name || '')
      .filter((v): v is string => Boolean(v));
  };

  const items: CodexEntry[] = (data.items || []).map((it) => {
    const f = it.fields;
    const tagsRaw = f.tags ?? '';
    const tags =
      Array.isArray(tagsRaw) &&
      tagsRaw.every((t): t is string => typeof t === 'string')
        ? tagsRaw
        : typeof tagsRaw === 'string'
        ? tagsRaw
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
        : [];

    return {
      id: it.sys.id,
      title: f.title,
      slug: f.slug,
      summary: f.summary,
      content: f.content,
      imageUrl: toImageUrl(f.featuredImage),
      isFeatured: Boolean(f.isFeatured),
      tags,
      categories: toCategories(f.category),
      authors: toAuthors(f.author),
      updatedAt: it.sys.updatedAt || '',
      createdAt: it.sys.createdAt || '',
    };
  });

  return NextResponse.json({ entries: items });
}
