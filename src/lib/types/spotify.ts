export type Icon = {
  height: number;
  width: number;
  url: string;
};

export type Category = {
  href: string;
  id: string;
  icons: Icon[];
  name: string;
};

export type CategoriesResponse = {
  href: string;
  items: Category[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
};
