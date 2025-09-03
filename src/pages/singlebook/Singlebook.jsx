import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const Singlebook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    const response = await axios.get(
      `https://mern-books-backend-71em.onrender.com/book/${id}`
    );
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `https://mern-books-backend-71em.onrender.com/book/${id}`
      );
      if (response.status === 200) {
        alert("Book deleted successfully");
        navigate("/"); // redirect to homepage.
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Something went wrong while deleting the book");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-2 p-4 bg-white shadow-lg rounded-2xl max-w-sm mx-auto">
        <img
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://th.bing.com/th/id/OIP.s6qkxOqsGKB_7JnvbKujWAHaE2?w=241&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          }
          className="w-1/2 mb-4 rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-bold mb-2">{book.bookName}</h1>
        <p className="text-lg font-semibold text-gray-500 text-center">
          Price: Rs. {book.bookPrice}
        </p>
        <p className="text-lg font-semibold text-gray-500 text-center">
          Author: {book.authorName}
        </p>
        <p className="text-lg font-semibold text-gray-500 text-center">
          {book.description}
        </p>
        <Link to={`/editbook/${book._id}`}>
          <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Edit
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-200"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Singlebook;
