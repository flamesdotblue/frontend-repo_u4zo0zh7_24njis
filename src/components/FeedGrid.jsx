import ListingCard from './ListingCard';

export default function FeedGrid({ items, filters }) {
  const q = filters.query.trim().toLowerCase();
  const filtered = items.filter((i) => {
    const matchQuery = !q ||
      i.title.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.tags.join(' ').toLowerCase().includes(q) ||
      i.user.name.toLowerCase().includes(q);

    const matchType = !filters.type || i.listingType === filters.type;
    const matchCategory = !filters.category || i.category === filters.category;
    const matchSize = !filters.size || i.size === filters.size;
    const matchCampus = !filters.campus || i.campus === filters.campus || i.user.university === filters.campus;

    return matchQuery && matchType && matchCategory && matchSize && matchCampus;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-12 text-center text-gray-500">No items match your filters yet.</div>
      )}
    </section>
  );
}
