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

      {/* <section className="w-11/12 mx-auto bg-white my-10 space-y-8">
        <ShowAllCard />

        <div className="my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3">
          {card.slice(0, 6).map((service, i) => (
            <Card key={i} service={service}></Card>
          ))}
        </div>
      </section> */}
    </>
  );
}
