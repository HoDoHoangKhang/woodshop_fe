import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Login from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";
import Checkout from "../pages/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation";
import SocialResponsibility from "../pages/SocialResponsibility";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Profile from "../pages/Profile";
import EmailVerification from "../pages/auth/EmailVerification";
import EmailVerificationSuccess from "../pages/auth/EmailVerificationSuccess";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPasswrod";

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
    path: "/verify-email",
    component: EmailVerification,
  },
  {
    path: "/verify-email-success",
    component: EmailVerificationSuccess,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/order-confirmation",
    component: OrderConfirmation,
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
  {
    path: "/profile",
    component: Profile,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
