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
          <div className="flex justify-between items-center container">
            <div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
              </button>
              <nav>
                <Link href="#">Shop</Link>
                <Link href="#">Shop</Link>
                <Link href="#">Shop</Link>
              </nav>
            </div>
            <Link href="#">Link</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
