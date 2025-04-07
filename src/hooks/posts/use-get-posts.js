import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetPosts = ({
  fields = "*",
  filters = {},
  populate = {},
  pagination = {},
  sort = {},
  options = {},
} = {}) => {
  return useQuery({
    queryKey: ["posts", fields, filters, populate, pagination, sort, options],
    queryFn: async () => {
      return await strapi.find("posts", {
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

