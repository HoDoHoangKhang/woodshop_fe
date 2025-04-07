import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import Checkout from "../pages/Checkout";
import SocialResponsibility from "../pages/SocialResponsibility";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

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
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/checkout",
        component: Checkout,
    },
    {
        path: "/social-responsibility",
        component: SocialResponsibility,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/blog/:id",
        component: BlogDetail,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
