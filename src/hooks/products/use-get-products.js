import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetProducts = ({
  keyword = "",
  page = 1,
  pageSize = 25,
  options = {},
} = {}) => {
  return useQuery({
    queryKey: ["products", keyword, page, pageSize, options],
    queryFn: async () => {
      return await strapi.find("products");
    },
    initialData: {
      data: [],
      meta: {
        page: 1,
        pageSize,
        totalPages: 1,
        totalItems: 0,
        hasNextPage: false,
      },
    },
    ...options,
  });
};

