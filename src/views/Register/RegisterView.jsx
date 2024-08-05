import { Link } from "react-router-dom";
import RegisterForm from "../../components/Register/RegisterForm";
import "./registerStyle.css";

const RegisterView = () => {
  return (
    <section className="register-section mt-5">
      <article className="register-card text-bg-dark">
        <img
          alt="Cocina"
          className="register-img"
          src="https://defoin.es/wp-content/uploads/2023/05/curso-innovacion-cocina-defoin-castilla-la-mancha-curso-oficial-gratuito-formacion-oferta-cursos-gratuitos-cursos-sepe-1536x768.jpg"
        />
        <div className="register-content">
          <h1 className="text-center mt-2">Register</h1>
          <h2 className="text-center fs-5 mb-3">We are excited to have you!</h2>
          <RegisterForm />
        </div>
      </article>
      <article className="mt-4 text-center">
        <p>
          Already have an account?
          <Link className="text-decoration-none text-danger ms-1" to="/register">Login!</Link>
        </p>
      </article>
    </section>
  );
};
export default RegisterView;
