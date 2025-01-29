import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FeatureCard = ({ feature }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    price,
    image,
    isNewArrival,
    discount,
    details: { description, features, stock, category },
  } = feature;
  const handleDetailsClick = () => {
    navigate(`featureDetails/${id}`);
  };
  const handleBuyNow = () => {
    toast.warn("Function didn't implement yet!");
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200 flex flex-col">
      <figure className="sm:px-6 px-4 pt-6">
        <img
          src={image}
          alt={name}
          className="rounded-t-2xl h-72 w-full object-cover"
        />
      </figure>
      <div className=" sm:px-6 px-4 pt-4 pb-6 flex flex-col justify-between flex-grow">
        <h2 className="card-title text-2xl font-bold text-gray-800">
          {name}
          {isNewArrival && (
            <div className="badge badge-secondary bg-green-600 border border-green-600 text-xs md:text-md flex ml-1">
              New
            </div>
          )}
        </h2>
        <p className="text-sm text-gray-600 pt-2">{description}</p>
        <div className="my-3">
          <span className="text-lg font-semibold text-gray-900">Price: ${price}</span>
          {discount > 0 && (
            <span className="text-sm text-white ml-2 bg-red-500 px-2 rounded-full">{discount}% off</span>
          )}
        </div>
        <div className="text-sm text-gray-500 mb-3">
          <span className="text-black font-medium">Category: {category}.</span>
          <p className="text-black font-medium">Stock: {stock}</p>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="card-actions flex justify-between items-center mt-4">
          <button onClick={handleBuyNow} className="px-3 py-1 rounded-md font-medium text-white hover:bg-blue-950 bg-blue-700 ">
            Buy Now
          </button>
          <button
            onClick={handleDetailsClick}
            className="px-3 py-1 rounded-md font-medium text-white hover:bg-blue-950 bg-[#c44817] "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
