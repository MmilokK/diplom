import React, { useEffect,} from "react";
import { useDispatch,  } from "react-redux";
import { getAttachments, getCollections, getDocuments, getFunds, getSections, } from "../../actions/objects";
import ObjectList from "../Objects/ObjectList";
import "./catalog.css"
import { setAddingDisplay } from "../../reducers/objectReducer";

const Catalog = () => {

    const dispatch = useDispatch()   


    useEffect(()=> {
        dispatch(getFunds());
        dispatch(getCollections());
        dispatch(getDocuments());
        dispatch(getAttachments());
        dispatch(getSections());
        }
        
    ,)


    return (
        <div className = "catalog">
            <div>КАТАЛОГ</div>
            <ObjectList/>
        </div>
    )
}

export default Catalog;