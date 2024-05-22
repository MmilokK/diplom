import React, { useState } from "react";
import "./objectList.css"
import {useDispatch, useSelector} from "react-redux";
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { setAddingDisplay, setCurrentDir } from "../../reducers/objectReducer";
import AddFund from "../Adding/AddFund";
import AddCollection from "../Adding/AddCollection";
import AddDocument from "../Adding/AddDocument";
import AddAttachment from "../Adding/AddAttachment";
import AddSection from "../Adding/AddSection";
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteAttachment, deleteCollection, deleteDocument, deleteFund, deleteSection, updateAttachment, updateCollection, updateDocument, updateFund, updateSection } from "../../actions/objects";

const ObjectList = () => {

  const objects = useSelector(state => state.objects)
  const dispatch = useDispatch()
  const [lvl, setLvl] = useState(1)

  const [editingRowFund, setEditingRowFund] = useState(null)
  const [editingRowCollection, setEditingRowCollection] = useState(null)
  const [editingRowDocument, setEditingRowDocument] = useState(null)
  const [editingRowAttachment, setEditingRowAttachment] = useState(null)
  const [editingRowSection, setEditingRowSection] = useState(null)

  const [code, setCode] = useState()
  const [description, setDescription] = useState()
  const [name, setName] = useState()
  const [numOfDocuments, setNumOfDocuments] = useState()
  const [numOfPages, setNumOfPages] = useState()
  const [type, setType] = useState()
  const [numOfAttachments, setNumOfAttachments]= useState()
  const [numOfSections, setNumOfSections] = useState() 

  const [fundForm] = Form.useForm() 

  function filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters) {
    return <div className="search"> <Input 
    placeholder="Введите текст"
    value = {selectedKeys[0]}
    onChange={(e)=>{setSelectedKeys(e.target.value?[e.target.value]:[]); confirm({closeDropdown: false})}}
    onPressEnter={()=>{confirm()}}
    onBlur={()=> {confirm()}}
    ></Input>
    <Button style={{ marginLeft: 5}} onClick={()=>confirm()} type="primary"><SearchOutlined /></Button>
    <Button style={{ marginLeft: 5}} onClick={()=>{clearFilters(); confirm()}} danger type="primary"><DeleteOutlined /></Button>
    </div>
  }
  
  function showAddingFund(){
      dispatch(setAddingDisplay('flex'));
      setLvl(1)
  }
  function showAddingCollection(parent_id){
      dispatch(setCurrentDir(parent_id));
      dispatch(setAddingDisplay('flex'));
      setLvl(2)
  }
  function showAddingDocument(parent_id){
      dispatch(setCurrentDir(parent_id));
      dispatch(setAddingDisplay('flex'));
      setLvl(3)
  }
  function showAddingAttachment(parent_id){
      dispatch(setCurrentDir(parent_id));
      dispatch(setAddingDisplay('flex'));
      setLvl(4)
  }
  function showAddingSection(parent_id){
      dispatch(setCurrentDir(parent_id));
      dispatch(setAddingDisplay('flex'));
      setLvl(5)
  }

    let collectionsTable =  record =>  {

      const columns = [
        {title: "Код коллекции", dataIndex: 'code', key: 'code', sorter: (a, b) => a.code.toLowerCase() < b.code.toLowerCase() ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.code.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){
            
            return <>
              <Input onChange = {(value)=>setCode(value.target.value)} defaultValue={record.code} minLength={0} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Вид коллекции", dataIndex: 'type', key: 'type', sorter: (a, b) => a.type.toLowerCase() < b.type.toLowerCase() ? -1 : (a.type.toLowerCase() > b.type.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.type.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){

            return <>
              <Input onChange = {(value)=>setType(value.target.value)} defaultValue={record.type} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Обозначение коллекции", dataIndex: 'description', key: 'description', sorter: (a, b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1 : (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.description.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){

            return <>
              <Input onChange = {(value)=>setDescription(value.target.value)} defaultValue={record.description} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Наименование коллекции", dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.name.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){

            return <>
              <Input onChange = {(value)=>setName(value.target.value)} defaultValue={record.name} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Количество документов", dataIndex: 'numOfDocuments', key: 'numOfDocuments', sorter: (a, b) => a.numOfDocuments < b.numOfDocuments ? -1 : (a.numOfDocuments > b.numOfDocuments) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return String(record.numOfDocuments).toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){

            return <>
              <Input onChange = {(value)=>setNumOfDocuments(value.target.value)} defaultValue={record.numOfDocuments} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Количество страниц", dataIndex: 'numOfPages', key: 'numOfPages', sorter: (a, b) => a.numOfPages < b.numOfPages ? -1 : (a.numOfPages > b.numOfPages) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return String(record.numOfPages).toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowCollection===record._id){

            return <>
              <Input onChange = {(value)=>setNumOfPages(value.target.value)} defaultValue={record.numOfPages} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title:'', dataIndex:'edit', key:'uedit', render: (text, record) => (
          <>
          {!(editingRowCollection ==record._id) && <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" onClick={(e)=>{
      e.stopPropagation(); 
      setEditingRowCollection(record._id)
      
      }}>Изменить</Button>}
    {(editingRowCollection ==record._id) && <Button type="link" onClick={(e)=>{e.stopPropagation(); saveCollection()}}>Сохранить</Button>}
    {(editingRowCollection ==record._id) && <Popconfirm
    title="Вы уверены, что хотите отменить изменения?"
    onConfirm={()=> { setEditingRowCollection(null)}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}>
    <Button danger type="link" onClick={(e)=>e.stopPropagation()}>Отменить</Button>
    </Popconfirm>}
    {!(editingRowCollection ==record._id) && <Popconfirm
    title="Вы уверены, что хотите удалить?"
    onConfirm={()=> { dispatch(deleteCollection(record))}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}
  >
          <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} danger type="link" onClick={(e)=>e.stopPropagation()}>Удалить</Button>
          </Popconfirm>}
          </>
         ), width: '14%'},
      ];
      let collections = objects.collections.filter((collection) => collection.parent_id == record._id);

      const saveCollection = () => {
        let oldCollection = objects.collections.filter((collection)=>collection._id==editingRowCollection)[0]
        if(code) {oldCollection = {...oldCollection, code: code}; setCode()}
        if(type) {oldCollection = {...oldCollection, type: type}; setType() }
        if(description) {oldCollection = {...oldCollection, description: description}; setDescription()}
        if(name) {oldCollection = {...oldCollection, name: name}; setName()}
        if(numOfDocuments) {oldCollection = {...oldCollection, numOfDocuments: Number(numOfDocuments)}; setNumOfDocuments()}
        if(numOfPages) {oldCollection = {...oldCollection, numOfPages: Number(numOfPages)}; setNumOfPages()}
        dispatch(updateCollection(oldCollection))
        setEditingRowCollection(null)
      }
      return <>
        <Table 
        title={() => <Button type="primary"onClick = {()=>{
          showAddingCollection(record._id);
        }}>Добавить коллекцию</Button>}
        rowKey={rec => rec._id}
        columns={columns} 
        dataSource={collections} 
        expandable={{expandRowByClick: true , expandedRowRender: (record)=> {return documentsTable(record)}}} 
         />
      </>};

    let documentsTable =  record =>  {
    const columns = [
      {title: "Код документа", dataIndex: 'code', key: 'code', sorter: (a, b) => a.code.toLowerCase() < b.code.toLowerCase() ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0,
       filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return record.code.toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){
          
          return <>
            <Input onChange = {(value)=>setCode(value.target.value)} defaultValue={record.code} minLength={0} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title: "Обозначение документа", dataIndex: 'description', key: 'description', sorter: (a, b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1 : (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : 0,
       filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return record.description.toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){

          return <>
            <Input onChange = {(value)=>setDescription(value.target.value)} defaultValue={record.description} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title: "Наименование документа", dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0,
       filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return record.name.toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){

          return <>
            <Input onChange = {(value)=>setName(value.target.value)} defaultValue={record.name} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title: "Количество страниц", dataIndex: 'numOfPages', key: 'numOfPages', sorter: (a, b) => a.numOfPages < b.numOfPages ? -1 : (a.numOfPages > b.numOfPages) ? 1 : 0,
       filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return String(record.numOfPages).toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){

          return <>
            <Input onChange = {(value)=>setNumOfPages(value.target.value)} defaultValue={record.numOfPages} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title: "Количество приложений", dataIndex: 'numOfAttachments', key: 'numOfAttachments',  sorter: (a, b) => a.numOfAttachments < b.numOfAttachments ? -1 : (a.numOfAttachments > b.numOfAttachments) ? 1 : 0,
       filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return String(record.numOfAttachments).toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){

          return <>
            <Input onChange = {(value)=>setNumOfAttachments(value.target.value)} defaultValue={record.numOfAttachments} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title: "Количество разделов", dataIndex: 'numOfSections', key: 'numOfSections', sorter: (a, b) => a.numOfSections < b.numOfSections ? -1 : (a.numOfSections > b.numOfSections) ? 1 : 0,
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
        return String(record.numOfSections).toLowerCase().includes(value.toLowerCase())}, 
        filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
        if(editingRowDocument===record._id){

          return <>
            <Input onChange = {(value)=>setNumOfSections(value.target.value)} defaultValue={record.numOfSections} onClick={(e)=>e.stopPropagation()}/>
            </>
        } else {
          return <>{text}</>
        }
      }},
      {title:'', dataIndex:'edit', key:'uedit', render: (text, record) => (
        <>
        {!(editingRowDocument ==record._id) && <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" onClick={(e)=>{
    e.stopPropagation(); 
    setEditingRowDocument(record._id)
    
    }}>Изменить</Button>}
  {(editingRowDocument ==record._id) && <Button type="link" onClick={(e)=>{e.stopPropagation(); saveDocument()}}>Сохранить</Button>}
  {(editingRowDocument ==record._id) && <Popconfirm
  title="Вы уверены, что хотите отменить изменения?"
  onConfirm={()=> { setEditingRowDocument(null)}}
  okText="Да"
  cancelText="Нет"
  onPopupClick={(e)=>e.stopPropagation()}>
  <Button danger type="link" onClick={(e)=>e.stopPropagation()}>Отменить</Button>
  </Popconfirm>}
  {!(editingRowDocument ==record._id) && <Popconfirm
  title="Вы уверены, что хотите удалить?"
  onConfirm={()=> { dispatch(deleteDocument(record))}}
  okText="Да"
  cancelText="Нет"
  onPopupClick={(e)=>e.stopPropagation()}
>
        <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} danger type="link" onClick={(e)=>e.stopPropagation()}>Удалить</Button>
        </Popconfirm>}
        </>
       ), width: '14%'},
      
    ];
    const saveDocument = () => {
      let oldDocument = objects.documents.filter((document)=>document._id==editingRowDocument)[0]
      if(code) {oldDocument = {...oldDocument, code: code}; setCode()}
      if(description) {oldDocument = {...oldDocument, description: description}; setDescription()}
      if(name) {oldDocument = {...oldDocument, name: name}; setName()}
      if(numOfPages) {oldDocument = {...oldDocument, numOfPages: Number(numOfPages)}; setNumOfPages()}
      if(numOfAttachments) {oldDocument = {...oldDocument, numOfAttachments: Number(numOfAttachments)}; setNumOfAttachments()}
      if(numOfSections) {oldDocument = {...oldDocument, numOfSections: Number(numOfSections)}; setNumOfSections()}
      
      dispatch(updateDocument(oldDocument))
      setEditingRowDocument(null)
    }
    let documents = objects.documents.filter((document) => document.parent_id == record._id);
    return <>
      <Table 
      title={() => <Button type="primary"onClick = {()=>showAddingDocument(record._id)}>Добавить документ</Button>}
      rowKey={record => record._id}
      columns={columns} 
      dataSource={documents} 
      expandable={{expandRowByClick: true , expandedRowRender: (record)=> {return <>{attachmentsTable(record)}{sectionsTable(record)}</>}}} 
      />
    </>};

    let attachmentsTable =  record =>  {
      const columns = [
        {title: "Код приложения", dataIndex: 'code', key: 'code', sorter: (a, b) => a.code.toLowerCase() < b.code.toLowerCase() ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.code.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowAttachment===record._id){
            
            return <>
              <Input onChange = {(value)=>setCode(value.target.value)} defaultValue={record.code} minLength={0} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Обозначение приложения", dataIndex: 'description', key: 'description', sorter: (a, b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1 : (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.description.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowAttachment===record._id){
  
            return <>
              <Input onChange = {(value)=>setDescription(value.target.value)} defaultValue={record.description} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Наименование приложения", dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.name.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowAttachment===record._id){
  
            return <>
              <Input onChange = {(value)=>setName(value.target.value)} defaultValue={record.name} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title:'', dataIndex:'edit', key:'uedit', render: (text, record) => (
          <>
          {!(editingRowAttachment ==record._id) && <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" onClick={(e)=>{
      e.stopPropagation(); 
      setEditingRowAttachment(record._id)
      
      }}>Изменить</Button>}
    {(editingRowAttachment ==record._id) && <Button type="link" onClick={(e)=>{e.stopPropagation(); saveAttachment()}}>Сохранить</Button>}
    {(editingRowAttachment ==record._id) && <Popconfirm
    title="Вы уверены, что хотите отменить изменения?"
    onConfirm={()=> { setEditingRowAttachment(null)}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}>
    <Button danger type="link" onClick={(e)=>e.stopPropagation()}>Отменить</Button>
    </Popconfirm>}
    {!(editingRowAttachment ==record._id) && <Popconfirm
    title="Вы уверены, что хотите удалить?"
    onConfirm={()=> { dispatch(deleteAttachment(record))}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}
  >
          <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} danger type="link" onClick={(e)=>e.stopPropagation()}>Удалить</Button>
          </Popconfirm>}
          </>
         ), width: '14%'},
        
      ];
      const saveAttachment = () => {
      let oldAttachment = objects.attachments.filter((attachment)=>attachment._id==editingRowAttachment)[0]
      if(code) {oldAttachment = {...oldAttachment, code: code}; setCode()}
      if(description) {oldAttachment = {...oldAttachment, description: description}; setDescription()}
      if(name) {oldAttachment = {...oldAttachment, name: name}; setName()}
      
      dispatch(updateAttachment(oldAttachment))
      setEditingRowAttachment(null)
    }
      let attachments = objects.attachments.filter((attachment) => attachment.parent_id == record._id);
      return <>
        <Table 
        title={() => <Button type="primary"onClick = {()=>showAddingAttachment(record._id)}>Добавить приложение</Button>}
        rowKey={record => record._id}
        columns={columns} 
        dataSource={attachments} 
        />
      </>};
    
    let sectionsTable =  record =>  {
      const columns = [
        {title: "Код раздела", dataIndex: 'code', key: 'code', sorter: (a, b) => a.code.toLowerCase() < b.code.toLowerCase() ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.code.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowSection===record._id){
            return <>
              <Input onChange = {(value)=>setCode(value.target.value)} defaultValue={record.code} minLength={0} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Обозначение раздела", dataIndex: 'description', key: 'description', sorter: (a, b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1 : (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.description.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowSection===record._id){
  
            return <>
              <Input onChange = {(value)=>setDescription(value.target.value)} defaultValue={record.description} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Наименование раздела", dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return record.name.toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowSection===record._id){
  
            return <>
              <Input onChange = {(value)=>setName(value.target.value)} defaultValue={record.name} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title: "Количество страниц", dataIndex: 'numOfPages', key: 'numOfPages', sorter: (a, b) => a.numOfPages < b.numOfPages ? -1 : (a.numOfPages > b.numOfPages) ? 1 : 0,
         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
          return String(record.numOfPages).toLowerCase().includes(value.toLowerCase())}, 
          filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
          if(editingRowSection===record._id){
            return <>
              <Input onChange = {(value)=>setNumOfPages(value.target.value)} defaultValue={record.numOfPages} onClick={(e)=>e.stopPropagation()}/>
              </>
          } else {
            return <>{text}</>
          }
        }},
        {title:'', dataIndex:'edit', key:'uedit', render: (text, record) => (
          <>
          {!(editingRowSection ==record._id) && <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" onClick={(e)=>{
      e.stopPropagation(); 
      setEditingRowSection(record._id)
      
      }}>Изменить</Button>}
    {(editingRowSection ==record._id) && <Button type="link" onClick={(e)=>{e.stopPropagation(); saveSection()}}>Сохранить</Button>}
    {(editingRowSection ==record._id) && <Popconfirm
    title="Вы уверены, что хотите отменить изменения?"
    onConfirm={()=> { setEditingRowSection(null)}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}>
    <Button danger type="link" onClick={(e)=>e.stopPropagation()}>Отменить</Button>
    </Popconfirm>}
    {!(editingRowSection ==record._id) && <Popconfirm
    title="Вы уверены, что хотите удалить?"
    onConfirm={()=> { dispatch(deleteSection(record))}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}
  >
          <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} danger type="link" onClick={(e)=>e.stopPropagation()}>Удалить</Button>
          </Popconfirm>}
          </>
         ), width: '14%'},
      ];
      const saveSection = () => {
        let oldSection = objects.sections.filter((section)=>section._id==editingRowSection)[0]
        if(code) {oldSection = {...oldSection, code: code}; setCode()}
        if(description) {oldSection = {...oldSection, description: description}; setDescription()}
        if(name) {oldSection = {...oldSection, name: name}; setName()}
        if(numOfPages) {oldSection = {...oldSection, numOfPages: Number(numOfPages)}; setNumOfPages()}
        
        dispatch(updateSection(oldSection))
        setEditingRowSection(null)
      }
      let sections = objects.sections.filter((section) => section.parent_id == record._id);
      return <>
        <Table 
        title={() => <Button type="primary" onClick = {()=>showAddingSection(record._id)}>Добавить раздел</Button>}
        rowKey={record => record._id}
        columns={columns} 
        dataSource={sections} 
        />
      </>};



  const fundColumns = [
  {title: "Код фонда", dataIndex: 'code', key: 'code', sorter: (a, b) => a.code.toLowerCase() < b.code.toLowerCase() ? -1 : (a.code.toLowerCase() > b.code.toLowerCase()) ? 1 : 0,
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
      return record.code.toLowerCase().includes(value.toLowerCase())}, 
      filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
    if(editingRowFund===record._id){
      return <Form.Item name = "code" rules = {[{required: true, message: "Введите код фонда"}]}>
        <Input onClick={(e)=>e.stopPropagation()}/>
      </Form.Item>
    } else {
      return <>{text}</>
    }
  }},
  {title: "Наименование фонда", dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0,
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
    return record.name.toLowerCase().includes(value.toLowerCase())}, 
    filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
    if(editingRowFund===record._id){
      return <Form.Item name = "name" rules = {[{required: true, message: "Введите наименование фонда"}]}>
        <Input onClick={(e)=>e.stopPropagation()}/>
      </Form.Item>
    } else {
      return <>{text}</>
    }
  }},
  {title: "Количество коллекций", dataIndex: 'numOfCollections', sorter: (a, b) => a.numOfCollections < b.numOfCollections ? -1 : (a.numOfCollections > b.numOfCollections) ? 1 : 0,
   filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
    return String(record.numOfCollections).includes(value.toLowerCase())}, 
    filterIcon: ()=>{return <SearchOutlined />}, key: 'numOfCollections', render: (text, record) => {
    if(editingRowFund===record._id){
      return <Form.Item name = "numOfCollections" rules = {[{required: true, message: "Введите количество коллекций"}]}>
        <Input onClick={(e)=>e.stopPropagation()} />
      </Form.Item>
    } else {
      return <>{text}</>
    }
  }},
  {title: "Количество документов", dataIndex: 'numOfDocuments', key: 'numOfDocuments', sorter: (a, b) => a.numOfDocuments < b.numOfDocuments ? -1 : (a.numOfDocuments > b.numOfDocuments) ? 1 : 0,
   filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters})=> {return filterdrop(setSelectedKeys, selectedKeys, confirm, clearFilters)}, onFilter: (value, record)=>{ 
    return String(record.numOfDocuments).includes(value.toLowerCase())}, 
    filterIcon: ()=>{return <SearchOutlined />}, render: (text, record) => {
    if(editingRowFund===record._id){
      return <Form.Item name = "numOfDocuments" rules = {[{required: true, message: "Введите количество документов"}]}>
        <Input onClick={(e)=>e.stopPropagation()} />
      </Form.Item>
    } else {
      return <>{text}</>
    }
  }},
  {title:'', dataIndex:'edit', key:'uedit', render: (text, record) => (
    <>
    {!(editingRowFund ==record._id) && <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" onClick={(e)=>{
      e.stopPropagation(); 
      setEditingRowFund(record._id)
      fundForm.setFieldsValue({
        code: record.code,
        name: record.name,
        numOfCollections: record.numOfCollections,
        numOfDocuments: record.numOfDocuments,
      })
      }}>Изменить</Button>}
    {(editingRowFund ==record._id) && <Button type="link" htmlType="submit" onClick={(e)=>e.stopPropagation()}>Сохранить</Button>}
    {(editingRowFund ==record._id) && <Popconfirm
    title="Вы уверены, что хотите отменить изменения?"
    onConfirm={()=> { setEditingRowFund(null)}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}>
    <Button danger type="link" onClick={(e)=>e.stopPropagation()}>Отменить</Button>
    </Popconfirm>}
    {!(editingRowFund ==record._id) && <Popconfirm
    title="Вы уверены, что хотите удалить?"
    onConfirm={()=> { dispatch(deleteFund(record))}}
    okText="Да"
    cancelText="Нет"
    onPopupClick={(e)=>e.stopPropagation()}>
    <Button disabled = {(editingRowFund||editingRowCollection||editingRowDocument||editingRowAttachment||editingRowSection)} type="link" danger  onClick={(e)=>e.stopPropagation()}>Удалить</Button>
    </Popconfirm>}
    
    </>
   ), width: '13%'},
  ];

  const onFinishFund = (values) => {
    const oldFund = objects.funds.filter((fund)=>fund._id==editingRowFund)
    const newFund = {...oldFund[0], ...values}
    console.log(newFund)
    dispatch(updateFund(newFund))
    setEditingRowFund(null)
  }
    return <>
      <Form form = {fundForm} onFinish={onFinishFund}>
        {(lvl==1)&&<AddFund/>}
        {(lvl==2)&&<AddCollection/>}
        {(lvl==3)&&<AddDocument />}
        {(lvl==4)&&<AddAttachment />}
        {(lvl==5)&&<AddSection />}
          <Table 
          title={() => <Button type="primary"onClick = {()=>showAddingFund()}>Добавить фонд</Button>}
          rowKey={record => record._id} 
          dataSource={objects.funds}  
          expandable={{expandRowByClick: true , expandedRowRender: (record)=> {return collectionsTable(record)}}} 
          pagination={true} 
          columns={fundColumns} />
        </Form>

        
      </>;
}

export default ObjectList;