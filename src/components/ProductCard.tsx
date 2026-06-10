'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Scan, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);

  const handleShopOnWhatsApp = () => {
    const message = encodeURIComponent(`System Inquiry: Requesting order protocols for "${product.name}". UID: ${product.id}`);
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Establishing Uplink",
      description: "Secure WhatsApp communication channel initialized.",
    });
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-card/40 backdrop-blur-md border-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] relative">
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Scan className="h-4 w-4 text-primary animate-pulse" />
      </div>
      
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-black/50">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              data-ai-hint={placeholder.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        </Link>
      </CardHeader>
      
      <CardContent className="flex-1 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-primary uppercase border border-primary/30 px-2 py-0.5 rounded">
            {product.specifications.color}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">
            {product.specifications.yield.split(' ')[1]} PG
          </span>
        </div>
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 uppercase tracking-tighter">
            {product.name}
          </CardTitle>
        </Link>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-5 pt-0 border-t border-white/5 mt-4">
        <p className="text-xl font-black text-primary font-mono tracking-tighter">
          KES {product.price.toLocaleString()}
        </p>
        <Button size="sm" onClick={handleShopOnWhatsApp} className="rounded-full px-4 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
