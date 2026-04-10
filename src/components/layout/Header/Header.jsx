"use client";

import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { menuData } from "./menuData";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-yellow-bg sticky top-0 z-50 shadow-md">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold"
          >
            <Image src="/Vishodhanas.png" width={180} height={230} alt="vishodana" />
          </Link>
          

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-end">
            <DesktopMenu menu={menuData} />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu
          menu={menuData}
          onClose={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}