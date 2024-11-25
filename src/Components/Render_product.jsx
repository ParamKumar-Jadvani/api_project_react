import React from "react";
import Api from "../Api/Api";
import { useNavigate } from "react-router-dom";

const Render_product = ({ product, onDelete }) => {
  const deleteProduct = async () => {
    await Api.delete(`/Products/${product.id}`);
    onDelete(product.id);
  };
  return (
    <div
      key={product.id}
      className="max-w-sm rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-600">
          {product.title}
        </div>
        <p className="text-gray-700 text-base mb-2">
          Category: {product.category}
        </p>
        <p className="text-gray-700 text-base mb-4">Price: ${product.price}</p>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300"
          onClick={deleteProduct}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Render_product;
