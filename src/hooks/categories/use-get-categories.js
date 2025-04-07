import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetCategories = ({
  fields = "*",
  filters = {},
  populate = {},
  pagination = {},
  sort = {},
  options = {},
} = {}) => {
  return useQuery({
    queryKey: [
      "categories",
      fields,
      filters,
      populate,
      pagination,
      sort,
      options,
    ],
    queryFn: async () => {
      return await strapi.find("categories", {
        fields,
        filters,
        populate,
        pagination,
        sort,
      });
    },
    initialData: {
      data: [],
      meta: {},
    },
    ...options,
  });
};

