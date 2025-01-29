import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="sm:w-10/12 mx-auto sm:px-0 px-4 bg-white my-8">
      <h2 className="sm:text-4xl text-3xl mt-10 text-blue-950 font-extrabold text-center mb-4">
        Customer Reviews
      </h2>
      <p className="text-lg text-gray-600 w-full md:w-2/3 text-center pb-10  mx-auto">
        Hear from our satisfied customers and see why they love our products!
        Their experiences reflect the quality and reliability we offer.
      </p>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.timestamp}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{review.review}</p>
              <div className="text-yellow-500">
                {"⭐".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Review;
