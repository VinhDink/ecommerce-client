import "../../style/register.css";
import { useState } from "react";
import axios from "../../config";

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="form">
      <form class="form__form" onSubmit={handleSubmit}>
        <h1 class="form__title">register</h1>
        <div class="form__input-box">
          <label for="username" class="form__input-label" value={formData.name}>Email</label>
          <input type="text" class="form__input" />
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label" value={formData.password}>Password</label>
          <input type="password" class="form__input" />
        </div>
        <div class="form__input-box">
          <label for="confirm-password" class="form__input-label" value={formData.confirmPassword}>Confirm password</label>
          <input type="confirm-password" class="form__input" />
        </div>
        <button type="submit" class="form__button form__button--state-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
