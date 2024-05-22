import React, { useState } from 'react';
import './authorization.css'
//import Input from '../../utils/Input/Input';
import { login } from '../../actions/user';
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    return (
        <div className = "authorization">
            <div className = "authorization__header">Авторизация</div>
            <UserOutlined  style={{ fontSize: '50px'}} />
            
            <Input  onChange = {(value)=>setEmail(value.target.value)} size="large" placeholder = "Введите email" />
            <Input.Password onChange = {(value)=>setPassword(value.target.value)} size="large" placeholder="Введите пароль" />
            <Button type="primary" size="large"  style={{ marginBottom: 16, marginTop: 100 }} onClick = {() => dispatch(login(email, password))}>Войти</Button>
            
        </div>
    )
}

export default Login;