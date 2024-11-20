// import { useLoaderData } from "react-router-dom";


// export default function Details() {
//   const brandDetails = useLoaderData();
//   return (
//     <>
//       {/* <button
//         className="btn"
//         onClick={() => document.getElementById("my_modal_3").showModal()}
//       >
//         open modal
//       </button> */}
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <p className="py-4">Press ESC key or click on ✕ button to close</p>
//         </div>
//       </dialog>
//     </>
//   );
// }

import { useLoaderData } from "react-router-dom";

const Details = () => {
  const brandDetails = useLoaderData();

  if (!brandDetails) {
    return <div>Brand not found or an error occurred.</div>;
  }

  return (
    <div className="flex justify-center my-10">
      <div className="bg-white w-96 shadow p-4 rounded-md border space-y-2">
        <img
          src={brandDetails.image}
          alt={`${brandDetails.brand_name} banner`}
          className="w-full h-60 object-center rounded-t-md"
        />
        <h1 className="text-2xl text- font-bold">{brandDetails.brand_name}</h1>
        <p className="text-md text- font-medium">{brandDetails.description}</p>
        <div className="flex justify-between pb-8">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <p className="text-md text- font-medium pr-4">
            Rating: {brandDetails.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

