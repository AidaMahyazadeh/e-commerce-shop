import { useState, createContext,useEffect } from "react";
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from '../shop-data.js';

export const CategoriesContext=createContext({categoriesMap:{}});
function CategoriesProvider({children}){
    const[categoriesMap,setCategoriesMap]=useState({})

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
           const categoryMap= await getCategoriesAndDocuments();
          setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[]);
    
    const value={categoriesMap};

    
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;