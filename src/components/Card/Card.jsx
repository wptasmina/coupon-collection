import { NavLink } from "react-router-dom";

export default function Card({ service }) {
  const { _id, image, title, brand_name, rating, description, brand_logo } = service;

  return (
    <>
      <div className="card card-compact bg-base-100 shadow border">
        <figure>
          <img
            src={image}
            className="w-full h-[200px] md:h-[250px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-blue-950 md:text-lg text-md font-bold">
            {title}
          </h2>
          <p
            className="text-blue-950 md:text-md text-sm font-medium"
            title={description}
          >
            {description}
          </p>
          <div className="card-actions justify-end">
            <NavLink to={`/details/${_id}`}>
              <button className="px-6 py-1 bg-blue-950 font-medium cursor-pointer text-white md:text-lg text-md rounded-lg">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
