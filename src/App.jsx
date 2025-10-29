import { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchFilters from './components/SearchFilters';
import FeedGrid from './components/FeedGrid';
import BottomNav from './components/BottomNav';

function App() {
  const [filters, setFilters] = useState({ query: '', type: '', category: '', size: '', campus: '' });

  const data = useMemo(() => seedData(), []);
  const campuses = useMemo(() => Array.from(new Set(data.items.map((i) => i.campus))), [data.items]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50/40 pb-20">
      <HeaderBar />
      <HeroSection />
      <SearchFilters
        filters={filters}
        setFilters={setFilters}
        campuses={campuses}
        onClear={() => setFilters({ query: '', type: '', category: '', size: '', campus: '' })}
      />
      <FeedGrid items={data.items} filters={filters} />
      <BottomNav />
    </div>
  );
}

function HeaderBar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-amber-400" />
          <span className="font-extrabold text-xl tracking-tight">UniSwop</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
          <span className="rounded-full bg-violet-50 text-violet-700 px-2 py-1">#sale</span>
          <span className="rounded-full bg-amber-50 text-amber-700 px-2 py-1">#donation</span>
          <span className="rounded-full bg-fuchsia-50 text-fuchsia-700 px-2 py-1">#swap</span>
        </div>
      </div>
    </header>
  );
}

// Demo seed data for users and items
function seedData() {
  const users = [
    {
      id: 'u1',
      name: 'Maya Patel',
      university: 'Stanford University',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u2',
      name: 'Liam Johnson',
      university: 'UCLA',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u3',
      name: 'Sofia Martinez',
      university: 'NYU',
      avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const items = [
    {
      id: 'i1',
      title: 'Vintage Denim Jacket',
      description: 'Classic oversized denim with light distressing. Perfect for layering on chilly campus nights.',
      category: 'Outerwear',
      size: 'M',
      condition: 'Great',
      listingType: 'Sell',
      price: 35,
      campus: 'Stanford',
      tags: ['#sale', '#vintage', '#denim'],
      images: ['https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop'],
      likes: 42,
      comments: 12,
      user: users[0],
    },
    {
      id: 'i2',
      title: 'Purple Hoodie',
      description: 'Cozy pullover in campus colors. Lightly worn and super soft.',
      category: 'Tops',
      size: 'L',
      condition: 'Good',
      listingType: 'Donate',
      price: null,
      campus: 'UCLA',
      tags: ['#donation', '#hoodie'],
      images: ['https://images.unsplash.com/photo-1520975922521-6b19f40bb5a8?q=80&w=1200&auto=format&fit=crop'],
      likes: 19,
      comments: 3,
      user: users[1],
    },
    {
      id: 'i3',
      title: 'White Sneakers',
      description: 'Minimal sneakers great for everyday. Slight scuffs but overall solid.',
      category: 'Shoes',
      size: 'M',
      condition: 'Good',
      listingType: 'Swap',
      price: null,
      campus: 'NYU',
      tags: ['#swap', '#sneakers'],
      images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'],
      likes: 31,
      comments: 6,
      user: users[2],
    },
    {
      id: 'i4',
      title: 'Corduroy Pants',
      description: 'High-waisted corduroys in caramel. Soft and comfy, goes with everything.',
      category: 'Bottoms',
      size: 'S',
      condition: 'Great',
      listingType: 'Sell',
      price: 22,
      campus: 'Stanford',
      tags: ['#sale', '#corduroy'],
      images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop'],
      likes: 15,
      comments: 2,
      user: users[0],
    },
    {
      id: 'i5',
      title: 'Canvas Tote',
      description: 'Heavy-duty tote for books and groceries. Includes inner laptop sleeve.',
      category: 'Accessories',
      size: 'M',
      condition: 'Great',
      listingType: 'Donate',
      price: null,
      campus: 'UCLA',
      tags: ['#donation', '#tote'],
      images: ['https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop'],
      likes: 9,
      comments: 1,
      user: users[1],
    },
    {
      id: 'i6',
      title: 'Puffer Jacket',
      description: 'Ultra-warm puffer, perfect for winter mornings. Slightly cropped fit.',
      category: 'Outerwear',
      size: 'XL',
      condition: 'Like New',
      listingType: 'Sell',
      price: 60,
      campus: 'NYU',
      tags: ['#sale', '#winter'],
      images: ['https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'],
      likes: 54,
      comments: 10,
      user: users[2],
    },
  ];

  return { users, items };
}

export default App;
