import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/products",
        component: Products,
    },
    {
        path: "/product/:id",
        component: ProductDetail,
    },
    {
        path: "/cart",
        component: Cart,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
