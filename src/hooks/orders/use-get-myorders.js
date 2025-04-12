import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetMyOrders = () => {
    return useQuery({
        queryKey: ["myorders"],
        queryFn: async () => {
            return await strapi.request("GET", "/orders/me", {});
        },
        initialData: {
            data: [],
            meta: {},
        },
    });
};
