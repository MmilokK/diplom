
const SET_FUNDS = "SET_FUNDS" 
const ADD_FUND = "ADD_FUND"
const REMOVE_FUND = "REMOVE_FUND"
const REFRESH_FUND = "REFRESH_FUND"

const SET_COLLECTIONS = "SET_COLLECTIONS"
const ADD_COLLECTION = "ADD_COLLECTION"
const REMOVE_COLLECTION = "REMOVE_COLLECTION"
const REFRESH_COLLECTION = "REFRESH_COLLECTION"

const SET_DOCUMENTS = "SET_DOCUMENTS"
const ADD_DOCUMENT = "ADD_DOCUMENT"
const REMOVE_DOCUMENT = "REMOVE_DOCUMENT"
const REFRESH_DOCUMENT = "REFRESH_DOCUMENT"

const SET_ATTACHMENTS = "SET_ATTACHMENTS"
const ADD_ATTACHMENT = "ADD_ATTACHMENT"
const REMOVE_ATTACHMENT = "REMOVE_ATTACHMENT"
const REFRESH_ATTACHMENT = "REFRESH_ATTACHMENT"

const SET_SECTIONS = "SET_SECTIONS"
const ADD_SECTION = "ADD_SECTION"
const REMOVE_SECTION = "REMOVE_SECTION"
const REFRESH_SECTION = "REFRESH_SECTION"

const ADDING_DISPLAY = "ADDING_DISPLAY"
const SET_CURRENTDIR = "SET_CURRENTDIR"


const defaultState = {
    funds: [],
    collections: [],
    documents: [],
    attachments: [],
    sections: [],
    addingDisplay: 'none',
    currentDir: 'none'
}
export default function objectReducer(state = defaultState, action){
    switch(action.type){

        case SET_FUNDS: return {...state, funds: action.payload}
        case ADD_FUND: return {...state, funds: [...state.funds, action.payload]}
        case REMOVE_FUND: return {...state, funds: [...state.funds.filter(fund => fund._id != action.payload)]}
        case REFRESH_FUND: return {...state, funds: state.funds.map((fund) => fund._id==action.payload._id ? {...action.payload}:fund)}

        case SET_COLLECTIONS: return {...state, collections: action.payload}
        case ADD_COLLECTION: return {...state, collections: [...state.collections, action.payload]}
        case REMOVE_COLLECTION: return {...state, collections: [...state.collections.filter(collection => collection._id != action.payload)]}
        case REFRESH_COLLECTION: return {...state, collections: state.collections.map((collection) => collection._id==action.payload._id ? {...action.payload}:collection)}

        case SET_DOCUMENTS: return {...state, documents: action.payload}
        case ADD_DOCUMENT: return {...state, documents: [...state.documents, action.payload]}
        case REMOVE_DOCUMENT: return {...state, documents: [...state.documents.filter(document => document._id != action.payload)]}
        case REFRESH_DOCUMENT: return {...state, documents: state.documents.map((document) => document._id==action.payload._id ? {...action.payload}:document)}

        case SET_ATTACHMENTS: return {...state, attachments: action.payload}
        case ADD_ATTACHMENT: return {...state, attachments: [...state.attachments, action.payload]}
        case REMOVE_ATTACHMENT: return {...state, attachments: [...state.attachments.filter(attachment => attachment._id != action.payload)]}
        case REFRESH_ATTACHMENT: return {...state, attachments: state.attachments.map((attachment) => attachment._id==action.payload._id ? {...action.payload}:attachment)}

        case SET_SECTIONS: return {...state, sections: action.payload}
        case ADD_SECTION: return {...state, sections: [...state.sections, action.payload]}
        case REMOVE_SECTION: return {...state, sections: [...state.sections.filter(section => section._id != action.payload)]}
        case REFRESH_SECTION: return {...state, sections: state.sections.map((section) => section._id==action.payload._id ? {...action.payload}:section)}

        case ADDING_DISPLAY: return {...state, addingDisplay: action.payload}
        case SET_CURRENTDIR:  return {...state, currentDir: action.payload}
        default:
            return state
    }
}

export const setFunds = (funds) => ({type: SET_FUNDS, payload: funds})
export const addFund = (fund) => ({type: ADD_FUND, payload: fund})
export const removeFund = (id) => ({type: REMOVE_FUND, payload: id})
export const refreshFund = (fund) => ({type: REFRESH_FUND, payload: fund})

export const setCollections = (collections) => ({type: SET_COLLECTIONS, payload: collections})
export const addCollection = (collection) => ({type: ADD_COLLECTION, payload: collection})
export const removeCollection = (id) => ({type: REMOVE_COLLECTION, payload: id})
export const refreshCollection = (collection) => ({type: REFRESH_COLLECTION, payload: collection})

export const setDocuments = (documents) => ({type: SET_DOCUMENTS, payload: documents})
export const addDocument = (document) => ({type: ADD_DOCUMENT, payload: document})
export const removeDocument = (id) => ({type: REMOVE_DOCUMENT, payload: id})
export const refreshDocument = (document) => ({type: REFRESH_DOCUMENT, payload: document})

export const setAttachments = (attachments) => ({type: SET_ATTACHMENTS, payload: attachments})
export const addAttachment = (attachment) => ({type: ADD_ATTACHMENT, payload: attachment})
export const removeAttachment = (id) => ({type: REMOVE_ATTACHMENT, payload: id})
export const refreshAttachment = (attachment) => ({type: REFRESH_ATTACHMENT, payload: attachment})

export const setSections = (sections) => ({type: SET_SECTIONS, payload: sections})
export const addSection = (section) => ({type: ADD_SECTION, payload: section})
export const removeSection = (id) => ({type: REMOVE_SECTION, payload: id})
export const refreshSection = (section) => ({type: REFRESH_SECTION, payload: section})

export const setAddingDisplay = (display) => ({type: ADDING_DISPLAY, payload: display})
export const setCurrentDir = (dir) => ({type: SET_CURRENTDIR, payload: dir})