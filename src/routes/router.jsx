import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "./../pages/HomePage";
// import BrandsPage from "./../pages/BrandsPage";
// import MyProfile from "../pages/MyProfile";
import CouponPage from "../pages/CouponPage";
import TopBrands from "../components/TopBrands/TopBrands";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import Register from "../components/Registration/Register";
import Login from "../components/Login/Login";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import BrandRoute from "../pages/BrandRoute";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import Feature from "../pages/Feature";
import FeatureDetails from "../pages/FeatureDetails";
import Review from "../pages/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/routebrands",
        element: <BrandRoute />,
      },
      {
        path: "/brands",
        element: <BrandRoute />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/coponpage",
        element: <CouponPage></CouponPage>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
      {
        path: "rands/:id",
        element: <TopBrands></TopBrands>,
      },
      {
        path: "brandDetails/${brandId}",
        element: <BrandDetails />,
      },
      {
        path: "coponpage",
        element: <CouponPage />,
      },
      {
        path: "feature",
        element: <Feature></Feature>,
      },
      {
        path: "featureDetails/:id",
        element: <FeatureDetails></FeatureDetails>,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);

export default router;
