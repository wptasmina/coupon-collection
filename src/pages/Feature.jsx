import React, { useContext, useEffect, useState } from "react";
import FeatureCard from "../components/FeatureCard";


const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./feature.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className=" bg-slate-50 py-10">
     <div className="sm:w-10/12 px-4 sm:px-0 mx-auto">
     <h2 class="text-4xl font-extrabold text-blue-950 mb-4 text-center pt-10">Features</h2>
      <p
        class="text-lg text-center
      w-full md:w-2/3 mx-auto pb-8 text-gray-700"
      >
        Discover the standout features that make our products unique and
        performance-driven.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {features.length > 0 ? (
      features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))
    ) : (
      <p>No features available</p>
    )}
  </div>
     </div>
      
    </div>
    
  </>
  );
};

export default Feature;
