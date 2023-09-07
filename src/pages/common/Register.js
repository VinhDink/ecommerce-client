import "../../style/register.css";
import { useState } from "react";
import axios from "../../config";

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', phone: '', address: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/customer', formData);
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
          <label for="email" class="form__input-label">Email</label>
          <input type="text" class="form__input" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div class="form__input-box">
          <label for="phone" class="form__input-label" >Phone</label>
          <input type="tel" name="phone" class="form__input" value={formData.phone} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="address" class="form__input-label" >Address</label>
          <input type="text" name="address" class="form__input" value={formData.address} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label" >Password</label>
          <input type="password" name="password" class="form__input" value={formData.password} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="confirm-password" class="form__input-label" >Confirm password</label>
          <input type="confirm-password" name="confirmPassword" class="form__input" value={formData.confirmPassword} onChange={handleChange}/>
        </div>
        <button type="submit" class="form__button form__button--state-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
