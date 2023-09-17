import "../../style/sellerRegister.css";
import { useState } from "react";
import axios from "../../config";

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', phone: '', businessName: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // if (formData.password !== formData.confirmPassword) {
    //   alert("passwords do not match");
    //   return;
    // }
    e.preventDefault();
    try {
      const response = await axios.put('/seller', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="form">
      <form class="form__form" onSubmit={handleSubmit}>
        <h1 class="form__title">Seller register</h1>
        <div class="form__input-box">
          <label for="username" class="form__input-label" >Email</label>
          <input type="text" class="form__input" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="phone" class="form__input-label">Phone number</label>
          <input type="tel" class="form__input" name="phone" value={formData.phone} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="business" class="form__input-label">Business name</label>
          <input type="text" class="form__input" name="businessName" value={formData.businessName} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label">Password</label>
          <input type="password" class="form__input" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <div class="form__input-box">
          <label for="confirm-password" class="form__input-label">Confirm password</label>
          <input type="password" class="form__input" value={formData.confirmPassword} onChange={handleChange}/>
        </div>
        <button type="submit" class="form__button form__button--state-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;