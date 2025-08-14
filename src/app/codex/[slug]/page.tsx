/* eslint-disable @typescript-eslint/ban-ts-comment */
// app/codex/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getAllCodexPostSlugs,
  getCodexPostBySlug,
  getImageUrl,
} from '@/lib/contentful';
import RichTextRenderer from '@/components/RichTextRenderer';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generar parámetros estáticos (ISG)
export async function generateStaticParams() {
  try {
    const slugs = await getAllCodexPostSlugs();

    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generar metadata dinámico
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCodexPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  const { title, summary, featuredImage } = post;
  const imageUrl = featuredImage
    ? getImageUrl(featuredImage, 1200, 630)
    : undefined;

  return {
    title: title,
    description: summary,
    openGraph: {
      title: title,
      description: summary,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: summary,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function CodexPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCodexPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, summary, content, featuredImage, tags, author, category } =
    post;

  return (
    <div className=' bg-[#171613] pt-28'>
      <article className='max-w-4xl mx-auto px-6 py-8 text-[#BAA488]'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <ol className='flex items-center space-x-2 text-sm text-[#EA9F23]'>
            <li>
              <Link href='/' className='hover:text-[#BAA488]'>
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href='/codex' className='hover:text-[#BAA488]'>
                Codex
              </Link>
            </li>
            <li>/</li>
            <li className='text-[#BAA488] truncate'>{title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className='mb-8'>
          {/* Categorías */}
          {category && category.length > 0 && (
            <div className='mb-4'>
              {category.map((cat) => (
                <span
                  key={cat.sys.id}
                  className='inline-block bg-[#2D2542] text-[#EA9F23] text-xs px-3 py-1 rounded-full mr-2 font-semibold'
                >
                  {/*@ts-expect-error*/}
                  {cat.fields.title}
                </span>
              ))}
            </div>
          )}

          <h1 className='text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#EA9F23]'>
            {title}
          </h1>
          <p className='text-lg text-[#BAA488] mb-6 leading-relaxed'>
            {summary}
          </p>

          {/* Meta info */}
          <div className='flex flex-wrap items-center gap-4 text-sm text-[#BAA488] mb-8'>
            {author && author.length > 0 && (
              <>
                <div className='flex items-center gap-2'>
                  {author.map((authorItem) => {
                    const authorFields = authorItem.fields;
                    return (
                      <div
                        key={authorItem.sys.id}
                        className='relative flex items-center gap-2 group'
                      >
                        {authorFields.profileImage && (
                          <Image
                            //@ts-expect-error
                            src={getImageUrl(authorFields.profileImage, 32, 32)}
                            //@ts-expect-error
                            alt={authorFields.name}
                            width={32}
                            height={32}
                            className='rounded-full border-2 border-[#EA9F23] cursor-pointer'
                          />
                        )}

                        <div>
                          <span className='font-medium text-[#BAA488]'>
                            {/*@ts-expect-error*/}
                            {authorFields.name}
                          </span>
                        </div>

                        {/* Popover */}
                        <div className='absolute left-1/2 transform -translate-x-1/2 -top-40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 hover:scale-105'>
                          <div className='relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 text-amber-900 rounded-lg p-6 w-52 shadow-2xl border-4 border-amber-600 backdrop-blur-sm'>
                            {/* Ornamental corners */}
                            <div className='absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-amber-600 transform rotate-180'></div>
                            <div className='absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-amber-600 transform -rotate-180'></div>
                            <div className='absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-amber-600 transform -rotate-180'></div>
                            <div className='absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-amber-600 transform rotate-180'></div>

                            {authorFields.profileImage && (
                              <div className='relative mb-4'>
                                <Image
                                  src={getImageUrl(
                                    //@ts-expect-error
                                    authorFields.profileImage,
                                    96,
                                    96
                                  )}
                                  //@ts-expect-error
                                  alt={authorFields.name}
                                  width={96}
                                  height={96}
                                  className='rounded-full mx-auto border-4 border-amber-600 shadow-lg ring-2 ring-amber-300'
                                />
                              </div>
                            )}

                            <div className='text-center space-y-2 relative z-10'>
                              <h3 className='font-bold text-lg font-serif text-amber-800 tracking-wide'>
                                {/*@ts-expect-error*/}
                                {authorFields.name}
                              </h3>
                              {authorFields.occupation && (
                                <p className='text-amber-700 font-medium text-sm italic font-serif'>
                                  {/*@ts-expect-error*/}
                                  {authorFields.occupation}
                                </p>
                              )}
                            </div>

                            {/* Decorative footer */}
                            <div className='mt-4 text-center'>
                              <div className='w-full h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-1'></div>
                              <div className='text-amber-600 text-xs'>⚜</div>
                            </div>
                          </div>

                          {/* Tooltip arrow */}
                          <div className='absolute top-full left-1/2 transform -translate-x-1/2 -mt-1'>
                            <div className='w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-600'></div>
                            <div className='w-0 h-0 border-l-3 border-r-3 border-t-3 border-l-transparent border-r-transparent border-t-amber-50 absolute top-0 left-1/2 transform -translate-x-1/2 -mt-px'></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Imagen destacada */}
          {featuredImage && (
            <div className='mb-8 border-2 border-[#EA9F23] rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={getImageUrl(featuredImage, 1200, 600)}
                alt={title}
                width={1200}
                height={600}
                className='w-full h-auto'
                priority
              />
            </div>
          )}
        </header>

        {/* Contenido */}
        {content && (
          <div className='prose prose-lg max-w-none mb-8 prose-invert'>
            <RichTextRenderer content={content} />
          </div>
        )}

        {/* Tags */}
        {tags && (
          <div className='mt-12 pt-6 border-t border-[#2D2542]'>
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm font-medium text-[#EA9F23]'>Tags:</span>
              {tags.split(',').map((tag, index) => (
                <span
                  key={index}
                  className='bg-[#2D2542] text-[#EA9F23] text-xs px-2 py-1 rounded'
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navegación */}
        <nav className='mt-6 pt-6 border-t border-[#2D2542]'>
          <Link
            href='/codex'
            className='inline-flex items-center text-[#EA9F23] hover:text-[#BAA488] transition-colors'
          >
            ← Back to Codex
          </Link>
        </nav>
      </article>
    </div>
  );
}

// Configuración para ISG
export const revalidate = 3600; // Revalidar cada hora
