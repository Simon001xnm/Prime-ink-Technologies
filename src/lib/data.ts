import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Prime Black Toner 101',
    description: 'High-quality black toner for crisp, professional documents. Perfect for everyday printing.',
    price: 79.99,
    imageId: 'toner-black-1',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,500 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_002',
    name: 'Prime Cyan Toner 202',
    description: 'Vibrant cyan toner that delivers brilliant color prints and consistency.',
    price: 89.99,
    imageId: 'toner-cyan-1',
    specifications: {
      color: 'Cyan',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_003',
    name: 'Prime Magenta Toner 303',
    description: 'Rich magenta toner for eye-catching images and graphics.',
    price: 89.99,
    imageId: 'toner-magenta-1',
    specifications: {
      color: 'Magenta',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_004',
    name: 'Prime Yellow Toner 404',
    description: 'Bright yellow toner for vivid color and sharp details.',
    price: 89.99,
    imageId: 'toner-yellow-1',
    specifications: {
      color: 'Yellow',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_005',
    name: 'Prime Black Toner XL 101X',
    description: 'High-yield black toner for high-volume printing. More pages, less hassle.',
    price: 129.99,
    imageId: 'toner-black-xl-1',
    specifications: {
      color: 'Black',
      yield: 'Approx. 5,000 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_006',
    name: 'Prime CMYK Value Pack',
    description: 'Get all four colors (Cyan, Magenta, Yellow, Black) in one convenient value pack.',
    price: 329.99,
    imageId: 'toner-value-pack-1',
    specifications: {
      color: 'CMYK',
      yield: 'Approx. 2,300 pages per color',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_007',
    name: 'Prime Black Toner 505A',
    description: 'Compatible black toner for HP LaserJet P2035 and P2055 series printers.',
    price: 69.99,
    imageId: 'toner-black-2',
    specifications: {
      color: 'Black',
      yield: 'Approx. 2,300 pages',
      technology: 'Laser',
    },
  },
  {
    id: 'prod_008',
    name: 'Prime OEM Black Toner 85A',
    description: 'Genuine OEM black toner for guaranteed compatibility and quality.',
    price: 99.99,
    imageId: 'toner-black-oem-1',
    specifications: {
      color: 'Black',
      yield: 'Approx. 1,600 pages',
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
