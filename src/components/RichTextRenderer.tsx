// components/RichTextRenderer.tsx
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import {
  Document,
  BLOCKS,
  INLINES,
  MARKS,
  Block,
  Inline,
} from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { Asset } from 'contentful';
import { getImageUrl } from '@/lib/contentful';

interface RichTextRendererProps {
  content: Document;
  className?: string;
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className='font-bold'>{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className='italic'>{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode) => (
      <u className='underline'>{text}</u>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className='bg-gray-100 px-1 py-0.5 rounded text-sm font-mono'>
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
      <p className='mb-4 leading-relaxed'>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
      <h1 className='text-4xl font-bold mb-6 mt-8'>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
      <h2 className='text-3xl font-bold mb-5 mt-7'>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
      <h3 className='text-2xl font-bold mb-4 mt-6'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
      <h4 className='text-xl font-bold mb-3 mt-5'>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
      <h5 className='text-lg font-bold mb-2 mt-4'>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
      <h6 className='text-base font-bold mb-2 mt-3'>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ul className='list-disc list-inside mb-4 space-y-2'>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ol className='list-decimal list-inside mb-4 space-y-2'>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
      <li className='ml-4'>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic my-6'>
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className='my-8 border-gray-300' />,
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const asset = node.data?.target as Asset;
      if (!asset?.fields?.file) return null;

      const { file, title, description } = asset.fields;
      const isImage =
        typeof file.contentType === 'string' &&
        file.contentType.startsWith('image/');

      if (isImage) {
        return (
          <div className='my-8'>
            <Image
              src={getImageUrl(asset, 800)}
              alt={
                typeof title === 'string'
                  ? title
                  : typeof description === 'string'
                  ? description
                  : 'Image'
              }
              width={800}
              height={400}
              className='rounded-lg w-full h-auto'
            />
            {title && typeof title === 'string' && (
              <p className='text-sm text-gray-600 mt-2 text-center italic'>
                {title}
              </p>
            )}
          </div>
        );
      }

      return (
        <div className='my-4 p-4 border rounded-lg'>
          <a
            href={`https:${file.url}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            {typeof title === 'string' ? title : 'Download file'}
          </a>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
      <Link
        href={(node.data as { uri: string }).uri}
        className='text-blue-600 hover:underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </Link>
    ),
  },
};

export default function RichTextRenderer({
  content,
  className = '',
}: RichTextRendererProps) {
  if (!content) return null;

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {documentToReactComponents(content, options)}
    </div>
  );
}
