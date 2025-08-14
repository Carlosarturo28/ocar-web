import type { Asset, Entry, EntryFields, EntrySys } from 'contentful';
import type { TypeAuthorSkeleton } from './TypeAuthor';
import type { TypeCategorySkeleton } from './TypeCategory';

export interface TypeCodexPostFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  summary: EntryFields.Symbol;
  content?: EntryFields.RichText;
  featuredImage?: Asset<undefined, string>;
  isFeatured: EntryFields.Boolean;
  tags?: EntryFields.Symbol;
  author: Entry<TypeAuthorSkeleton>[];
  category?: Entry<TypeCategorySkeleton>[];
}

// Define the skeleton type as required by Entry
export interface TypeCodexPostSkeleton {
  fields: TypeCodexPostFields;
  contentTypeId: 'codexPost';
  sys: EntrySys;
}

export type TypeCodexPost = Entry<TypeCodexPostSkeleton>;
