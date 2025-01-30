

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const CouponPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, [user, navigate]);

  const handleCopy = () => {
    toast.success("Coupon code copied successfully!");
  };

  return (
    <div className="container w-11/12 mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-950 my-6">
        Brand Coupons
      </h1>
      {brands.map((brand) => (
        <div key={brand._id} className="mb-10 border-b pb-6">
          <div className="flex items-center mb-4">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
              <p className="text-gray-600">Rating: {brand.rating} ⭐</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.coupons.map((coupon) => (
              <div
                key={coupon.coupon_code}
                className="border p-4 rounded shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{coupon.coupon_type}</h3>
                <p>{coupon.description}</p>
                <p className="text-sm text-gray-500">
                  Expiry: {coupon.expiry_date}
                </p>
                <p className="text-sm text-gray-500">{coupon.condition}</p>
                <div className="mt-4 flex items-center gap-2">
                  <CopyToClipboard
                    text={coupon.coupon_code}
                    onCopy={handleCopy}
                  >
                    <button className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-600">
                      Copy Code
                    </button>
                  </CopyToClipboard>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600"
                    onClick={() => window.open(brand.shop_Link, "_blank")}
                  >
                    Use Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponPage;
