import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./app.css"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Registration from "./Authorization/Registration";
import Login from "./Authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";
import Catalog from "./Catalog/Catalog";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(auth())
    }
  },[])

  return (
    <BrowserRouter>
    <div className = "app">
      
      <Navbar />
      

      <div className = "wrap">
        {!isAuth ?
        <Routes>
          <Route path="/registration" element = {<Registration />}/>
          <Route path="/login" element = {<Login />}/>
          <Route  path="/" element = {<Navigate to = "/"/>}/>
        </Routes>
        :
        <Routes>

          <Route  path="/" element = {<Catalog />}/>
          <Route  path="*" element = {<Navigate to = "/"/>}/>
          
        </Routes>      
        }
      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
