import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useRegister = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      return await strapi.request("POST", "/users", { data });
    },
    ...mutationConfig,
  });
};

