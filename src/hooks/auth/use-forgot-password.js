import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useForgotPassword = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (email) => {
      return await strapi.forgotPassword({ email });
    },
    ...mutationConfig,
  });
};
