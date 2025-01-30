import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import BrandsOnSell from "../components/BrandsOnSell/BrandsOnSell";
import TopBrands from "../components/TopBrands/TopBrands";
import Feature from "./Feature";
import Review from "./Review";



export default function HomePage() {
  const card = useLoaderData();
  return (
    <>
      
      <Banner />
      <TopBrands />
      <BrandsOnSell />
      <Feature />
      <Review />
    </>
  );
}
