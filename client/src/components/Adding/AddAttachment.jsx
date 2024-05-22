import React, { useState } from "react";
import "./adding.css"
import { Input, Button, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { setAddingDisplay } from "../../reducers/objectReducer";
import {  createAttachment } from "../../actions/objects";

const AddAttachment = () => {
   
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")

    const addingDisplay = useSelector(state => state.objects.addingDisplay)
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.objects.currentDir)

    const [form] = Form.useForm();
    function createHandler(){
        form.resetFields();
        dispatch(createAttachment(code, description, name, currentDir));
        dispatch(setAddingDisplay('none'))
        
    }
    
 
    return(
        <div className = "addform" onClick = {()=>{ form.resetFields(); dispatch(setAddingDisplay('none'));}} style = {{display: addingDisplay}}>
            <div className = "addform_content" onClick = {(event => event.stopPropagation())}>
                <div className = "addform_header">
                    <div className="title"><b>Создать новое приложение</b></div>
                    <Button  type="primary" size="small" onClick = {()=>{ form.resetFields(); dispatch(setAddingDisplay('none'));}}><CloseOutlined /></Button>
                </div>
                <Form  form={form}>
            <Form.Item rules={[{ required: true, message: 'Введите код приложения'}]} name = "code">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setCode(value.target.value)} size = "large" placeholder = "Код приложения"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите обозначение приложения'}]} name = "description">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setDescription(value.target.value)} size = "large" placeholder = "Обозначение приложения"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите наименование приложения'}]} name = "name">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setName(value.target.value)}size = "large" placeholder = "Наименование приложения"/>
            </Form.Item>
            <Form.Item>
           <Button style =  {{marginTop: 40}} onClick = {() => createHandler()} type="primary" size="large">Создать</Button>
           </Form.Item>
           </Form>
           </div>
        </div>
    )
    
}

    


export default AddAttachment;