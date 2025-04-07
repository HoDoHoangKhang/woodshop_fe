import Strapi from "strapi-sdk-js";
import { config } from "../config/env";

export const strapi = new Strapi({
  url: config.BACKEND_URL || "http://localhost:1337/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: true,
    cookieOptions: { path: "/" },
  },
});

strapi.setToken(localStorage.getItem("strapi_jwt") || null);
