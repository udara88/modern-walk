import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const extractCategory = (categoryId: string) => {
  const categoryStr = categoryId.split("-")[0];
  const index = categoryStr.indexOf("s");
  const appendString = "'s clothing";
  return categoryStr.substring(0, index) + appendString;
};
