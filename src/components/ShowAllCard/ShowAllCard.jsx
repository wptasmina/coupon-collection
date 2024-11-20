import { NavLink } from "react-router-dom";


export default function ShowAllCard() {
  return (
    <div className="flex justify-end">
      <button className="px-6 py-2 bg-[#218ec4] text-white text-lg font-medium rounded-md">
        <NavLink to="/about">Show All</NavLink>
      </button>
    </div>
  );
}
