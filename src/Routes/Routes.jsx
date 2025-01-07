import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRout from "./PrivateRout";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Main/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/order/:category',
            element: <Order></Order>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/secret',
            element: <PrivateRout><Secret></Secret></PrivateRout>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
      children: [
        // normal users route
        {
          path: "cart",
          element: <Cart></Cart>
        },
        // admin only route
        {
          path: "addItems",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: "users",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

export default router;