"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export function NavbarDemo() {
  const pathname=usePathname();
  const navItems = [
    
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
     { name: "Collections", link: "/collection" },
  ];


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleClick = () => {
    if (pathname === "/") {
      // Already on homepage → just scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with hash
     window.location.href = "/#contact_us"
    }
  };
  return (
    
    <div className="fixed top-0 left-0 w-full z-50 bg-white-600 text-black ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Logo with Home link */}
          <NavbarLogo />

          {/* Nav Links */}
          <NavItems items={navItems} />

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <div onClick={() => handleClick()}>
              <NavbarButton variant="primary" className="text-black font-black border">Contact</NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            {/* Logo for Mobile */}
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block text-white hover:text-pink-400"
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Button for Mobile */}
            <div className="flex w-full flex-col gap-4 mt-4">
              <div onClick={() => {
                setIsMobileMenuOpen(false);
                handleClick();
              }}>
                <NavbarButton variant="primary" className="w-full">
                  Contact Us
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      </div>
  );
}
