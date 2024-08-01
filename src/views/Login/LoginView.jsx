import { Link } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import "./loginStyle.css";

const LoginView = () => {
  return (
    <section className="login-section mt-5">
      <article className="login-card text-bg-dark">
        <img
          alt="Cocina"
          className="login-img"
          src="https://canterasdelmundo.com/wp-content/uploads/2021/06/MESADA-DE-COCINA_htm_5573937e45f1dbe0.jpg"
        />
        <div className="login-content">
          <h1 className="text-center mt-2">Login</h1>
          <h2 className="text-center fs-5">Welcome back!</h2>
          <LoginForm />
        </div>
      </article>
      <article className="mt-4 text-center">
        <p>
          Do not have an account?
          <Link className="text-decoration-none text-danger ms-1" to="/register">Register!</Link>
        </p>
      </article>
    </section>
  );
};
export default LoginView;
