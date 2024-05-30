import { useState, useEffect } from "react";
import { customFetch } from "../components/utils";
import { Category } from "../types";

export const useFetchFlashSales = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchFlashList = async () => {
      try {
        const { data } = await customFetch.get<Category[]>(`/products?limit=5`);
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An error occured while fecthing data");
      }
    };
    fetchFlashList();
  }, []);

  return { categories, loading, error };
};
