const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postLoginFn = async (data) => {

  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();

  if (!res.ok || !Array.isArray(users)) {
    throw new Error("Ocurrió un error al intentar iniciar sesión");
  }

  const foundUser = users.find((user) => {
    return user.username === data.username;
  });

  if (!foundUser) {
    throw new Error("Las credenciales son incorrectas");
  }

  const isPasswordTheSame = foundUser.password === data.password;

  if (!isPasswordTheSame) {
    throw new Error("Las credenciales son incorrectas");
  }

  return { ...foundUser, password: undefined };
};
