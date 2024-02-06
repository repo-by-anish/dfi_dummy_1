import axios from "axios";
import { useState, useEffect } from "react";
import { prodDataType, blogType, brandLogoType } from "./dummydata";

const url = "https://cdn.jsdelivr.net/gh/repo-by-anish/data_for_DFI@40213db78133358d8f9f8792a5ee4c9c2007339b/db.json";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export function useData() {
  const [products, setProducts] = useState<prodDataType[]>([]);
  const [blogs, setBlogs] = useState<blogType[]>([]);
  const [brandLogos, setBrandLogos] = useState<brandLogoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(url);
        setProducts(data.dummyData);
        setBlogs(data.blogs);
        setBrandLogos(data.brandProductAssets);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);
  return { products, blogs, isLoading, brandLogos };
}


export const screenWidth = window.innerWidth;
