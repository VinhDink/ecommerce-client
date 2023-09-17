import "../../style/login.css";
import { useState } from "react";
import axios from "../../config";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login/seller", formData);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      navigate('/product-manager');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="form">
      <form class="form__form" onSubmit={handleSubmit}>
        <h1 class="form__title">Seller login</h1>
        <div class="form__input-box">
          <label for="email" class="form__input-label">
            Email or phone
          </label>
          <input
            type="text"
            class="form__input"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
          />
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label">
            Password
          </label>
          <input
            type="password"
            class="form__input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="form__button form__button--state-primary">
          Login
        </button>
        <Link to="/seller-register"
          style={{ textDecoration: "none" }}><div class="form__register">Create an account</div></Link>
          <Link to="/login"
          style={{ textDecoration: "none" }}><div class="form__register">login as customer</div></Link>
      </form>
    </div>
  );
};

export default Login;
