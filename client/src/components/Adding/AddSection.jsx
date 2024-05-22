import React, { useState } from "react";
import "./adding.css"
import { Input, Button, Form, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { setAddingDisplay } from "../../reducers/objectReducer";
import { createSection } from "../../actions/objects";

const AddSection = () => {
   
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [numOfPages, setNumOfPages] = useState(0)

    const addingDisplay = useSelector(state => state.objects.addingDisplay)
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.objects.currentDir)

    const [form] = Form.useForm();
    function createHandler(){
        form.resetFields();
        dispatch(createSection(code, description, name, numOfPages, currentDir));
        dispatch(setAddingDisplay('none'))
        
    }

    return(
        <div className = "addform" onClick = {()=>{dispatch(setAddingDisplay('none')); form.resetFields();}} style = {{display: addingDisplay}}>
            <div className = "addform_content" onClick = {(event => event.stopPropagation())}>
                <div className = "addform_header">
                    <div className="title"><b>Создать новый раздел</b></div>
                    <Button  type="primary" size="small" onClick = {()=>{dispatch(setAddingDisplay('none'));form.resetFields();}}><CloseOutlined /></Button>
                </div>
                <Form  form={form}>
            <Form.Item rules={[{ required: true, message: 'Введите код раздела' }]} name = "code">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setCode(value.target.value)} size = "large" placeholder = "Код раздела"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите обозначение раздела' }]} name = "description">
            <Input  style =  {{marginTop: 20}} onChange = {(value)=>setDescription(value.target.value)} size = "large" placeholder = "Обозначение раздела"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Введите наименование раздела' }]} name = "name">
            <Input style =  {{marginTop: 20}} onChange = {(value)=>setName(value.target.value)} size = "large" placeholder = "Наименование раздела"/>
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

    


export default AddSection;