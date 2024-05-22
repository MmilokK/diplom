import React, { useState } from 'react';
import './authorization.css'
//import Input from '../../utils/Input/Input';
import { registration } from '../../actions/user';
import { Input, Button } from 'antd';

import { UserAddOutlined } from '@ant-design/icons';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className = "authorization">
            <div className = "authorization__header">Регистрация</div>
            <UserAddOutlined style={{ fontSize: '50px'}}/>
            <Input  onChange = {(value)=>setEmail(value.target.value)} size="large" placeholder = "Введите email" />
            <Input.Password onChange = {(value)=>setPassword(value.target.value)} size="large" placeholder="Введите пароль" />
            <Button type="primary" size="large"  style={{ marginBottom: 16, marginTop: 100 }} onClick = {() => registration(email, password)}>Зарегистрироваться</Button>
            
        </div>
    )
}

export default Registration;