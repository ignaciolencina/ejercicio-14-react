import { useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Input from "../ui/Input/Input";
import { useState } from "react";
import { postRegisterFn } from "../../api/auth";

import "./registerFormStyle.css";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleCheckboxChange1 = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange2 = () => {
    setShowRepeatedPassword(!showRepeatedPassword);
  };

  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    watch,
    reset,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`All set! Welcome ${userData.firstname}!`);

      reset();

      login(userData);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const password = watch("password", "");

  const handleSubmit = (data) => {
    toast.loading("Saving you up...");
    postRegister(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="row g-2">
        <Input
          className="col-md"
          error={errors.firstname}
          label="First name"
          maxLenght={30}
          minLenght={2}
          name="firstname"
          options={{
            required: {
              value: true,
              message: "Obligatory field",
            },
            length,
            minLenght: 2,
            maxLenght: 30,
          }}
          placeholder="First name"
          register={register}
        />
        <Input
          className="col-md"
          error={errors.lastname}
          label="Last name"
          maxLenght={30}
          minLenght={2}
          name="lastname"
          options={{
            required: {
              value: true,
              message: "Obligatory field",
            },
            minLenght: 2,
            maxLenght: 30,
          }}
          placeholder="Last name"
          register={register}
        />
      </div>
      <Input
        className="mt-2"
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
      <div className="alert-block mt-2 px-3 py-1">
        <p className="m-0">Password must have:</p>
        <ul>
          <li>6-12 characters</li>
          <li>At least one lowercase letter</li>
          <li>At least one uppercase letter</li>
          <li>At least one number</li>
        </ul>
      </div>
      <Input
        className="mt-2"
        error={errors.password}
        label="Password"
        maxLenght={12}
        minLenght={6}
        name="password"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          minLenght: {
            value: 6,
            message: "The password must be at least 6 characters",
          },
          maxLenght: {
            value: 12,
            message: "The password must have a maximum of 12 characters",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/,
            message: "You must respect the password pattern",
          },
        }}
        placeholder="Password"
        register={register}
        type={showPassword ? "text" : "password"}
      />
      <div className="password-visible ms-3">
        <input
          className="custom-checkbox mt-2"
          id="showPassword"
          type="checkbox"
          onChange={handleCheckboxChange1}
        />
        <label className="custom-label" htmlFor="showPassword">
          Show Password
        </label>
      </div>
      <Input
        className="mt-2"
        error={errors.repeatPassword}
        label="Repeat Password"
        maxLenght={12}
        minLenght={6}
        name="repeatPassword"
        options={{
          required: {
            value: true,
            message: "Obligatory field",
          },
          validate: (value) => value === password || "Passwords do not match",
        }}
        placeholder="Repeat Password"
        register={register}
        type={showRepeatedPassword ? "text" : "password"}
      />
      <div className="password-visible ms-3">
        <input
          className="custom-checkbox mt-2"
          id="showRepeatedPassword"
          type="checkbox"
          onChange={handleCheckboxChange2}
        />
        <label className="custom-label" htmlFor="showRepeatedPassword">
          Show Repeated Password
        </label>
      </div>
      <div className="text-center mt-4">
        <button className="btn text-light login-btn" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
