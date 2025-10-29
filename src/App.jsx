import { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchFilters from './components/SearchFilters';
import FeedGrid from './components/FeedGrid';
import BottomNav from './components/BottomNav';

function App() {
  const [filters, setFilters] = useState({ query: '', type: '', category: '', size: '', campus: '' });
  const [current, setCurrent] = useState('home'); // home | search | create | messages | profile

  const data = useMemo(() => seedData(), []);
  const campuses = useMemo(() => Array.from(new Set(data.items.map((i) => i.campus))), [data.items]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50/40 pb-20">
      <HeaderBar />

      {current === 'home' && (
        <>
          <HeroSection />
          <SearchFilters
            filters={filters}
            setFilters={setFilters}
            campuses={campuses}
            onClear={() => setFilters({ query: '', type: '', category: '', size: '', campus: '' })}
          />
          <FeedGrid items={data.items} filters={filters} />
        </>
      )}

      {current === 'search' && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold">Explore listings</h2>
          <p className="text-gray-600 mt-1">Use search and filters to find exactly what you need across campuses.</p>
          <div className="mt-6" />
          <SearchFilters
            filters={filters}
            setFilters={setFilters}
            campuses={campuses}
            onClear={() => setFilters({ query: '', type: '', category: '', size: '', campus: '' })}
          />
          <FeedGrid items={data.items} filters={filters} />
        </section>
      )}

      {current === 'create' && (
        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="text-2xl font-bold">Create a listing</h2>
          <p className="text-gray-600 mt-1">Share an item to sell, swap, or donate.</p>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Title</label>
              <input className="rounded-xl border px-3 py-2" placeholder="e.g. Vintage Denim Jacket" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Description</label>
              <textarea className="rounded-xl border px-3 py-2" rows={4} placeholder="Condition, fit, pick-up location..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Type</label>
                <select className="rounded-xl border px-3 py-2">
                  <option>Sell</option>
                  <option>Swap</option>
                  <option>Donate</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Price (R)</label>
                <input type="number" className="rounded-xl border px-3 py-2" placeholder="e.g. 250" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Category</label>
                <select className="rounded-xl border px-3 py-2">
                  <option>Tops</option>
                  <option>Bottoms</option>
                  <option>Outerwear</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Size</label>
                <select className="rounded-xl border px-3 py-2">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Campus</label>
                <select className="rounded-xl border px-3 py-2">
                  {campuses.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Images</label>
                <input type="file" multiple className="rounded-xl border px-3 py-2" />
              </div>
            </div>
            <button type="button" className="mt-2 inline-flex justify-center rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white hover:bg-violet-700 active:scale-95 transition">
              Save draft
            </button>
          </form>
        </section>
      )}

      {current === 'messages' && (
        <section className="mx-auto max-w-4xl px-4 py-10">
          <h2 className="text-2xl font-bold">Messages</h2>
          <p className="text-gray-600 mt-1">Chat with buyers and swappers in real-time. Coming soon.</p>
          <div className="mt-8 rounded-2xl border bg-white p-6 text-center text-gray-500">No conversations yet.</div>
        </section>
      )}

      {current === 'profile' && (
        <section className="mx-auto max-w-4xl px-4 py-10">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-bold">Your Profile</h2>
              <p className="text-gray-600">Manage your listings, likes, and campus settings.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold">Your listings</h3>
              <p className="text-sm text-gray-600 mt-1">Create and manage your items for sale, swap, or donation.</p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold">Saved items</h3>
              <p className="text-sm text-gray-600 mt-1">Items you bookmarked will appear here.</p>
            </div>
          </div>
        </section>
      )}

      <BottomNav current={current} onNavigate={setCurrent} />
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

// Demo seed data tailored for South African universities and ZAR pricing
function seedData() {
  const users = [
    {
      id: 'u1',
      name: 'Thando Mkhize',
      university: 'University of Cape Town',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u2',
      name: 'Kabelo Nkosi',
      university: 'Wits University',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u3',
      name: 'Anika van der Merwe',
      university: 'Stellenbosch University',
      avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u4',
      name: 'Lerato Molefe',
      university: 'University of Pretoria',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'u5',
      name: 'Ayanda Dlamini',
      university: 'Sol Plaatje University',
      avatar: 'https://images.unsplash.com/photo-1520975922521-6b19f40bb5a8?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const items = [
    {
      id: 'i1',
      title: 'Vintage Denim Jacket',
      description: 'Classic oversized denim with light distressing. Perfect for chilly UCT mornings.',
      category: 'Outerwear',
      size: 'M',
      condition: 'Great',
      listingType: 'Sell',
      price: 350,
      campus: 'UCT',
      tags: ['#sale', '#vintage', '#denim'],
      images: ['https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop'],
      likes: 42,
      comments: 12,
      user: users[0],
    },
    {
      id: 'i2',
      title: 'Purple Hoodie',
      description: 'Cozy pullover in campus colours. Lightly worn and super soft.',
      category: 'Tops',
      size: 'L',
      condition: 'Good',
      listingType: 'Donate',
      price: null,
      campus: 'Wits',
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
      campus: 'Maties',
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
      price: 220,
      campus: 'UP',
      tags: ['#sale', '#corduroy'],
      images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop'],
      likes: 15,
      comments: 2,
      user: users[3],
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
      campus: 'SPU',
      tags: ['#donation', '#tote'],
      images: ['https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop'],
      likes: 9,
      comments: 1,
      user: users[4],
    },
    {
      id: 'i6',
      title: 'Puffer Jacket',
      description: 'Ultra-warm puffer, perfect for winter mornings. Slightly cropped fit.',
      category: 'Outerwear',
      size: 'XL',
      condition: 'Like New',
      listingType: 'Sell',
      price: 600,
      campus: 'NWU',
      tags: ['#sale', '#winter'],
      images: ['https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'],
      likes: 54,
      comments: 10,
      user: users[0],
    },
  ];

  return { users, items };
}

export default App;
