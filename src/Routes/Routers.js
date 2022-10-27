import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import MainOutlet from "../Components/MainOutlet";
import Blog from "../Components/Mian-Section/Blog/Blog";
import CheckOut from "../Components/Mian-Section/CheckOut/CheckOut";
import CourseDetails from "../Components/Mian-Section/Courses/Card-Section/CourseDetails";
import Course from "../Components/Mian-Section/Courses/Course";
import FAQ from "../Components/Mian-Section/FAQ/FAQ";
import Home from "../Components/Mian-Section/Home/Home";
import Login from "../Components/Mian-Section/Login/Login";
import Register from "../Components/Mian-Section/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/courses',
        loader: () =>{
          return fetch('https://en-top-server-tfmahabub.vercel.app/courses')
        },
        element: <Course />
      },
      {
        path: '/course/:id',
        loader: ({params}) =>{
          return fetch(`https://en-top-server-tfmahabub.vercel.app/course/${params.id}`)
        },
        element: <CourseDetails />
      },
      {
        path: '/checkout/:id',
        loader: ({params}) =>{
          return fetch(`https://en-top-server-tfmahabub.vercel.app/course/${params.id}`)
        },
        element: <PrivateRoute><CheckOut /></PrivateRoute>
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  },
])