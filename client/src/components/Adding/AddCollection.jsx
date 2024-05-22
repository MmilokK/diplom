import React, { useState } from "react";
import "./adding.css"
import { Input, Button, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { setAddingDisplay } from "../../reducers/objectReducer";
import { createCollection } from "../../actions/objects";

const AddCollection = () => {
   
    const [code, setCode] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [numOfDocuments, setNumOfDocuments] = useState(0)
    const [numOfPages, setNumOfPages] = useState(0)
    const addingDisplay = useSelector(state => state.objects.addingDisplay)
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.objects.currentDir)

      console.log(currentDir)
    const [form] = Form.useForm();
    function createHandler(){
        form.resetFields();
        dispatch(createCollection(code, type, description, name, numOfDocuments, numOfPages, currentDir));
        dispatch(setAddingDisplay('none'))
        
    }
 
    return(
        <div className = "addform" onClick = {()=>{dispatch(setAddingDisplay('none'));form.resetFields();}} style = {{display: addingDisplay}}>
            <div className = "addform_content" onClick = {(event => event.stopPropagation())}>
                <div className = "addform_header">
                    <div className="title"><b>Создать новую коллекцию</b></div>
                    <Button  type="primary" size="small" onClick = {()=>{dispatch(setAddingDisplay('none'));form.resetFields();}}><CloseOutlined /></Button>
                </div>
                <Form  form={form}>
            <Form.Item rules={[{ required: true, message: 'Введите код коллекции'}]} name = "code">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setCode(value.target.value)} size = "large" placeholder = "Код коллекции"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите тип коллекции'}]} name = "type">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setType(value.target.value)} size = "large" placeholder = "Тип коллекции"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите обозначение коллекции'}]} name = "description">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setDescription(value.target.value)} size = "large" placeholder = "Обозначение коллекции"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите наименование коллекции'}]} name = "name">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setName(value.target.value)}size = "large" placeholder = "Наименование коллекции"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество документов'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfDocuments">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfDocuments(value.target.value)} size = "large" placeholder = "Количество документов"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество страниц'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfPages">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfPages(value.target.value)} size = "large" placeholder = "Количество страниц"/>
            </Form.Item>
            <Form.Item>
           <Button style =  {{marginTop: 40}} onClick = {() => createHandler()} type="primary" size="large">Создать</Button>
           </Form.Item>
           </Form>
           </div>
        </div>
    )
    
}

    


export default AddCollection;