'use client';

import CardGrid from '@/components/CardGrid';
import CardModal from '@/components/CardModal';
import { Expansion, CardItem } from '@/types';
import { useEffect, useMemo, useState } from 'react';

const DATA_URL =
  'https://raw.githubusercontent.com/Carlosarturo28/ocar/refs/heads/main/assets/cards.json';

export default function CardsPage() {
  const [expansions, setExpansions] = useState<Expansion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Filtros
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [affinityFilter, setAffinityFilter] = useState('');
  const [expansionFilter, setExpansionFilter] = useState('');

  // Modal
  const [selected, setSelected] = useState<CardItem | null>(null);

  // Fetch de datos
  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await fetch(DATA_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Expansion[];

        if (!Array.isArray(data)) throw new Error('Formato inesperado');

        if (alive) {
          setExpansions(data);
          setError(null);
        }
      } catch (e) {
        if (alive)
          setError(
            `Could not load cards: ${e instanceof Error ? e.message : 'Error'}`
          );
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // Aplanar cartas con metadatos de expansión
  const allCards: CardItem[] = useMemo(() => {
    return expansions.flatMap((exp) =>
      exp.cards.map((c) => ({
        ...c,
        expansionName: exp.name,
        releaseYear: exp.releaseYear,
        expansionLogoUrl: exp.logoUrl,
        expansionIconUrl: exp.iconUrl,
      }))
    );
  }, [expansions]);

  // Valores únicos para filtros
  const uniqueTypes = useMemo(
    () => Array.from(new Set(allCards.map((c) => c.type))).sort(),
    [allCards]
  );
  const uniqueAffinities = useMemo(
    () => Array.from(new Set(allCards.map((c) => c.affinity))).sort(),
    [allCards]
  );
  const uniqueExpansions = useMemo(
    () => Array.from(new Set(allCards.map((c) => c.expansionName))).sort(),
    [allCards]
  );

  // Aplicar filtros
  const visibleCards = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allCards.filter((c) => {
      const formatName = (v: string) => v.replace(/_/g, ' ');
      const matchesSearch = !q || formatName(c.name).toLowerCase().includes(q);
      const matchesType = !typeFilter || c.type === typeFilter;
      const matchesAffinity = !affinityFilter || c.affinity === affinityFilter;
      const matchesExpansion =
        !expansionFilter || c.expansionName === expansionFilter;
      return (
        matchesSearch && matchesType && matchesAffinity && matchesExpansion
      );
    });
  }, [allCards, search, typeFilter, affinityFilter, expansionFilter]);

  // Loading / Error
  if (loading) {
    return (
      <div className='min-h-screen bg-[#171613] text-white grid place-content-center'>
        <p className='text-lg'>Loading cards…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className='min-h-screen bg-[#171613] text-white grid place-content-center px-4'>
        <p className='text-red-400 text-center'>{error}</p>
      </div>
    );
  }

  return (
    <div className='pt-25 min-h-screen bg-[#171613] text-white'>
      {/* Controles / Filtros */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-col lg:flex-row gap-4 lg:items-center'>
          <input
            type='text'
            placeholder='Search by name…'
            className='px-4 py-2 rounded-lg bg-[#2D2542] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA9F23] w-full lg:w-72'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label='Search by name'
          />

          <div className='flex flex-wrap gap-3 w-full lg:w-auto'>
            <select
              className='px-4 py-2 pr-8 rounded-lg bg-[#2D2542] text-white focus:outline-none focus:ring-2 focus:ring-[#EA9F23] flex-1'
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              aria-label='Filter by type'
            >
              <option value=''>All types</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              className='px-4 py-2 pr-8 rounded-lg bg-[#2D2542] text-white focus:outline-none focus:ring-2 focus:ring-[#EA9F23] flex-1'
              value={affinityFilter}
              onChange={(e) => setAffinityFilter(e.target.value)}
              aria-label='Filter by affinity'
            >
              <option value=''>All affinities</option>
              {uniqueAffinities.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>

            <select
              className='px-4 py-2 pr-8 rounded-lg bg-[#2D2542] text-white focus:outline-none focus:ring-2 focus:ring-[#EA9F23] flex-1'
              value={expansionFilter}
              onChange={(e) => setExpansionFilter(e.target.value)}
              aria-label='Filter by expansion'
            >
              <option value=''>All expansions</option>
              {uniqueExpansions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid de cartas */}
      <CardGrid cards={visibleCards} onCardSelect={setSelected} />

      {/* Modal de detalles */}
      <CardModal card={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
