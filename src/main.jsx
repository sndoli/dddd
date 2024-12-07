import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Setting from "./Setting";
import Sales from "./Sales";
import Transections from "./Transections";
import Products from "./Products";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
      {
        path: "/",
        element: <Dashboard/>, 
      },
      {
        path: "/Customers",
        element: <Customers/>, 
      },
      {
        path: "/Sales",
        element: <Sales/>, 
      },

      {
        path: "/Setting",
        element: <Setting/>, 
      },
     
      {
        path: "/Transections",
        element: <Transections/>, 
      },
      {
        path: "/Products",
        element: <Products/>, 
      },
    ]






  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
