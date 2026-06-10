'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Scan, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleShopOnWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'd like to order "${product.name}". (Product ID: ${product.id})`);
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Chatting with our sales team now.",
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <Card className="group flex h-full flex-col overflow-hidden bg-card/40 backdrop-blur-md border-white/5 transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] relative tilt-card">
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <Scan className="h-4 w-4 text-red-500 animate-pulse" />
        </div>
        
        <CardHeader className="p-0 relative overflow-hidden">
          <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-black/50">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 opacity-80 group-hover:opacity-100"
                data-ai-hint={placeholder.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </Link>
        </CardHeader>
        
        <CardContent className="flex-1 p-5 space-y-3 tilt-content">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-red-500 uppercase border border-red-500/30 px-2 py-0.5 rounded animate-pulse">
              {product.specifications.color}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">
              {product.specifications.yield.split(' ')[1]} YIELD
            </span>
          </div>
          <Link href={`/products/${product.id}`}>
            <CardTitle className="text-lg font-bold leading-tight group-hover:text-red-500 transition-colors line-clamp-2 uppercase tracking-tighter neon-glow">
              {product.name}
            </CardTitle>
          </Link>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between p-5 pt-0 border-t border-white/5 mt-4 tilt-content">
          <p className="text-xl font-black text-red-500 font-mono tracking-tighter">
            KES {product.price.toLocaleString()}
          </p>
          <Button size="sm" onClick={handleShopOnWhatsApp} className="rounded-full px-4 bg-red-600 hover:bg-red-700 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardFooter>
        
        {/* Dynamic Light Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),white,transparent_50%)]"
          style={{
            background: `radial-gradient(circle at ${rotate.y * -5 + 50}% ${rotate.x * 5 + 50}%, rgba(239,68,68,0.2), transparent 50%)`
          }}
        />
      </Card>
    </div>
  );
}