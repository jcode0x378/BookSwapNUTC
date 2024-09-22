import axios from 'axios';
import React, { useState } from 'react';

const Profile = () => {
  const [studentId, setStudentId] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const userProfile = { studentId, phone };
    try {
      await axios.post('/api/user/profile', userProfile);
      setMessage('資料更新成功');
    } catch (error) {
      setMessage('資料更新失敗');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">個人資料</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border rounded shadow"
      >
        <div className="mb-4">
          <label className="block text-gray-700">學號</label>
          <input
            type="text"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">電話</label>
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          更新資料
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Profile;
