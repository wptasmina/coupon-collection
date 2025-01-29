import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const FeatureDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/feature.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);
  const handleGotoHomeRoute = () => {
    navigate("/");
  };
  const selectedCardData = features.find((item) => item.id === parseInt(id));

  if (!selectedCardData) {
    return <p>Feature not found</p>;
  }

  const {
    name,
    price,
    image,
    isNewArrival,
    discount,
    details: { description, features: featureList, stock, category },
  } = selectedCardData;
  const hadleAddToCart = () => {
    toast.warn("Function didn't implement yet!");
  };
  return (
    <div className="md:w-11/12 mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:w-1/2">
          <img src={image} alt={name} className="w-full sm:h-full h-60 object-cover" />
        </div>
        <div className="p-6 flex flex-col">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {name}
              {isNewArrival && (
                <span className="ml-1 inline-block px-2 text-sm text-white bg-green-600 rounded-full">
                  New
                </span>
              )}
            </h2>
            <p className="mt-2 text-lg text-gray-600">{description}</p>
            <div className="mt-4">
              <p className="text-xl font-bold text-gray-900">
                Price: 
                ${price}
                {discount > 0 && (
                  <span className="text-sm text-white bg-red-500 px-2 ml-2 rounded-full">
                    {discount}% off
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Category: <span className="font-semibold">{category}</span>
              </p>
              <p className="text-sm text-gray-700 font-medium">
                In Stock: <span className="font-semibold">{stock}</span>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {featureList.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" flex sm:mt-10 mt-6 sm:gap-8 gap-4 items-center">
            <button
              onClick={hadleAddToCart}
              className="btn btn-primary sm:px-6 py-2 text-white bg-blue-950 rounded-lg shadow-md hover:bg-blue-800 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleGotoHomeRoute}
              className="btn btn-outline sm:px-6 py-2 text-blue-950 border border-blue-950 rounded-lg hover:bg-blue-950 hover:text-white transition"
            >
              Back to Home
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
