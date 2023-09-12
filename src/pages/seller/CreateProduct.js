import "../../style/createProduct.css";
import axios from "../../config";
import { useState } from "react";

const CreateProduct = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");

  const getCategory = async () => {
    try {
      const response = await axios.get("/category");
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getCategory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", selectedCategory);
    formData.append("brand", brand);
    formData.append("cost", cost);
    formData.append("image", image); 

    try {
      const response = await axios.post("seller/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for file upload
        },
      });

      if (response.status === 200) {
        // Handle success
        console.log("Product created successfully!");
      } else {
        // Handle error
        console.error("Failed to create product.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="cp__body">
    <form className="cp__form" onSubmit={handleSubmit}>
      <h1>Create Product</h1>
      <label htmlFor="name">Product name</label>
      <input
        type="text"
        name="name"
        className="cp__form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="price">Product cost</label>
      <input
        type="number"
        name="price"
        className="cp__form-input"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        name="brand"
        className="cp__form-input"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <label htmlFor="Category">Category</label>
      <select
        name="category"
        className="cp__form-input"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {category &&
          category.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
      </select>
      <label htmlFor="image">Product Image</label>
      <input
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
      />
      <button type="submit" className="cp__form-button">
        Create
      </button>
    </form>
  </div>
  );
};

export default CreateProduct;
