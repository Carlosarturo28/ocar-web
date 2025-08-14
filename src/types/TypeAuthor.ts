import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeAuthorFields {
  name: EntryFields.Symbol;
  profileImage?: Asset;
  occupation?: EntryFields.Symbol;
}

export interface TypeAuthorSkeleton {
  fields: TypeAuthorFields;
  contentTypeId: 'author';
}

export type TypeAuthor = Entry<TypeAuthorSkeleton>;
