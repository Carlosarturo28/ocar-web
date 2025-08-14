import type { Entry, EntryFields } from 'contentful';

export interface TypeCategoryFields {
  title: EntryFields.Symbol;
}

export interface TypeCategorySkeleton {
  fields: TypeCategoryFields;
  contentTypeId: 'typeCategory';
}

export type TypeCategory = Entry<TypeCategorySkeleton>;
