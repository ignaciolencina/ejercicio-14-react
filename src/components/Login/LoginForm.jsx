import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        error={errors.username}
        label="Username"
        maxLenght={20}
        minLenght={3}
        name="username"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          length,
          minLenght: 3,
          maxLenght: 20,
        }}
        placeholder="Username"
        register={register}
      />
      <Input
        className="mt-3"
        error={errors.password}
        label="Password"
        maxLenght={20}
        minLenght={3}
        name="password"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          minLenght: 3,
          maxLenght: 20,
        }}
        placeholder="Password"
        register={register}
        type="password"
      />
      <div className="text-center mt-4">
        <button className="btn text-light login-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
