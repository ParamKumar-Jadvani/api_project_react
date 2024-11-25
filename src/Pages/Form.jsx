import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Api from "../Api/Api";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.post("/Products", formData);
      alert("Product added successfully");
      getData();
      setFormData({ title: "", category: "", price: "", image: "" });
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Product Manager</h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Image
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>

        {/* Display Product List */}
        <div className="mt-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4">Products List</h2>
          <ul className="bg-gray-100 p-4 rounded-lg shadow-lg">
            {products.map((product) => (
              <li
                key={product.id}
                className="p-4 mb-4 bg-white rounded-lg shadow-sm"
              >
                <p>
                  <strong>Title:</strong> {product.title}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
