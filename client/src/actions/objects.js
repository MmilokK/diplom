import axios from "axios";
import { addAttachment, addCollection, addDocument, addFund, addSection, refreshAttachment, refreshCollection, refreshDocument, refreshFund, refreshSection, removeAttachment, removeCollection, removeDocument, removeFund, removeSection, setAttachments, setCollections, setDocuments, setFunds, setSections } from "../reducers/objectReducer";

export function getFunds(){
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/objects/fund` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(setFunds(response.data))
            } catch (error) {
            console.log(error)
        }
    }
}

export function createFund(code, name, numOfCollections, numOfDocuments){
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/objects/fund`, {
                code, 
                name, 
                numOfCollections, 
                numOfDocuments,
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(addFund(response.data))
            } catch (error) {
                console.log(error)
        }
    }
}

export function deleteFund(fund){
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/objects/fund/${fund._id}` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(removeFund(fund._id))
            } catch (error) {
                console.log(error)
        }
    }
}

export function updateFund(fund){
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/objects/fund/${fund._id}`, {
                code: fund.code, 
                name: fund.name, 
                numOfCollections: fund.numOfCollections, 
                numOfDocuments: fund.numOfDocuments
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                console.log(response.data.message)
                dispatch(refreshFund(fund))
            } catch (error) {
                console.log(error)
        }
    }
}

export function getCollections(){
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/objects/collection`, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(setCollections(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function createCollection(code, type, description, name, numOfDocuments, numOfPages, fund){
    return async dispatch => {
        try {
            console.log(fund)
            const response = await axios.post(`http://localhost:5000/api/objects/collection`, {
                code,
                type,
                description,
                name,
                numOfDocuments,
                numOfPages,
                parent_id: fund
            },{
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(addCollection(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteCollection(collection){
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/objects/collection/${collection._id}` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(removeCollection(collection._id))
            } catch (error) {
                console.log(error)
        }
    }
}

export function updateCollection(collection){
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/objects/collection/${collection._id}` , {
                code: collection.code,
                type: collection.type,
                description: collection.description,
                name: collection.name,
                numOfDocuments: collection.numOfDocuments,
                numOfPages: collection.numOfPages,
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(refreshCollection(collection))
            } catch (error) {
                console.log(error)
        }
    }
}

export function getDocuments(){
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/objects/document`, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(setDocuments(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function createDocument(code, description, name, numOfPages, numOfAttachments, numOfSections, collection){
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/objects/document`, {
                code,
                description,
                name,
                numOfPages,
                numOfAttachments,
                numOfSections,
                parent_id: collection
            },{
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(addDocument(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteDocument(document){
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/objects/document/${document._id}` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(removeDocument(document._id))
            } catch (error) {
                console.log(error)
        }
    }
}

export function updateDocument(document){
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/objects/document/${document._id}` , {
                code: document.code,
                description: document.description,
                name: document.name,
                numOfPages: document.numOfPages,
                numOfAttachments: document.numOfAttachments,
                numOfSections: document.numOfSections
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(refreshDocument(document))
            } catch (error) {
                console.log(error)
        }
    }
}

export function getAttachments(){
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/objects/attachment`, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                console.log(response.data)
                dispatch(setAttachments(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export function createAttachment(code, description, name, document){
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/objects/attachment`, {
                code,
                description,
                name,
                parent_id: document
            },{
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(addAttachment(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteAttachment(attachment){
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/objects/attachment/${attachment._id}` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(removeAttachment(attachment._id))
            } catch (error) {
                console.log(error)
        }
    }
}

export function updateAttachment(attachment){
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/objects/attachment/${attachment._id}` , {
                code: attachment.code,
                description: attachment.description,
                name: attachment.name
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(refreshAttachment(attachment))
            } catch (error) {
                console.log(error)
        }
    }
}

export function getSections(){
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/objects/section`, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                console.log(response.data)
                dispatch(setSections(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export function createSection(code, description, name, numOfPages, document){
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/objects/section`, {
                code,
                description,
                name,
                numOfPages,
                parent_id: document
            },{
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(addSection(response.data))
                console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteSection(section){
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/objects/section/${section._id}` , {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(removeSection(section._id))
            } catch (error) {
                console.log(error)
        }
    }
}

export function updateSection(section){
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:5000/api/objects/section/${section._id}`, {
                code: section.code,
                description: section.description,
                name: section.name,
                numOfPages: section.numOfPages
            }, {
                headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
                dispatch(refreshSection(section))
            } catch (error) {
                console.log(error)
        }
    }
}