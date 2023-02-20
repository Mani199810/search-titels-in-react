import React,{useContext, useState} from 'react'


import ProductCard from './ProductCard'
import { ProductContext } from '../ProductContext'

import './home.css'

function Home(props) {
const context = useContext(ProductContext)

const [productsData] = context.productApi.products.value || []

const [data,setdata]=useState('')

  return (
    <div className="container">
       
      <div style={{width:'250px'}} className=" mt-3 row float-end">
         <input type="search"  placeholder='search ... ex:oppo' width='200px' onChange={(e)=>{setdata(e.target.value)}} />
      </div>

        <div className="row">
        {
            productsData.length === 0 ? (
            <div className="col-md-12 ">
              <div className="row text-center">
                <h5 className="display-5 text-secondary">No Products Found</h5>
            </div>
          </div>
            ):(
              <div className="col-md-12  ">
              <h5 className="display-5 text-center text-success" id='mk'>Mk Products</h5>
            </div>
            )
        }
        </div> 
        <div className="row">
          {
            
          // productsData.map((item,index)=>{
             
            
          //     return <ProductCard key={index}{...item} />


          //   })
            productsData.filter((val)=>{
              if(data == ''){
                return <ProductCard {...val} />
              }else if (val.title.toLowerCase().includes(data)){
                return <ProductCard {...val} />
              }
            }).map((val,key)=>{
              return(
                <ProductCard key={key}{...val} />
              )
            
            
            

            
            }) }
         
        </div> 
       
       
        
    </div>
  )
}

export default Home
