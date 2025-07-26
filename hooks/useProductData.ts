// hooks/useProductData.ts
import useSWR from "swr";
import axios from "axios";
import { Data } from "@/types/product";

const fetcher = async (url: string): Promise<Data> => {
  const res = await axios.get<Data>(url, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      accept: "application/json",
    },
  });

  return res.data;
};

export function useProductData(
  slug: string = "ielts-course",
  lang: "en" | "bn" = "en"
) {
  const { data, error, isLoading } = useSWR<Data>(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
