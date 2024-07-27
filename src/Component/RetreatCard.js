// src/components/RetreatCard.js
import React from 'react';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{retreat.title}</h2>
      <p>{retreat.description}</p>
      <p className="text-gray-600">{retreat.date}</p>
      <p className="text-gray-600">{retreat.location}</p>
      <p className="text-green-500 font-bold">${retreat.price}</p>
    </div>
  );
};

export default RetreatCard;
