import { useQuery } from "@tanstack/react-query";
import { strapi } from "../../libs/strapi-sdk";

export const useGetProducts = ({
    fields = "*",
    filters = {},
    populate = {},
    pagination = {},
    sort = {},
    options = {},
} = {}) => {
    return useQuery({
        queryKey: [
            "products",
            fields,
            filters,
            populate,
            pagination,
            sort,
            options,
        ],
        queryFn: async () => {
            return await strapi.find("products", {
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
