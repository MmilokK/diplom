import React, { useState } from "react";
import "./adding.css"
import { Input, Button, Form, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { setAddingDisplay } from "../../reducers/objectReducer";
import { createFund } from "../../actions/objects";

const AddFund = () => {
   
    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const [numOfCollections, setNumOfCollections] = useState(0)
    const [numOfDocuments, setNumOfDocuments] = useState(0)
    const addingDisplay = useSelector(state => state.objects.addingDisplay)
    const dispatch = useDispatch()

    const [form] = Form.useForm();
    function createHandler(){
        form.resetFields();
        dispatch(createFund(code, name, numOfCollections, numOfDocuments));
        dispatch(setAddingDisplay('none'))
        
    }

    return(
        <div className = "addform" onClick = {()=>{dispatch(setAddingDisplay('none'));form.resetFields();}} style = {{display: addingDisplay}}>
            <div className = "addform_content" onClick = {(event => event.stopPropagation())}>
                <div className = "addform_header">
                    <div className="title"><b>Создать новый фонд</b></div>
                    <Button  type="primary" size="small" onClick = {()=>{dispatch(setAddingDisplay('none'));form.resetFields();}}><CloseOutlined /></Button>
                </div>
                <Form  form={form}>
            <Form.Item rules={[{ required: true, message: 'Введите код фонда'}]} name = "code">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setCode(value.target.value)} size = "large" placeholder = "Код фонда"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите наименование фонда'}]} name = "name">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setName(value.target.value)}size = "large" placeholder = "Наименование фонда"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество коллекций'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfCollections">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfCollections(value.target.value)} size = "large" placeholder = "Количество коллекций"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите количество документов'},{type: 'string', message:"В этом поле должно быть число", pattern: new RegExp(/^[0-9]+$/)}]} name = "numOfDocuments">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setNumOfDocuments(value.target.value)} size = "large" placeholder = "Количество документов"/>
            </Form.Item>
            <Form.Item>
           <Button style =  {{marginTop: 40}} onClick = {() => createHandler()} type="primary" size="large">Создать</Button>
           </Form.Item>
           </Form>
           </div>
        </div>
    )
    
}

    


export default AddFund;