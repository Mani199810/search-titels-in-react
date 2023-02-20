import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'

function ProductCard(props) {
    const context =useContext(ProductContext)
    const addToCart=context.productApi.addToCart
  return (
<div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
        <div className="card">
            <img src={props.thumbnail} alt="no image" className='card-img-top' />
            <div className="card-body text-center ">
               
                <h6 className="text-center  text-success text-capitalize">{props.title}</h6>
                <h6 className="text-warning">&#8377;{props.price}</h6>
                <details>
                    <summary className='text-primary'>Product description   </summary>
                        <p className='card-text text-justify text-secondary'>{props.description}</p>
                  
                </details>
                </div>
                <div className="card-footer ">
                    <NavLink to={`/product/${props.id}`} className='btn btn-sm btn-outline-primary' title='product details'>
                        <i className='bi bi-info-circle-fill'></i>
                    </NavLink>
                    {/* <h6 className="text-warning">&#8377; {props.price}</h6> */}
                    
                    <button onClick={()=>addToCart(props)} className="btn btn-outline-success btn-sm float-end" title='Add to cart'>
                        <i className="bi bi-cart"></i>
                    </button>
                   </div>  
        </div>
    </div> 

     )

}

export default ProductCard