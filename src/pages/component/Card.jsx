import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div
      className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
      href="#"
    >
      <img
        src={
          book.imageUrl
            ? book.imageUrl
            : "https://th.bing.com/th/id/OIP.s6qkxOqsGKB_7JnvbKujWAHaE2?w=241&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        }
        className="shadow rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
        <h4 className="font-bold text-xl">{book.bookName}</h4>

        <p className="mt-2 text-gray-600">{book.bookPrice}</p>
        <p className="mt-2 text-gray-600">{book.publishedAt}</p>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            <Link to={`/book/${book._id}`}> see more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
