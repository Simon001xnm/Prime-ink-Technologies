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
