import { useMutation } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const usePlaceOrder = ({ mutationConfig } = {}) => {
  return useMutation({
    mutationFn: async (data) => {
      return await strapi.request("POST", "/orders/place-order", { data });
    },
    ...mutationConfig,
  });
};
