import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Register from "./components/User/Register.jsx";
import Login from "./components/User/Login.jsx";
import ContextAPI from "./contexts/AuthContext.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import AddItem from "./Dashboard/AddItem/AddItem.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Order from "./components/Order/Order.jsx";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/:category/:id",
        element: <ProductDetails />,
      },
      {
        path: "/account/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextAPI>
        <RouterProvider router={routes}></RouterProvider>
      </ContextAPI>
    </QueryClientProvider>
  </StrictMode>
);
