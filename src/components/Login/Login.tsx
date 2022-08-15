import { ErrorMessage } from "formik";

export const Login = ({ handleChange, handleSubmit }) => {
  return (
    <div className="container bg-dark">
      <form
        className="d-flex flex-column justify-content-center align-items-center p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1 className="text-white">Iniciar Sesion</h1>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
        <ErrorMessage name="email" component="small" className="text-danger" />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <ErrorMessage
          name="password"
          component="small"
          className="text-danger"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
