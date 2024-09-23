import React, { useState, useEffect } from "react";
import axios from "axios";
import Render_product from "./Render_product";

const Api = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Render_product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
            <p className="text-gray-700 text-xl">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Api;
