import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BrandsData = ({ brand }) => {
  const {
    brand_name,
    rating,
    description,
    brand_logo,
    coupons,
    shop_Link,
    category,
    isSaleOn,
  } = brand;

  // Function to handle visiting the store
  const handleVisitStore = () => {
    if (shop_Link) {
      window.open(shop_Link, "_blank"); // Open the shop link in a new tab
    } else {
      toast.warn("Shop link not available!"); // Show a warning if the link is missing
    }
  };

  return (
    <div className="card bg-white border shadow-md">
      <img
        src={brand_logo}
        alt={`${brand_name} Logo`}
        className="w-full lg:h-[300px] sm:h-[250px] h-[250px] object-cover border-b md:px-6 md:pt-6 px-4 pt-4"
      />
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{brand_name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center">
          <span className="mr-2 font-bold">Rating: {rating}</span>
          <span
            className={`badge ${isSaleOn ? "badge-success" : "badge-error"}`}
          >
            {isSaleOn ? "Sale On" : "No Sale"}
          </span>
        </div>
        <div>
          <span className="text-sm font-medium">Category: {category}</span>
        </div>
        <div className="mt-1">
          <h3 className="text-lg font-bold">Coupons:</h3>
          <ul className="list-none">
            {coupons.map((coupon, index) => (
              <li
                key={index}
                className="flex items-start gap-1 justify-between"
              >
                <span className="w-4/5 text-[10px] md:text-[16px]">
                  {coupon.coupon_code} - {coupon.description}
                </span>
                <span className="text-[8px] md:text-xs w-2/5 my-1 bg-green-300 p-1 flex items-center justify-center rounded-full">
                  {coupon.expiry_date}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end mt-2">
          <Link
            to="#"
            onClick={handleVisitStore}
            className="btn bg-[#d35523] hover:bg-blue-900 text-white"
          >
            Visit Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsData;
