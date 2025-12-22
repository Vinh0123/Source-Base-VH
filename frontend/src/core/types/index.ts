export type Product = {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  createdAt: string;
};

export type Blog = {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  author?: string;
  createdAt: string;
  image?: string;
  tags?: string[];
};
