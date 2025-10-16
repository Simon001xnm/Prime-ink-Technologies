export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  specifications: {
    color: string;
    yield: string;
    technology: string;
  };
};

export type CartItem = {
  id: string; // Unique ID for the cart item instance
  product: Product;
  quantity: number;
};
