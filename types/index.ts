export type Category = 'domestic' | 'international';

export type Trip = {
  category: Category;
  date: string;
  description: string;
  featured: boolean,
  id: string;
  image: string;
  location: string;
  status?: string;
};
