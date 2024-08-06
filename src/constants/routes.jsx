import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import HomeView from "../views/Home/HomeView";
import LoginView from "../views/Login/LoginView";
import RegisterView from "../views/Register/RegisterView";
import PrivateView from "../views/routing/PrivateView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "detail/:id",
        element: <p>Detail</p>,
      },

      {
        path: "",
        element: <AuthViews />,
        children: [
          {
            path: "login",
            element: <LoginView />,
          },
          {
            path: "register",
            element: <RegisterView/>,
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
