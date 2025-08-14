type CardAttack = {
  name: string;
  description: string;
  cost: number;
  damage: number;
};

type APICard = {
  id: string;
  name: string;
  imageUrl: string;
  foilUrl: string | null;
  isHolo: boolean;
  maskUrl: string | null;
  type: 'Creature' | 'Realm' | 'Servants' | 'Object' | string;
  affinity: 'Umbral' | 'Arcane' | 'Verdant' | 'Bestial' | string;
  probability: number;
  realmCost: number | null;
  manaBonus: number | null;
  manaCost: number | null;
  hp: number | null;
  artist: string;
  flavorText: string;
  auxiliaryText: string | null;
  passive: string;
  attacks?: CardAttack[];
};

export type Expansion = {
  id: number;
  name: string;
  description: string;
  releaseYear: number;
  logoUrl: string;
  iconUrl: string;
  cards: APICard[];
};

// Enhanced card with expansion info
export type CardItem = APICard & {
  expansionName: string;
  expansionIconUrl: string;
  releaseYear: number;
  expansionLogoUrl: string;
};

export interface CodexEntry {
  id: string;
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
  isFeatured: boolean;
  tags: string[];
  categories: string[];
  authors: string[];
  updatedAt: string;
  createdAt: string;
}

export type { TypeAuthor, TypeAuthorFields } from './TypeAuthor';
export type { TypeCategory, TypeCategoryFields } from './TypeCategory';
export type { TypeCodexPost, TypeCodexPostFields } from './TypeCodexPost';
