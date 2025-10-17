'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, MessageCircle } from 'lucide-react';
import PersonalizedRecommendations from '@/components/ai/PersonalizedRecommendations';
import Link from 'next/link';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === product.imageId);

  const handleShopOnWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in ordering ${quantity} of "${product.name}".`);
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Redirecting to WhatsApp",
      description: "Please complete your order on WhatsApp.",
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        {' / '}
        <Link href="/#products" className="hover:text-primary">Products</Link>
        {' / '}
        <span className="text-foreground">{product.name}</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="aspect-square w-full overflow-hidden rounded-lg border">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
              data-ai-hint={placeholder.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl font-headline">{product.name}</h1>
            <p className="mt-2 text-2xl font-bold text-foreground">KES {product.price.toLocaleString()}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center text-lg font-medium">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleShopOnWhatsApp} className="flex-1">
              <MessageCircle className="mr-2 h-5 w-5" />
              Shop on WhatsApp
            </Button>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-lg font-semibold">Specifications</h3>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li><strong>Color:</strong> {product.specifications.color}</li>
              <li><strong>Page Yield:</strong> {product.specifications.yield}</li>
              <li><strong>Technology:</strong> {product.specifications.technology}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mt-24">
         <PersonalizedRecommendations currentProduct={product} />
      </div>
    </div>
  );
}
