import React from 'react';

const BookList = ({ books }) => {
  if (!Array.isArray(books)) {
    return <p>沒有書籍資料</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map(book => (
        <div key={book._id} className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">{book.title}</h3>
          <img
            src={book.photo}
            alt={book.title}
            className="w-full h-48 object-cover mt-2"
          />
          <p className="mt-2">{book.description}</p>
          <p className="mt-2">價格: {book.price}</p>
          <p className="mt-2">地點: {book.location}</p>
          <p className="mt-2">可用時間: {book.availableTimes}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
