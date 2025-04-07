import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useMe = ({ options = {} } = {}) => {
  return useQuery({
    queryKey: ["me", options],
    queryFn: async () => {
      return await strapi.fetchUser();
    },
    initialData: {
      data: [],
      meta: {},
    },
    ...options,
  });
};
