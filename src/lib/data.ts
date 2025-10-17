import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Asta Black Toner 001',
    description: 'High-quality black toner for crisp, professional documents. Perfect for everyday printing.',
    price: 10400,
    imageId: 'toner-1',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,500 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_002',
    name: 'Asta Black Toner 002',
    description: 'Vibrant black toner that delivers brilliant color prints and consistency.',
    price: 11700,
    imageId: 'toner-2',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_003',
    name: 'Asta Black Toner 003',
    description: 'Rich black toner for eye-catching images and graphics.',
    price: 11700,
    imageId: 'toner-3',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_004',
    name: 'Asta Black Toner 004',
    description: 'Bright black toner for vivid color and sharp details.',
    price: 11700,
    imageId: 'toner-4',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_005',
    name: 'Asta Black Toner 005',
    description: 'High-yield black toner for high-volume printing. More pages, less hassle.',
    price: 16900,
    imageId: 'toner-5',
    specifications: {
      color: 'Black',
      yield: 'Approx. 5,000 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_006',
    name: 'Asta Black Toner 006',
    description: 'Get our reliable black toner in one convenient value pack.',
    price: 42900,
    imageId: 'toner-6',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_007',
    name: 'Asta Black Toner 007',
    description: 'Compatible black toner for various laser printers.',
    price: 9100,
    imageId: 'toner-7',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_008',
    name: 'Asta Black Toner 008',
    description: 'Genuine OEM black toner for guaranteed compatibility and quality.',
    price: 13000,
    imageId: 'toner-8',
    specifications: {
      color: 'Black',
      yield: 'Approx. 1,600 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_009',
    name: 'Asta Black Toner 009',
    description: 'A standard black toner for your daily printing needs.',
    price: 10400,
    imageId: 'toner-9',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,000 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_010',
    name: 'Asta Black Toner 010',
    description: 'Crisp and clear prints with this reliable black toner.',
    price: 11000,
    imageId: 'toner-10',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,200 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_011',
    name: 'Asta Black Toner 011',
    description: 'Cost-effective toner for high-quality printing.',
    price: 9800,
    imageId: 'toner-11',
    specifications: {
      color: 'Black',
      yield: 'Approx. 1,800 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_012',
    name: 'Asta Black Toner 012',
    description: 'Long-lasting toner for consistent performance.',
    price: 12500,
    imageId: 'toner-12',
    specifications: {
      color: 'Black',
      yield: 'Approx. 3,000 pages',
      technology: 'Laser',
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

// Mock order data
export const sampleOrder = {
  id: 'ORD12345',
  date: '2024-05-20',
  status: 'Shipped',
  trackingNumber: '1Z9999W99999999999',
  items: [
    { ...products[0], quantity: 1 },
    { ...products[4], quantity: 2 },
  ],
  total: 339.97,
  shippingAddress: {
    name: 'Jane Doe',
    street: '123 Tech Lane',
    city: 'Innovation City',
    state: 'CA',
    zip: '90210',
  },
  billingAddress: {
    name: 'Jane Doe',
    street: '123 Tech Lane',
    city: 'Innovation City',
    state: 'CA',
    zip: '90210',
  },
};
