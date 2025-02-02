
import Marquee from "react-fast-marquee";
import { productContext } from "../../context/ProductProvider";
import { useContext } from "react";

const TopBrands = () => {
  const { brands } = useContext(productContext);

  return (
    <>
      <h2 className="text-4xl text-blue-950 font-bold text-center my-10">
        Top Brands
      </h2>
      <div className="bg-blue-100">
        <div className="w-10/12 mx-auto my-8">
          <Marquee pauseOnHover speed={50} gradient={false} className="py-4">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="flex flex-col items-center mx-4 cursor-pointer"
                // onClick={() => (window.location.href = `/brand/${brand._id}`)}
              >
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-16 h-16 object-contain mb-2 rounded-full"
                />
                <span className="text-sm font-semibold">
                  {brand.brand_name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TopBrands;