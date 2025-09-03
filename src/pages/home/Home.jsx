import React, { useEffect } from "react";

import Card from "../component/Card";
import { useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get(
      "https://mern-books-backend-71em.onrender.com/book"
    );
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
        {books.length > 0 &&
          books.map((book) => {
            return <Card key={book._id} book={book} />;
          })}
      </div>
    </>
  );
};

export default Home;
