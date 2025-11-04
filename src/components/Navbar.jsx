import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-blue-500 to-rose-500" />
            <span className="font-semibold tracking-wide text-white">BlueStream</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm text-white/70">
            <a className="hover:text-white transition" href="#">Home</a>
            <a className="hover:text-white transition" href="#">Movies</a>
            <a className="hover:text-white transition" href="#">Series</a>
            <a className="hover:text-white transition" href="#">Categories</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <button className="p-2 hover:text-white transition" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-white transition" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <button className="ml-2 h-8 w-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition" aria-label="Account">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
