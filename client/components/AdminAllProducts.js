import React from 'react';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../store/admin_products';
import AdminProduct from './AdminProduct';
// import { me } from "/client/store/auth";


export class AdminAllProducts extends React.Component {
   constructor(props) {
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
   }

   componentDidMount() {
      this.props.getProducts()
   }

   handleDelete(id) {
      this.props.deleteProduct(id)
   }

   render() {
      const { adminProducts, isLoading } = this.props

      if (isLoading) {
         return (
            <div>
               <h1>Loading Products!</h1>
            </div>
         )
      }

      return (
         <div className='notwhite all-items-row'>
      
            {
               (
                  Array.isArray(adminProducts) && adminProducts.length === 0) ? (
                  <div className='main'>
                     <h4>There are no products in the database.</h4>
                  </div>
               ) : (
                  <div>
                     <div className='all-items-row'>
                        <h2 style={{color:"white"}}> ALL Products: </h2>
                           <p>{adminProducts.length} products in the database</p>
                     </div>

                     <div className='all-items-row'>
                        {adminProducts.map((product) => (
                           <div className='all-items-col' key={product.id}>
                              <AdminProduct
                                 product={product}
                                 handleDelete={this.handleDelete}
                              />
                           </div>
                        ))}
                     </div>
                    
                  </div>
                 
               )}
              
         </div>
      );
   }
}

const mapState = (state) => {
   console.log('products state: ', state.adminProducts)
   return {
      adminProducts: state.adminProducts,
      isLoading: state.isLoading
   }
}

const mapDispatch = (dispatch, { history }) => ({
   getProducts: () => dispatch(getProducts()),
   deleteProduct: (productId) => dispatch(deleteProduct(productId, history))
});

export default connect(mapState, mapDispatch)(AdminAllProducts);

