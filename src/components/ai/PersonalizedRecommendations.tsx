'use client';

import { useEffect, useState } from 'react';
import type { Product } from '@/types';
import { getRecommendations } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';
import { Skeleton } from '../ui/skeleton';

interface PersonalizedRecommendationsProps {
  currentProduct: Product;
}

export default function PersonalizedRecommendations({ currentProduct }: PersonalizedRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      // Mock browsing and purchase history based on the current product
      const browsingHistory = `User is viewing the product page for "${currentProduct.name}", which is a ${currentProduct.specifications.color} toner with a page yield of ${currentProduct.specifications.yield}.`;
      const purchaseHistory = `User has previously purchased high-yield black toner cartridges and owns a compatible laser printer.`;
      
      const recommendedProducts = await getRecommendations(browsingHistory, purchaseHistory);
      // Filter out the current product from recommendations
      setRecommendations(recommendedProducts.filter(p => p.id !== currentProduct.id));
      setLoading(false);
    }

    fetchRecommendations();
  }, [currentProduct]);

  if (loading) {
    return (
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6 font-headline">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
             <Card key={i}>
                <CardHeader>
                    <Skeleton className="h-48 w-full" />
                </CardHeader>
                <CardContent className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardContent>
             </Card>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null; // Don't show the section if there are no recommendations
  }

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-6 font-headline">You Might Also Like</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {recommendations.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1 h-full">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </div>
  );
}
