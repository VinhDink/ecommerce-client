import "../../style/productManager.css";
import "../../style/common.css";
import { useEffect, useState } from "react";
import axios from "../../config/index"
import { get } from "mongoose";

const ProductManager = () => {
  const raw = [
    {
      id: 1,
      name: "Laptop Asus VivoBook 14 OLED M1405YA KM047W",
      category: "Laptop",
      brand: "ASUS",
      quantity: "4",
      date: "2021-10-10",
      cost: "15.990.000",
    },
    {
      id: 2,
      name: "Laptop ASUS ZenBook S13 OLED UX5304VA NQ125W",
      category: "Laptop",
      brand: "ASUS",
      quantity: "3",
      date: "2021-10-09",
      cost: "36.490.000",
    },
    {
      id: 3,
      name: "Laptop Acer Swift X SFX14 71G 75CV",
      category: "Laptop",
      brand: "ACER",
      quantity: "3",
      date: "2021-10-08",
      cost: "39.990.000",
    },
    {
      id: 4,
      name: "Laptop MSI Modern 15 B12MO 487VN",
      category: "Laptop",
      brand: "MSI",
      quantity: "8",
      date: "2021-10-07",
      cost: "16.890.000",
    },
    {
      id: 5,
      name: "Laptop MSI Modern 14 C13M 612VN",
      category: "Laptop",
      brand: "MSI",
      quantity: "6",
      date: "2021-10-010",
      cost: "16.490.000",
    },
    {
      id: 6,
      name: "Laptop MSI Creator Z16 HX Studio B13VFTO 063VN",
      category: "Laptop",
      brand: "MSI",
      quantity: "2",
      date: "2021-10-06",
      cost: "77.990.000",
    },
    {
      id: 7,
      name: "Màn hình Asus TUF GAMING VG249Q1A 24'' IPS 165Hz Gsync",
      category: "Screen",
      brand: "ASUS",
      quantity: "23",
      date: "2021-10-05",
      cost: "3.490.000",
    },
    {
      id: 8,
      name: "Màn hình LG 24GN60R-B 24'' IPS 144Hz HDR10 Freesync",
      category: "Screen",
      brand: "LG",
      quantity: "18",
      date: "2021-10-07",
      cost: "3.290.000",
    },
    {
      id: 9,
      name: "Màn hình cong Samsung LC49G95 49'' VA 2K 240Hz Gsync",
      category: "Screen",
      brand: "SamSung",
      quantity: "15",
      date: "2021-10-08",
      cost: "24.790.000",
    },
    {
      id: 10,
      name: "Keyboard Logitech G713 RGB TKL Linear",
      category: "Keyboard",
      brand: "Logitech",
      quantity: "12",
      date: "2021-10-09",
      cost: "3.090.000",
    },
    {
      id: 11,
      name: "Keyboard Logitech G512 GX RGB Linear",
      category: "Keyboard",
      brand: "Logitech",
      quantity: "14",
      date: "2021-10-05",
      cost: "1.890.000",
    },
    {
      id: 12,
      name: "Keyboard Razer BlackWidow V4 Pro",
      category: "Keyboard",
      brand: "Razer",
      quantity: "24",
      date: "2021-10-04",
      cost: "5.990.000",
    },
    {
      id: 13,
      name: "Keyboard Razer Huntsman V2 Linear Optical Switch PUBG BATTLEGROUNDS Edition",
      category: "Keyboard",
      brand: "Razer",
      quantity: "14",
      date: "2021-10-07",
      cost: "6.290.000",
    },
    {
      id: 14,
      name: "Keyboard Corsair K100 RGB",
      category: "Keyboard",
      brand: "Corsair",
      quantity: "16",
      date: "2021-10-08",
      cost: "5.290.000",
    },
    {
      id: 15,
      name: "Keyboard Corsair K100 RGB Midnight Gold",
      category: "Keyboard",
      brand: "Corsair",
      quantity: "18",
      date: "2021-10-06",
      cost: "5.890.000",
    },
    {
      id: 16,
      name: "Keyboard Corsair K65 RGB MINI",
      category: "Keyboard",
      brand: "Corsair",
      quantity: "22",
      date: "2021-10-05",
      cost: "2.590.000",
    },
    {
      id: 17,
      name: "Mouse Logitech MX Anywhere 3 for Business Graphite",
      category: "Mouse",
      brand: "Logitech",
      quantity: "14",
      date: "2021-10-04",
      cost: "1.750.000",
    },
    {
      id: 18,
      name: "Mouse Logitech M331 Silent Black",
      category: "Mouse",
      brand: "Logitech",
      quantity: "35",
      date: "2021-10-09",
      cost: "350.000",
    },
    {
      id: 19,
      name: "Mouse Razer DeathAdder V2 Pro",
      category: "Mouse",
      brand: "Razer",
      quantity: "26",
      date: "2021-10-10",
      cost: "1.990.000",
    },
    {
      id: 20,
      name: "Mouse Razer Basilisk V3",
      category: "Mouse",
      brand: "Razer",
      quantity: "24",
      date: "2021-10-07",
      cost: "990.000",
    },
    {
      id: 21,
      name: "Mouse Razer Viper Ultimate (RZ01-03050100-R3A1)",
      category: "Mouse",
      brand: "Razer",
      quantity: "23",
      date: "2021-10-08",
      cost: "2.290.000",
    },
    {
      id: 22,
      name: "Header Logitech G733 LIGHTSPEED Wireless Black",
      category: "Header",
      brand: "Logitech",
      quantity: "14",
      date: "2021-10-06",
      cost: "2.890.000",
    },
    {
      id: 23,
      name: "Header Logitech G435 Lightspeed Wireless - Blue Raspberry",
      category: "Header",
      brand: "Logitech",
      quantity: "19",
      date: "2021-10-05",
      cost: "1.329.000",
    },
    {
      id: 24,
      name: "Header Razer Barracuda X 2022",
      category: "Header",
      brand: "Razer",
      quantity: "23",
      date: "2021-10-04",
      cost: "2.390.000",
    },
    {
      id: 25,
      name: "Header Razer Kraken BT Kitty Edition - Quartz",
      category: "Header",
      brand: "Razer",
      quantity: "26",
      date: "2021-10-09",
      cost: "2.690.000",
    },
  ]

  const [data, setData] = useState(raw);
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/manager/showAllProduct')
      .then((res) => {
        setRealData(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const openModal = () => {
    document.querySelector(".modal").style.display = "block";
  };

  const deleteProduct = () => {};

  window.onclick = function (event) {
    if (event.target == document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    }
  };

  // Sorting Function
  const sortBy = (array, key) => {
    return [...array].sort((a, b) => {
      if (key === "cost") {
        const costA = parseInt(a[key].replace(/\D/g, ""));
        const costB = parseInt(b[key].replace(/\D/g, ""));

        if (costA < costB) return -1;
        if (costA > costB) return 1;
        return 0;
      } else {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
      return 0;
    });
  };

  // Filtering Function
  const filterBy = (array, key, value) => {
    return raw.filter((item) => {
      if (value === "all") return true;
      return item[key] === value;
    });
    setData(raw);
  };

  const [filterValue, setFilterValue] = useState();

  const [selectedValue, setSelectedValue] = useState("");

  const [selectedCate, setSelectedCate] = useState('')
    
  const [pData, setPData] = useState({name:'', imgURL: null, descrip:'', brand:'', cost: 0});

  const openModalAddProduct = (e) => {
    e.preventDefault();
    let modalAdd = document.querySelector(".modalAddProduct");
    modalAdd.style.display = "block";
  }

  const closeModalAddProduct = (e) => {
    e.preventDefault();
    let modalAdd = document.querySelector(".modalAddProduct");
    modalAdd.style.display = "none";
  }

  const handleCateChange = (e) => {
    const cateChange = e.target
    setSelectedCate(cateChange);
    console.log(selectedCate);
    //
  }

  const categories = async() => {
    axios.get('api/manager/product/category')
    .then((r) => {
      return r
    })
    .catch((err) => {
      console.log("Find all categories error")
      console.log(err)
    })
  }

  const handleCateAddProduct = async (dataProd, selectingCategory) => {
    axios.get('/api/manager/product/create', {
      params: {
        category: selectedCate,
      },
    })
    .then((responceCate) => function loadingAtt(responceCate) {
      for(let i = 0; i < (responceCate.attCate).length; i++) {
        let newArrayAtt = [];
        newArrayAtt.push(responceCate.attCate[i]);
        return newArrayAtt
      }
    })
    .catch((err) => console.log("Error axios selectCategory"))
  }

  const handleAddProduct = async (dataProd, selectingCategory) => {
    setPData({...pData, category_att: handleCateAddProduct})
    axios.post('/api/manager/product/create', {
      params: {
        category: selectedCate,
      },
      data: {
        pData
      }
    })
    .then(() => {
      console.log(pData)
    })
    .catch((err) => console.log("Error axios create product"))
    setPData({name:'', imgURL: null, descrip:'', brand:'', cost: 0, category_att: []});
  }

  const handleUpdateProduct = async (dataProd) => {
    axios.post('/api/manager/product/update', {
      params: {
        id: dataProd._id,
      },
      data: {dataProd}
    })
    .then(() => console.log("Please check updating route in server"))
    .catch((err) => console.log("Error frontend updating"))
    setPData({name:'', imgURL: null, descrip:'', brand:'', cost: 0, category_att: []});
  }
  
  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setPData({ ...pData, [name]: value });
  }

  const handleInputPhoto = (e) => [
    setPData({...pData, imgURL: e.target.files[0]})
  ]

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setData(sortBy(raw, newValue));
    console.log(data);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setFilterValue(newValue);
    setData(filterBy(data, "category", newValue));
    console.log(data);
  };

  return (
    <>
      <div class="page__box">
        <div class="modalAddProduct">
          <div className="pm__modal-content">
            <h4>Create a product</h4>
            <select className="cate__choosing" onChange={handleCateChange}>
              <option selected>Select a Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>{category.name}</option>
              ))}
            </select>
            <form class="pm__modal-form" encType='multipart/form-data'>
              <label for="name">Name</label>
              <input type="text" id="name" name="pName" placeholder="Name" value={pData.name} onChange={handleInputChange} class="pm__form-input" />
              <label for="category">Image: </label>
              <input type="file" id="imgURL" name="pCategory" value={pData.imgURL} onChange={(e) => handleInputPhoto(e)} />
              <label for="brand">Brand</label>
              <input type="text" id="brand" name="pBrand" placeholder="Brand" value={pData.brand} onChange={handleInputChange} class="pm__form-input" />
              <label for="cost">Cost</label>
              <input type="text" id="cost" name="pCost" placeholder="Cost" value={pData.cost} onChange={handleInputChange} class="pm__form-input" />
              <div className="btn-group">
                <button class="pm__form-button pm__form-button--state-primary" onClick={(e) => {handleAddProduct(pData, selectedCate); closeModalAddProduct(e)}}>Create</button>
                <button class="pm__form-button pm__form-button--state-secondary" onClick={(e)=> {closeModalAddProduct(e)}}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div class="modal">
          <div class="pm__modal-content">
            <form class="pm__modal-form">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Product name"
                class="pm__form-input"
              />
              <label for="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Product category"
                class="pm__form-input"
              />
              <label for="brand">Brand</label>
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Product brand"
                class="pm__form-input"
              />
              <label for="quantity">Quantity</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                placeholder="Product quantity"
                class="pm__form-input"
              />
              <label for="cost">Cost</label>
              <input
                type="text"
                id="cost"
                name="cost"
                placeholder="Product cost"
                class="pm__form-input"
              />
              <button class="pm__form-button pm__form-button--state-primary" onClick={() => {handleUpdateProduct(pData)}}>
                Update
              </button>
            </form>
          </div>
        </div>
        <div class="page__content">
          <div class="page__title">
            <h1>Product manager</h1>
            <div class="pm__filter-sort">
              <div>
                Filter by Category:
                <select
                  name="brand"
                  id="brand"
                  onChange={handleFilterChange}
                  value={filterValue}
                >
                  <option value="all">All</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Screen">Screen</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Header">Header</option>
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
            <button class="page__button--add" onClick={(e) => {openModalAddProduct(e)}}>Add</button>
          </div>
          <div>
            <table class="table__box">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Date</th>
              </tr>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.brand}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost}</td>
                  <td>{item.date}</td>
                  <td class="table__action">
                    <button class="table__update" onClick={openModal}>
                      <i class="bi bi-arrow-up-circle"></i>
                    </button>
                    <button class="table__delete">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>  
  );
};

export default ProductManager;
