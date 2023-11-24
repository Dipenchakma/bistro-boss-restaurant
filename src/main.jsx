import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import Menu from "./Routes/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Pages/Provider/AuthProvider";
import SignUp from "./Pages/Register/SignUp";

import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from "@tanstack/react-query";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Cart from "./Pages/DashBoard/Cart";
import AllUsers from "./Pages/DashBoard/All users/AllUsers";
import PrivateRoute from "./Routes/PrivateRoute";
import AddItems from "./Pages/DashBoard/AddItems";
import AdminRoute from "./Routes/AdminRoute";
import Payment from "./Pages/DashBoard/Payment/Payment";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // admin routes
      {
        path: "users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "addItems",
        element:<AdminRoute><AddItems></AddItems></AdminRoute>,
      },
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
