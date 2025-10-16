'use server';

import { personalizedRecommendations } from '@/ai/flows/personalized-recommendations-prompt';
import { products } from '@/lib/data';

export async function getRecommendations(browsingHistory: string, purchaseHistory: string) {
  try {
    const result = await personalizedRecommendations({
      customerId: '12345', // Mock customer ID
      browsingHistory,
      purchaseHistory,
    });
    
    // The AI returns a string of recommended product names. We need to find the actual products.
    // This is a simple implementation. A real-world app would need more robust parsing.
    const recommendedProductNames = result.recommendations.split('\n').map(name => 
      name.replace(/^- /, '').trim().toLowerCase()
    );

    const recommendedProducts = products.filter(product => 
      recommendedProductNames.some(recName => product.name.toLowerCase().includes(recName))
    );
    
    return recommendedProducts.slice(0, 4); // Return up to 4 matched products
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
}
