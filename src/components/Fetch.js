import React, { useEffect, useState } from 'react'
import {AiFillHome, AiFillAlipayCircle} from "react-icons/ai"
import {HiOutlineHome} from "react-icons/hi"

function Fetch() 
{
    const [products, setProducts] = useState([])

   useEffect(()=>{
     fetch("https://dummyjson.com/products")
     .then((response)=> response.json())
     .then((data)=>{

        setProducts(data.products)
     })

   }, [])

   console.log(products)
   
   function handleDelete(id){
    console.log("to be deleted  ", id)
   }

  return (
    <div>
        <h1>Fetch</h1>
        <AiFillHome  size={50}/>
        <HiOutlineHome  size={50}/>
        {
            products.length>0?
                products && products.map((product)=>(
                    <div key={product.id} className='card mt-5'>
                        <h1>{product.brand}</h1>
                        <h2>{product.category}</h2>
                        <button onClick={()=>handleDelete(product.id)}>Delete</button>
                    </div>
                ))
            :
            <div>
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                    </div>
            </div>
        }
    </div>
  )
}

export default Fetch