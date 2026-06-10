'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Zap, Shield, Globe, AlertTriangle } from 'lucide-react';

const PRODUCTS_PER_PAGE = 12;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Neural Background Grid */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <section className="relative z-10 w-full py-20 md:py-32 lg:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  System Online
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-500">
                  <AlertTriangle className="h-3 w-3 animate-pulse" />
                  Premium Support
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none neon-glow font-headline">
                  NEXT-GEN <br />
                  <span className="text-primary italic">PRIME </span>
                  <span className="text-red-500">INK</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Industrial-grade toner built for performance. Get high-quality prints that last longer, delivered right to your door.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 px-8 text-lg font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all hover:scale-105">
                  <Link href="#products">Shop All Toners</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 border-red-500/50 text-red-500 hover:bg-red-500/10">
                  <Link href="#">View Specs</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { icon: Cpu, label: "Max Yield", color: "text-primary" },
                  { icon: Zap, label: "Fast Dry", color: "text-red-500" },
                  { icon: Shield, label: "Reliable", color: "text-primary" },
                  { icon: Globe, label: "Always Stocked", color: "text-red-500" }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-4 text-center tech-border">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    <span className="text-[10px] uppercase tracking-tighter text-muted-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-red-600 to-primary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-black border border-white/10 p-2">
                <Image
                  src="/CEO.jpg"
                  alt="Prime Ink Systems Command"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="products" className="relative z-10 w-full py-20 bg-black/40 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl neon-glow font-headline">AVAILABLE TONERS</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-red-600 rounded-full"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-xl">
              Find the perfect cartridge for your printer.
            </p>
          </div>
          
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-16">
            <Button 
              onClick={handlePreviousPage} 
              disabled={currentPage === 1}
              variant="outline"
              className="border-primary/20"
            >
              Previous Page
            </Button>
            <div className="px-4 py-2 border border-white/10 bg-white/5 rounded font-mono text-sm text-primary flex gap-2">
              <span className="text-red-500">PAGE:</span> {currentPage} / {totalPages}
            </div>
            <Button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
              variant="outline"
              className="border-primary/20"
            >
              Next Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}