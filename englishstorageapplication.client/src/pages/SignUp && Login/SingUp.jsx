function SignUp() {
  return (
    <>
     <form>
        <h1 className="h3 mb-3 fw-normal">Please login</h1>

        Введите ваш email
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <p></p>
        Придумайте пароль
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <p></p>
        Повторите пароль
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <p></p>
        Придумайте имя
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingPassword"
            placeholder="Name"
          />
          <label for="floatingPassword">Name</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign-up
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2024-2026</p>
      </form>
    </>
  );
}

export default SignUp;
