import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;