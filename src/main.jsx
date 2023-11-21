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
} from '@tanstack/react-query'
import Dashboard from "./Pages/DashBoard/Dashboard";
import Cart from "./Pages/DashBoard/Cart";


const queryClient = new QueryClient()


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
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      }
    ]
  }
  
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
