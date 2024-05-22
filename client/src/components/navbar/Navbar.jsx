import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { Button, Form, Input, Popconfirm, Table } from 'antd';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const userEmail = useSelector(state => state.user)
    console.log(userEmail)
    return (
        <div className = "navbar">
          
         {!isAuth && <Button type="primary" size="large" ><NavLink to = "/registration">Регистрация</NavLink></Button>}
         {!isAuth && <Button type="primary" size="large" style={{ marginLeft: 16 }}><NavLink to = "/login">Войти</NavLink></Button>}
         {/* {isAuth && <div>{userEmail}</div>} */}
         {isAuth && <Button type="primary" size="large"  style={{ marginBottom: 16 }} onClick = {() => dispatch(logout())}>Выйти</Button>}
        </div>
    )
}

export default Navbar;