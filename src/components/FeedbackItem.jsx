import { useState } from 'react';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {

  return (
    <Card>
      <div className=" h-8 w-8 bg-yellow-300 flex justify-center items-center p-6 rounded-full border  font-semibold text-teal-900 absolute -inset-3">
        {item.rating}
      </div>
      <button
        onClick={() => handleDelete(item.id)}
        className="absolute top-1 right-4 mt-1 text-green-900 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="font-medium mt-3">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
