import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useLogin = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      return await strapi.login(data);
    },
    ...mutationConfig,
  });
};

