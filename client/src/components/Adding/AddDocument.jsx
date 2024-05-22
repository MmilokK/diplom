import React, { useState } from "react";
import "./adding.css"
import { Input, Button, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { setAddingDisplay } from "../../reducers/objectReducer";
import {  createDocument } from "../../actions/objects";

const AddDocument = () => {
   
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [numOfPages, setNumOfPages] = useState(0)
    const [numOfAttachments, setNumOfAttachments] = useState(0)
    const [numOfSections, setNumOfSections] = useState(0)

    const addingDisplay = useSelector(state => state.objects.addingDisplay)
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.objects.currentDir)

    const [form] = Form.useForm();
    function createHandler(){
        form.resetFields();
        dispatch(createDocument(code, description, name, numOfPages, numOfAttachments, numOfSections, currentDir));
        dispatch(setAddingDisplay('none'))
        
    }

    return(
        <div className = "addform" onClick = {()=>dispatch(setAddingDisplay('none'))} style = {{display: addingDisplay}}>
            <div className = "addform_content" onClick = {(event => event.stopPropagation())}>
                <div className = "addform_header">
                    <div className="title"><b>Создать новый документ</b></div>
                    <Button  type="primary" size="small" onClick = {()=>dispatch(setAddingDisplay('none'))}><CloseOutlined /></Button>
                </div>
                <Form  form={form}>
            <Form.Item rules={[{ required: true, message: 'Введите код документа'}]} name = "code">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setCode(value.target.value)} size = "large" placeholder = "Код документа"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите обозначение документа'}]} name = "description">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setDescription(value.target.value)} size = "large" placeholder = "Обозначение документа"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите наименование документа'}]} name = "name">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setName(value.target.value)}size = "large" placeholder = "Наименование документа"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество страницй'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfPages">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfPages(value.target.value)} size = "large" placeholder = "Количество страниц"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество приложений'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfAttachments">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfAttachments(value.target.value)} size = "large" placeholder = "Количество приложений"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество разделов'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfSections">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfSections(value.target.value)} size = "large" placeholder = "Количество разделов"/>
            </Form.Item>
            <Form.Item>
           <Button style =  {{marginTop: 40}} onClick = {() => createHandler()} type="primary" size="large">Создать</Button>
           </Form.Item>
           </Form>
           </div>
        </div>
    )
    
}

    


export default AddDocument;