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
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
          path: "userHome",
          element: <UserHome></UserHome>
        },
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        // admin only route
        {
          path: "adminHome",
          element: <AdminHome></AdminHome>
        },
        {
          path: "addItems",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        
        {
          path: "users",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

export default router;