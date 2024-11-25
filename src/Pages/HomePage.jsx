import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Render_product from "../Components/Render_product";
import Api from "../Api/Api";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await Api.get("/Products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error getting products:", error);
      setProducts([]);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Render_product
                key={product.id}
                product={product}
                onDelete={handleDelete}
              />
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
    </div>
  );
};

export default HomePage;
