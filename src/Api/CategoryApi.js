import React,{useCallback, useEffect, useState} from "react";
import axios from "axios";
const url='http://dummyjson.com'

//custom hook
export default function useCategoryApi(){
    const[category,setCategory]=useState([])
    
    const readCategories=async ()=>{
     const out=await axios.get(`${url}/products/categories`);
     console.log("category=",out)
     setCategory(out.data)
    }

    const initValue =useCallback(()=>{
        readCategories()
    },[])
    useEffect(()=>{
        initValue()
    },[initValue])

    return{
        category:[category,setCategory]
    }

}