import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">書本交換平台</h1>
        <nav className="space-x-4">
          <Link className="hover:underline" to="/">
            首頁
          </Link>
          <Link className="hover:underline" to="/exchange">
            交換書
          </Link>
          <Link className="hover:underline" to="/sell">
            賣書
          </Link>
          <Link className="hover:underline" to="/profile">
            個人資料
          </Link>
          <Link className="hover:underline" to="/add-book">
            刊登書籍
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
