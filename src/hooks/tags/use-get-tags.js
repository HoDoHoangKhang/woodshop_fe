import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetTags = ({
  fields = "*",
  filters = {},
  populate = {},
  pagination = {},
  sort = {},
  options = {},
} = {}) => {
  return useQuery({
    queryKey: ["tags", fields, filters, populate, pagination, sort, options],
    queryFn: async () => {
      return await strapi.find("tags", {
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

