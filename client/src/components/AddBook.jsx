import axios from 'axios';
import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [availableTimes, setAvailableTimes] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newBook = {
      title,
      photo,
      price,
      location,
      availableTimes,
      description,
      owner: 'user_id', // 替換 'user_id' 為實際的使用者 ID
    };

    try {
      const response = await axios.post(
        'http://localhost:5001/api/books/add',
        newBook,
      );
      console.log('Book added:', response.data);
      // 清空表單
      setTitle('');
      setPhoto('');
      setPrice('');
      setLocation('');
      setAvailableTimes('');
      setDescription('');
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded shadow"
    >
      <div className="mb-4">
        <label className="block text-gray-700">書名</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="書名"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">照片 URL</label>
        <input
          type="text"
          value={photo}
          onChange={e => setPhoto(e.target.value)}
          placeholder="照片 URL"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">價格</label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="價格"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">地點</label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="地點"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">可用時間</label>
        <input
          type="text"
          value={availableTimes}
          onChange={e => setAvailableTimes(e.target.value)}
          placeholder="可用時間"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">描述</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="描述"
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        刊登書籍
      </button>
    </form>
  );
};

export default AddBook;
