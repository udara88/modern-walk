"use client";
import { useState, useEffect } from "react";
import { customFetch } from "../components/utils";
import { Category } from "../types";

export const useFetchCategoryById = (categoryId: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCategoryById = async () => {
      console.log(categoryId);
      try {
        const { data } = await customFetch.get<Category[]>(
          `/products/category/${categoryId}`
        );
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An error occured while fetching data");
      }
    };
    fetchCategoryById();
  }, [categoryId]);

  return { categories, loading, error };
};
