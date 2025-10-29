import { useMemo } from 'react';
import { Search, X } from 'lucide-react';

const CATEGORIES = ['Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Accessories'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const TYPES = ['Sell', 'Swap', 'Donate'];

export default function SearchFilters({ filters, setFilters, onClear, campuses = [] }) {
  const campusOptions = useMemo(() => {
    const base = campuses.length ? campuses : ['All Campuses'];
    return Array.from(new Set(base));
  }, [campuses]);

  return (
    <div className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={filters.query}
              onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
              placeholder="Search by item, tag, or user"
              className="w-full pl-10 pr-3 py-2 rounded-xl border bg-white/70 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <select
            value={filters.type}
            onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
            className="px-3 py-2 rounded-xl border bg-white/70 text-sm"
          >
            <option value="">All Types</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            value={filters.category}
            onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
            className="px-3 py-2 rounded-xl border bg-white/70 text-sm"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={filters.size}
            onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
            className="px-3 py-2 rounded-xl border bg-white/70 text-sm"
          >
            <option value="">Any Size</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select
            value={filters.campus}
            onChange={(e) => setFilters((f) => ({ ...f, campus: e.target.value }))}
            className="px-3 py-2 rounded-xl border bg-white/70 text-sm"
          >
            <option value="">All Campuses</option>
            {campusOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button
            onClick={onClear}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border text-sm hover:bg-gray-50"
          >
            <X className="h-4 w-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
}
