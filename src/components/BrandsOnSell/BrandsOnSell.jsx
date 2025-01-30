import React, { useContext } from "react";

import { productContext } from './../../context/ProductProvider';
// import BrandsData from "../BrandsData/BrandsData";
import BrandsData from './../BrandsData/BrandsData';

const BrandsOnSell = () => {
  const { brands } = useContext(productContext);

  const sellAvailable = brands.filter(
    (sellProduct) => sellProduct.isSaleOn === true
  );
  console.log(sellAvailable);

  return (
    <div className="md:w-10/12 mx-auto w-11/12">
      <h2 className="text-4xl font-extrabold text-center text-[#cc582b] mb-6">
        Brands on Sale
      </h2>
      <p className="w-full md:w-2/3 mx-auto text-center my-4 text-[#34495E]">
        Shop now and enjoy massive discounts on top brands! Grab your favorite
        products at unbeatable prices before the sale ends!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellAvailable.map((brand) => (
          <BrandsData key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
