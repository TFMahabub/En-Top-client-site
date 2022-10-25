import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../Components/MainOutlet";
import Home from "../Components/Mian-Section/Home/Home";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
])