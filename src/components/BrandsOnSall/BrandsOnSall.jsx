import { useLoaderData } from "react-router-dom";

const BrandsOnSall = () => {

  const brandsOnSale = useLoaderData();

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Brands on Sall</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandsOnSale.map((brand) => (
          <div
            key={brand._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={brand.brand_logo}
              alt={`${brand.brand_name} logo`}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{brand.brand_name}</h3>
            <p className="text-sm text-gray-500 font-semibold">Category: {brand.category}</p>
            <p className="text-sm text-gray-500 font-semibold py-2">
              Total Coupons: {brand.coupons.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSall;
