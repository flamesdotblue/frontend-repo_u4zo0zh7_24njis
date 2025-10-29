import { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Tag } from 'lucide-react';

export default function ListingCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            {item.listingType}
          </span>
          {item.price && (
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
              R{item.price}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3">
          <img src={item.user.avatar} alt={item.user.name} className="h-9 w-9 rounded-full object-cover" />
          <div className="flex-1">
            <p className="text-sm font-semibold leading-tight">{item.user.name}</p>
            <p className="text-xs text-gray-500">{item.user.university} • {item.campus}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs rounded-full bg-gray-100 px-2 py-1">{item.size}</span>
            <span className="text-xs rounded-full bg-gray-100 px-2 py-1">{item.condition}</span>
          </div>
        </div>

        <h3 className="mt-3 font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {item.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-violet-50 text-violet-700 px-2 py-1 text-xs">
              <Tag className="h-3 w-3" /> {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              aria-label="Like"
              onClick={() => setLiked((v) => !v)}
              className={`inline-flex items-center gap-1 transition-colors ${liked ? 'text-rose-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-rose-600' : ''}`} />
              <span className="text-sm">{liked ? item.likes + 1 : item.likes}</span>
            </button>
            <div className="inline-flex items-center gap-1 text-gray-600">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{item.comments}</span>
            </div>
          </div>
          <button
            aria-label="Save"
            onClick={() => setSaved((v) => !v)}
            className={`transition-colors ${saved ? 'text-amber-500' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Bookmark className={`h-5 w-5 ${saved ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
}
