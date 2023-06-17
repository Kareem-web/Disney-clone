import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import "./style.scss"



const Layout = ()=>{
    return (
      <>
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
      </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children:[
      {
        path: "/header",
        element: <Header />,
      },
       {
        path: "/slider",
        element: <Slider />,
      },
       {
        path: "/productionhouse",
        element: <ProductionHouse />,
      },
       {
        path: "/genremovielist",
        element: <GenreMovieList />,
      },
    ]
  },
    {
    path: "/register",
    element:  <Register />
  },
    {
    path: "/login",
    element: <Login />
  },
]);

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="">
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
