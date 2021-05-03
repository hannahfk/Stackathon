import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../GlobalStyles";
import {
  ProductsContainer,
  ProductsContent,
  ProductsTitle,
  ProductsCardContent,
  ProductsCard,
  ProductsIconContainer,
  ProductsIcon1,
  ProductsIcon2,
  ProductsIcon3,
  ProductsCardTitle,
  ProductsCardText,
} from "../AllProducts.styles";

const AdminProduct= (props) => {

   const { name, description, id } = props.product
   const { handleDelete } = props

   return (
      <div className="product">
      <ProductsContent>          
      <ProductsContainer>            
      <ProductsCardContent>
      
      <ProductsCard>
         <div className='card-30'>
            <Link to={`/admin/products/${id}`}>
               <h4 >{name}</h4>
            </Link>
            <p>ID: {id}</p>
         </div>
         <div className='card-70'>
            <p><strong>Description: </strong>{description}</p>
         </div>
         <Button
            className='remove-button'
            onClick={() => handleDelete(id)}
         >  Delete Product
         </Button>
         <Link to={`/admin/products/${id}/edit`}>
            <Button> Edit Product </Button>
         </Link>
         </ProductsCard>
         </ProductsCardContent> 
         </ProductsContainer>
         </ProductsContent>
      </div>
   );
};

export default AdminProduct
