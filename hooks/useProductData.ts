import useSWR from "swr";
import axios from "axios";
import { ApiResponse } from "@/types/product";

const fetcher = async (url: string): Promise<ApiResponse> => {
  const res = await axios.get<ApiResponse>(url, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
      accept: "application/json",
    },
  });
  return res.data; // returns shape: { success, data }
};

export function useProductData(
  slug: string = "ielts-course",
  lang: "en" | "bn" = "en"
) {
  const { data, error, isLoading } = useSWR<ApiResponse>(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
