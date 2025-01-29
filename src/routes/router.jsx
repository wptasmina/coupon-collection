import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "./../pages/HomePage";
import BrandsPage from "./../pages/BrandsPage";
import MyProfile from "../pages/MyProfile";
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
        // loader: () => fetch("/brands.json"),
      },
      {
        path: "/brands",
        element: <BrandRoute />,
        // loader: () => fetch("/brands.json"),
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
        // loader: () => fetch("/brands.json").then((res) => res.json()),
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
      {
        path: "/brands/:id",
        element: <TopBrands></TopBrands>,
      },
      // {
      //   path: "/",
      //   element: <TopBrands />,
      //   loader: async () => {
      //     try {
      //       const res = await fetch("/brands.json");
      //       const brands = await res.json();

      //       return brands.filter((brand) => brand.isSaleOn);
      //     } catch (error) {
      //       console.error("Error loading brands:", error.message);
      //       throw error;
      //     }
      //   },
      // },
      
      {
        path: "/brandDetails/:brandId",
        element: <BrandDetails />,
        // loader: async ({ params }) => {
        //   try {
        //     const res = await fetch("/brands.json");
        //     const brands = await res.json();
        //     const brand = brands.find((b) => b._id.toString() === params.id);

        //     if (!brand)
        //       throw new Error(`Brand with ID ${params.id} not found.`);
        //     return brand;
        //   } catch (error) {
        //     console.error("Error loading brand details:", error.message);
        //     throw error;
        //   }
        // },
      },
      // {
      //   path: "/brands-on-sale",
      //   element: <BrandsOnSale />,
      //   loader: async () => {
      //     try {
      //       const res = await fetch("/brands.json");
      //       const brandsData = await res.json();

      //       return brandsData.filter((brand) => brand.isSaleOn);
      //     } catch (error) {
      //       console.error("Error loading brands:", error.message);
      //       throw error;
      //     }
      //   },
      // },

      {
        path: "/brands",
        element: <BrandsPage />,
        // loader: () => fetch("/brands.json"),
      },
      {
        path: "/coupon-page",
        element: <CouponPage />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/feature",
        element: <Feature></Feature>,
      },
      {
        path: "/featureDetails/:id",
        element: <FeatureDetails></FeatureDetails>,
      },
      {
        path: "/review",
        element: <Review />,
      },
      // {
      //   path: "/details/:id",
      //   element: <Details></Details>,

      //   loader: async ({ params }) => {
      //     try {
      //       const res = await fetch("/brands.json");

      //       const data = await res.json();
      //       const brandDetails = data.find(
      //         (brand) => brand._id.toString() === params.id
      //       );

      //       if (!brandDetails) {
      //         throw new Error(`No data found for ID: ${params.id}`);
      //       }

      //       return brandDetails;
      //     } catch (error) {
      //       console.error("Error loading data:", error.message);
      //       throw error;
      //     }
      //   },
      // },
    ],
  },
]);

export default router;
