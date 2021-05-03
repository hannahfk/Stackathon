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

const AdminUser = (props) => {

   const { username, id, isAdmin} = props.user
   const { handleDelete } = props

   return (
      <div>
       <ProductsContent>          
      <ProductsContainer>            
      <ProductsCardContent>
      
      <ProductsCard>
         <div className='card-30'>
            <Link to={`/admin/users/${id}`}>
               <h4>{username}</h4>
            </Link>
            <p>ID: {id}</p>
         </div>
         <div className='card-70'>
            <p><strong>{isAdmin === true ? "admin" : " "}</strong></p>
         </div>
         <Button
           
            onClick={() => handleDelete(id)}
         > Delete User
      </Button>
         <Link to={`/admin/users/${id}/edit`}>
            <Button> Edit User </Button>
         </Link>
         </ProductsCard>
         </ProductsCardContent> 
         </ProductsContainer>
         </ProductsContent>
      </div>
   );
};

export default AdminUser
