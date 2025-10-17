'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);

  const handleShopOnWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in ordering "${product.name}".`);
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Redirecting to WhatsApp",
      description: "Please complete your order on WhatsApp.",
    });
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
          <div className="aspect-square w-full overflow-hidden">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={placeholder.imageHint}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-lg font-bold leading-tight hover:text-primary">
            {product.name}
          </CardTitle>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-bold text-foreground">KES {product.price.toLocaleString()}</p>
        <Button size="sm" onClick={handleShopOnWhatsApp}>
          <MessageCircle className="mr-2 h-4 w-4" />
          Shop
        </Button>
      </CardFooter>
    </Card>
  );
}
