'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing personalized toner recommendations to customers based on their browsing history and purchase behavior.
 *
 * - personalizedRecommendations - A function that takes customer data and returns personalized toner recommendations.
 * - PersonalizedRecommendationsInput - The input type for the personalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the personalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  customerId: z.string().describe('The unique identifier of the customer.'),
  browsingHistory: z.string().describe('A description of the customer\'s browsing history on the website.'),
  purchaseHistory: z.string().describe('A description of the customer\'s past purchases.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('A list of personalized toner recommendations for the customer, tailored to their browsing and purchase history.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function personalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides personalized toner recommendations for online store customers.

  Based on the customer's browsing history and purchase behavior, suggest relevant toners that they might be interested in.
  Make sure the recommendations are tailored to the customer's specific needs and preferences, described in the browsing and purchase history.

  Customer ID: {{{customerId}}}
  Browsing History: {{{browsingHistory}}}
  Purchase History: {{{purchaseHistory}}}

  Recommendations:`, 
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
