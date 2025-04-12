import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetOrderByCode = ({ code }) => {
  return useQuery({
    queryKey: ["orders", code],
    queryFn: async () => {
      return await strapi.request("GET", `/orders/${code}`);
    },
    initialData: {
      data: {},
      meta: {},
    },
  });
};
