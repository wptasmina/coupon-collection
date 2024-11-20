
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {

  const brand = useLoaderData();

  return (
    <div className="w-full max-w-3xl mx-auto p-4 my-10 border rounded-md bg-white shadow">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold">{brand.brand_name}</h1>
          <p className="text-gray-500">{brand.category}</p>
        </div>
      </div>

      <p className="text-lg mb-4">{brand.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Available Coupons</h2>
      {brand.coupons.length > 0 ? (
        <ul className="space-y-6">
          {brand.coupons.map((coupon, index) => (
            <li
              key={index}
              className="space-y-2 p-4 border rounded-lg shadow-sm bg-blue-200"
            >
              <p className="font-bold">Code: {coupon["coupon-code"]}</p>
              <p className="text-lg font-bold text-gray-600">{coupon.description}</p>
              <p className="text-sm text-gray-600">
                <strong>Expires: </strong> {coupon["expiry-date"]}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Condition: </strong>
                {coupon.condition ? coupon.condition : "Not Available"}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type: </strong> {coupon.coupon_type}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No coupons available for this brand.</p>
      )}
    </div>
  );
};

export default BrandDetails;
