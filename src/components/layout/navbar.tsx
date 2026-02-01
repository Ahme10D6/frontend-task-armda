'use client';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          cyber
        </Link>

        <div className="hidden md:flex flex-1 mx-10 max-w-md relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#F5F5F5] rounded-lg py-2 px-10 outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <div className="flex items-center gap-6">
          <Heart className="cursor-pointer hidden sm:block" size={24} />
          <ShoppingCart className="cursor-pointer hidden md:block" size={24} />
          <User className="cursor-pointer hidden sm:block" size={24} />
          <button
            type="button"
            className="md:hidden p-2 -m-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={closeMenu}
          aria-hidden
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-200 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-6 pb-8 px-4">
            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="p-2 -m-2 rounded-lg hover:bg-gray-100"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#F5F5F5] rounded-lg py-3 px-10 outline-none"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              <Link
                href="/"
                className="py-3 px-2 rounded-lg hover:bg-gray-100 text-base font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
            </nav>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <button type="button" className="p-2" aria-label="Wishlist">
                <Heart size={24} />
              </button>
              <Link href="#" className="p-2" onClick={closeMenu} aria-label="Cart">
                <ShoppingCart size={24} />
              </Link>
              <button type="button" className="p-2" aria-label="Account">
                <User size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}