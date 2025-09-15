import { useState } from "react";

interface Category {
  href: string;
  id: string;
  name: string;
  icons: { height: number; url: string; width: number }[];
}

interface CategoryResponse {
  items: Category[];
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // TODO: fetch categories here (/api/categories)

  return { categories };
};

export default useFetchCategories;
