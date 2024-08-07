import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import HomeView from "../views/Home/HomeView";
import LoginView from "../views/Login/LoginView";
import RegisterView from "../views/Register/RegisterView";
import PrivateView from "../views/routing/PrivateView";
import AdminView from "../views/Admin/AdminView";
import DetailView from "../views/Detail/DetailView";

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
        element: <DetailView/>,
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
            element: <AdminView/>,
          },
        ],
      },
    ],
  },
]);
