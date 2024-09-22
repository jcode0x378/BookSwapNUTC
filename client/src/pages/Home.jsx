import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = useState([]); // 確保初始狀態是空數組

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/books'); // 確保使用完整的後端伺服器地址
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">歡迎來到書本交換平台</h2>
      <BookList books={books} />
    </div>
  );
};

export default Home;
