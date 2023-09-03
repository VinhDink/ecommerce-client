import "../../style/register.css";

const Register = () => {
  return (
    <div class="form">
      <form class="form__form">
        <h1 class="form__title">register</h1>
        <div class="form__input-box">
          <label for="username" class="form__input-label">Username</label>
          <input type="text" class="form__input" />
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label">Password</label>
          <input type="password" class="form__input" />
        </div>
        <div class="form__input-box">
          <label for="confirm-password" class="form__input-label">Confirm password</label>
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
