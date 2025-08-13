'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Search, Tag } from 'lucide-react';
import { cn } from '@/lib/classnames';
import { CodexEntry } from '@/types';

export default function CodexPage() {
  const [entries, setEntries] = useState<CodexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>('All');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/codex', { cache: 'no-store' });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setEntries(data.entries || []);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message || 'Error fetching codex');
        } else {
          setError('Unknown error fetching codex');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((e) => e.categories?.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      const matchesCat =
        active === 'All' ? true : e.categories?.includes(active);
      const haystack = `${e.title} ${e.summary} ${e.tags.join(
        ' '
      )} ${e.categories.join(' ')}`.toLowerCase();
      const matchesQuery = q.length === 0 || haystack.includes(q);
      return matchesCat && matchesQuery;
    });
  }, [entries, query, active]);

  const showFeatured = query === '' && active === 'All';
  const featured = showFeatured ? filtered.filter((e) => e.isFeatured) : [];
  const list = filtered;

  return (
    <main className='min-h-screen bg-[#171613] text-[#BAA488]'>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          className='absolute inset-0 pointer-events-none opacity-20'
          style={{
            backgroundImage: 'radial-gradient(#EA9F23 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className='relative max-w-6xl mx-auto px-6 pt-28 pb-12'>
          <div className='flex items-center gap-3 mb-3'>
            <BookOpen className='w-6 h-6 text-[#EA9F23]' />
            <span className='uppercase tracking-widest text-xs text-[#EA9F23]'>
              Codex
            </span>
          </div>
          <h1 className='text-3xl md:text-5xl font-extrabold text-[#EA9F23]'>
            Of Creatures and Realms
          </h1>
          <p className='mt-3 max-w-3xl text-sm md:text-base text-[#BAA488]/80'>
            Explore creatures, realms, artifacts, characters, and events. Find
            hidden connections and cross-references to game cards.
          </p>

          {/* Search */}
          <div className='mt-6'>
            <label className='sr-only' htmlFor='codex-search'>
              Search in codex
            </label>
            <div className='flex items-center gap-2 bg-[#2D2542] border border-[#EA9F23]/30 rounded-xl px-3 py-2'>
              <Search className='w-5 h-5 shrink-0 text-[#BAA488]' />
              <input
                id='codex-search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search creatures, realms, artifacts…'
                className='w-full bg-transparent outline-none placeholder-[#BAA488]/50 text-sm md:text-base'
              />
            </div>
          </div>

          {/* Filters (dynamic categories) */}
          <div className='mt-4 flex flex-wrap gap-2'>
            <button
              onClick={() => setActive('All')}
              className={cn(
                'px-3 py-1 rounded-full text-sm border transition',
                active === 'All'
                  ? 'border-[#EA9F23] text-[#171613] bg-[#EA9F23]'
                  : 'border-[#EA9F23]/40 text-[#BAA488] hover:border-[#EA9F23]'
              )}
            >
              All
            </button>

            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  'px-3 py-1 rounded-full text-sm border transition',
                  active === c
                    ? 'border-[#EA9F23] text-[#171613] bg-[#EA9F23]'
                    : 'border-[#EA9F23]/40 text-[#BAA488] hover:border-[#EA9F23]'
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Flavor quote */}
          <blockquote className='mt-6 border-l-4 border-[#EA9F23] pl-4 text-sm md:text-base text-[#BAA488]/80'>
            “The memory of the Realm is not written with ink, but with pacts,
            wounds, and oaths.”
          </blockquote>
        </div>
      </section>

      {/* Featured — only with no search/filter */}
      {showFeatured && featured.length > 0 && (
        <section className='max-w-6xl mx-auto px-6'>
          <h2 className='text-lg md:text-xl font-semibold text-[#EA9F23] flex items-center gap-2'>
            <Tag className='w-5 h-5' /> Featured
          </h2>
          <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {featured.slice(0, 2).map((e) => (
              <Card key={e.id} entry={e} featured />
            ))}
          </div>
        </section>
      )}

      {/* All entries */}
      <section className='max-w-6xl mx-auto px-6 mt-10 pb-20'>
        <h3 className='text-sm uppercase tracking-widest text-[#BAA488]/60'>
          All entries
        </h3>

        {loading && (
          <p className='mt-6 text-sm text-[#BAA488]/70'>Loading codex…</p>
        )}
        {error && <p className='mt-6 text-sm text-red-400'>Error: {error}</p>}

        {!loading && !error && (
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {list.map((e) => (
              <Card key={e.id} entry={e} />
            ))}
            {list.length === 0 && (
              <p className='col-span-full text-center text-[#BAA488]/70 text-sm'>
                No entries found.
              </p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

function Card({
  entry,
  featured = false,
}: {
  entry: CodexEntry;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/codex/${entry.slug}`}
      className={cn(
        'group rounded-xl overflow-hidden border transition transform hover:-translate-y-0.5 hover:shadow-xl',
        featured
          ? 'lg:row-span-2 border-[#EA9F23] bg-[#1e1c18]'
          : 'border-[#EA9F23]/40 bg-[#1e1c18] hover:border-[#EA9F23]'
      )}
    >
      <div className='relative w-full h-48 md:h-56'>
        {entry.imageUrl ? (
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            fill
            className='object-cover transition-opacity duration-300'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            priority={featured}
          />
        ) : (
          <div className='w-full h-full bg-[#2D2542]' />
        )}
        <div
          className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition'
          style={{
            background:
              'radial-gradient(600px circle at 20% 10%, #171613, transparent 70%)',
          }}
        />
      </div>

      <div className='p-4 md:p-5'>
        <div className='flex items-center justify-between gap-2'>
          <span className='inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border border-[#EA9F23]/60 text-[#EA9F23]'>
            {entry.categories[0] || 'Codex'}
          </span>
          <span className='text-[11px] uppercase tracking-widest text-[#BAA488]/50 group-hover:text-[#BAA488]/70 transition'>
            Read
          </span>
        </div>
        <h4 className='mt-2 text-base md:text-lg font-bold text-[#BAA488] group-hover:text-[#EA9F23] transition'>
          {entry.title}
        </h4>
        <p className='mt-1 text-sm text-[#BAA488]/80 line-clamp-3'>
          {entry.summary}
        </p>
      </div>
    </Link>
  );
}
