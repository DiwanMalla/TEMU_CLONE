"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnnounecementBar = () => {
  return (
    <div className="w-full bg-black py-2">
      <div className="container mx-auto flex items-center justify-center px-3">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          FREE SHIPPING ON ORDERS OVER $15.00 + FREE RETURNS
        </span>
      </div>
    </div>
  );
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;
      if (scrolledUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }
      setPrevScrollY(currentScrollY);
    };
    setPrevScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? `translate-y-0` : "-translate-y-full"
        }`}
      >
        <AnnounecementBar />
        <div className="w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm">
          <div className="flex justify-between items-center container mx-auto px-8">
            <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
              <button className="text-gray-700 hover:text-gray-900 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 block lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                <Link href="#">Shop</Link>
                <Link href="#">New Arrival</Link>
                <Link href="#">Sale</Link>
              </nav>
            </div>
            <Link href="#">Link</Link>
            <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
              <button className="text-gray-700 hover:text-gray-900 hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm8 16l-4-4"
                  />
                </svg>
              </button>
              <Link href="/auth/sign-in">Sign In</Link>
              <Link href="/auth/sign-up">Sign Up</Link>
              <button className="text-gray-700 hover:text-gray-900 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11m-4.9-6a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
