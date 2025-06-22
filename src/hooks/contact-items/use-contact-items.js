import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useContact = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      return await strapi.create("contact-items", data);
    },
    ...mutationConfig,
  });
};

