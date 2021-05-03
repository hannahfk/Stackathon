import React from 'react'
import { Link } from "react-router-dom";

export default function NestedSingle(props) {
    const products = props.products || []

    console.log('here:',products)
    return (
        <div >
            {products.map(product=>
                <Link key={product.id} to={`/products/${product.id}`} 
                className='notewhite' style={{"color":"white"}}>{" "} <div/> {"  "}🎫 {product.name}</Link>
            )}
        </div>
    )
}
