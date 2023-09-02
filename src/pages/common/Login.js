import "../../style/login.css";

const Login = () => {
  return (
    <div class="form">
      <form class="form__form">
        <h1 class="form__title">Login</h1>
        <div class="form__input-box">
          <label for="username" class="form__input-label">Username</label>
          <input type="text" class="form__input" />
        </div>
        <div class="form__input-box">
          <label for="password" class="form__input-label">Password</label>
          <input type="password" class="form__input" />
        </div>
        <button type="submit" class="form__button form__button--state-primary">
          Login
        </button>
        <div class="form__register">Create an account</div>
      </form>
    </div>
  );
};

export default Login;
