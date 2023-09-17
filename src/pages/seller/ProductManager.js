import "../../style/productManager.css";
import "../../style/common.css";
import { useState, useEffect } from "react";
import axios from "../../config";
import { set } from "mongoose";
import { Link, useLocation } from "react-router-dom";

const ProductManager = () => {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [cost, setCost] = useState("");
  const [_id, set_Id] = useState("");

  const getUser = async () => {
    try {
      const response = await axios.get("/me");
      return response.data.userId;
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryName = async (cateId) => {
    try {
      const response = await axios.post("/category-name",{
      cateId: cateId});
      console.log(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const userId = await getUser();
        console.log(userId)
        const response = await axios.post("seller/product", {
          userId: userId,
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getProduct();
  }, []);

//get category
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get("/category");
        console.log(response.data);
        setLoading(false);
        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, []);

  const setDefault = (_id) => {
    const product = data.find((item) => item._id === _id);
    set_Id(product._id);
    setName(product.name);
    setCategory(product.category);
    setBrand(product.brand);
    setCost(product.cost);
    console.log(product);
  };

  const openModal = (_id) => {
      setDefault(_id);
    document.querySelector(".modal").style.display = "block";
  };

  const deleteProduct = (_id) => {
    const response = axios.delete("/seller/product", {
      data: {
        _id,
      },
    });
    console.log(response);
    window.location.reload();
  };

  window.onclick = function (event) {
    if (event.target == document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
        set_Id("");
        setName("");
        setCategory("");
        setBrand("");
        setCost("");
    }
  };

  // Sorting Function
  const sortBy = (array, key, isNumeric = false) => {
    return [...array].sort((a, b) => {
      const valueA = isNumeric ? parseFloat(a[key]) : a[key];
      const valueB = isNumeric ? parseFloat(b[key]) : b[key];

      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  };

  // Filtering Function
  const filterBy = (array, key, value) => {
    if (value === "all") {
      return array;
    } else {
      return array.filter((item) => item[key] === value);
    }
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setData(sortBy(data, newValue));
    console.log(data);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setFilterValue(newValue);
    setData(filterBy(data, "category", newValue));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('seller/update-product', {
        _id,
        name,
        brand,
        cost,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    } 
  };

  return (
    <div class="page__box">
      <div class="modal">
        <div class="pm__modal-content">
          <form className="pm__modal-form" onSubmit={handleSubmit}>
            <input value={_id} hidden/>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Product name"
              className="pm__form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Product brand"
              className="pm__form-input"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              id="cost"
              name="cost"
              placeholder="Product cost"
              className="pm__form-input"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <button className="pm__form-button pm__form-button--state-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="page__content">
        <div class="page__title">
          <h1>Product manager</h1>
          <div class="pm__filter-sort">
            <div>
          {/* filter using all category fetched */}
              Filter:
              <select
                name="filter"
                id="filter"
                value={filterValue}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                {category &&
                  category.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              Sort:
              <select
                name="sort"
                id="sort"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value="name">Name</option>
                <option value="cost">Cost</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
          <Link
          to="/order-manager"
          style={{ textDecoration: "none" }}>
        <button class="page__button--add" >Order</button>
        </Link>
          <Link
          to="/create-product"
          style={{ textDecoration: "none" }}>
        <button class="page__button--add" >Add</button>
        </Link>
        </div>
        <div>
          <table class="table__box">
            <tr>
              <th class="text-center">Index</th>
              <th class="text-center">Name</th>
              <th class="text-center">Category ID</th>
              <th class="text-center">Brand</th>
              <th class="text-center">Cost</th>
              <th class="text-center">Date</th>
            </tr>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.cateId}</td>
                <td>{item.brand}</td>
                <td>{item.cost}</td>
                <td>{item.date}</td>
                <td class="table__action">
                  <button
                    class="table__update"
                    onClick={() => openModal(item._id)}
                  >
                    <i class="bi bi-arrow-up-circle"></i>
                  </button>
                  <button
                    class="table__delete"
                    onClick={() => deleteProduct(item._id)}
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
