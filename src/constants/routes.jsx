import { createBrowserRouter } from "react-router-dom";
import PublicView from "../views/routing/PublicView";
import PrivateView from "../views/routing/PrivateView";
import RootView from "../views/routing/RootView";
import LoginView from "../views/Login/LoginView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <PublicView />,
        children: [
          {
            path: "",
            element: <p>Home</p>,
          },
          {
            path: "detail/:id",
            element: <p>Detail</p>,
          },
          {
            path: "login",
            element: <LoginView/>,
          },
          {
            path: "register",
            element: <p>Register</p>,
          },
        ],
      },
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "/admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
