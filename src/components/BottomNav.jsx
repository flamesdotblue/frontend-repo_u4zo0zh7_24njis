import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-5 py-3">
          <NavButton icon={<Home className="h-6 w-6" />} label="Home" active />
          <NavButton icon={<Search className="h-6 w-6" />} label="Search" />
          <div className="flex items-center justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-white shadow-lg hover:bg-violet-700 active:scale-95 transition">
              <PlusCircle className="h-6 w-6" />
              <span className="hidden sm:inline">Create</span>
            </button>
          </div>
          <NavButton icon={<MessageCircle className="h-6 w-6" />} label="Messages" />
          <NavButton icon={<User className="h-6 w-6" />} label="Profile" />
        </div>
      </div>
    </nav>
  );
}

function NavButton({ icon, label, active = false }) {
  return (
    <button
      className={`flex flex-col items-center justify-center text-sm ${
        active ? 'text-violet-600' : 'text-gray-600 hover:text-gray-900'
      }`}
      aria-label={label}
    >
      {icon}
      <span className="text-[11px] mt-1">{label}</span>
    </button>
  );
}
