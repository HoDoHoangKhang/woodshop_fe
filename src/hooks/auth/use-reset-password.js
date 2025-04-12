import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useResetPassword = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      return await strapi.resetPassword(data);
    },
    ...mutationConfig,
  });
};
