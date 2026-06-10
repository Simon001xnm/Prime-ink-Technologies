
'use client';

import Link from 'next/link';
import { Menu, User, Shield, Terminal, ShoppingCart, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { useState } from 'react';

const navLinks = [
  { href: '/#products', label: 'Shop Products', icon: Terminal },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/track-order', label: 'Track Order', icon: Shield },
  { href: '/account', label: 'My Account', icon: User },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-8 hidden md:flex items-center">
          <Link href="/" className="mr-10 transition-transform hover:scale-105">
            <Logo />
          </Link>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground transition-all hover:text-red-500"
              >
                <link.icon className="h-3 w-3 transition-colors group-hover:text-red-500" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background/95 backdrop-blur-xl border-white/10">
            <SheetHeader className="pb-8 border-b border-white/5">
               <Link href="/" className="flex justify-center" onClick={() => setMobileMenuOpen(false)}>
                <Logo />
              </Link>
            </SheetHeader>
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground hover:text-red-500"
                >
                  <link.icon className="h-4 w-4 text-red-500" />
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-center md:hidden">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </Button>
          <Link href="/login">
            <Button variant="outline" className="border-red-500/50 text-red-500 hidden sm:flex font-mono text-xs uppercase tracking-tighter hover:bg-red-500/10">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button variant="ghost" size="icon" className="sm:hidden text-red-500">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
