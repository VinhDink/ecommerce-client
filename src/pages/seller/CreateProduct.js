import "../../style/createProduct.css";

const CreateProduct = () => {
  return (
    <div class="cp__body">
      <form class="cp__form">
        <h1>Create Product</h1>
        <label for="name"> Product name</label>
        <input type="text" name="name" class="cp__form-input"></input>
        <label for="price"> Product price</label>
        <input type="number" name="price" class="cp__form-input"></input>
        <label for="brand"> Brand</label>
        <input type="text" name="brand" class="cp__form-input"></input>
        <label for="countInStock"> Count in stock</label>
        <input type="number" name="countInStock" class="cp__form-input"></input>
        <label for="Category">Category</label>
        <select name="category" class="cp__form-input"> 
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
        </select>
        <button type="submit" class="cp__form-button">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
