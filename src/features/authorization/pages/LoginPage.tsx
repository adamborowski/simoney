import { AuthClient } from "../client/AuthClient";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export interface RegisterPageProps {
  client: AuthClient;
}

type RegisterFormData = {
  user: string;
  password: string;
};

export const LoginPage: FC<RegisterPageProps> = ({ client, ...rest }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    setErrorMessage(null);
    const result = await client.login(data.user, data.password);
    if (!result.success) {
      setErrorMessage(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="email" {...register("user", { required: true })} />
        {errors.user && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>
      {errorMessage && <span>{errorMessage}</span>}
      <button type="submit">Login</button>
    </form>
  );
};
