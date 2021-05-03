import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProduct } from "../../store/admin_products"
import { fetchSingleProduct } from "../../store/singleProduct"

 class AdminEditProduct extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          name: this.props.product.name ? this.props.product.name : '',
          description: this.props.product.description ? this.props.product.description : '',
          image: this.props.product.image ? this.props.product.image : '',
          price: this.props.product.price ? this.props.product.price : '',
          date: this.props.product.date ? this.props.product.date: ''
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }


   componentDidMount() {
      const { id } = this.props.match.params
      this.props.getSingleProduct(id)
   }

    componentDidUpdate(prevProps) {
       if (prevProps.product.id !== this.props.product.id) {
          this.setState({
             name: this.props.product.name || '',
             description: this.props.product.description || '',
             image: this.props.product.image || '',
             price: this.props.product.price  || '',
             date: this.props.product.date|| '',
          })
       }
    }

    handleChange(evt) {
       this.setState({
          [evt.target.name]: evt.target.value,
       })
    }

    handleSubmit(evt) {
       evt.preventDefault()
       this.props.updateProduct(this.props.match.params.id, {...this.state})
       this.setState({
          name: '',
          description: '',
          image: '',
          price: '',
          date: ''
       });
    }

   render() {
      console.log('product props', this.state)
      const { name, description, image, price, date} = this.state
      const { handleSubmit, handleChange} = this

      return (
            <div >
               <h1>Update Product</h1>
               <div >
                  <form  onSubmit={handleSubmit}>
                     {/* <div>Product ID: {} </div> */}
                     <div className='row'>
                        <div className="col-20">
                           <label htmlFor='name'>Event Name:{name}</label>
                        </div>
                        <div className='col-70'>
                        <input name='name' required onChange={handleChange} value={name} />
                        </div>
                     </div>

                      <div className='row'>
                        <div className='col-20'>
                           <label htmlFor='description'>Description:</label>
                        </div>
                        <div className='col-70'>
                           <input
                              name='description'
                              required  
                              onChange={handleChange} 
                              value={description}/>
                        </div>
                     </div>

                     <div className='row'>
                        <div className="col-20">
                           <label htmlFor="image">imageUrl:</label>
                        </div>

                        <div className="col-70">
                           <input
                              name="image"
                              type="text"
                              onChange={handleChange} 
                              value={image}
                           />
                        </div>
                     </div>

                     <div className='form-button-group'>
                        <button type='submit'>Save Change </button>

                        <Link to={`/admin/products/${this.props.match.params.id}`}>
                           <button>Cancel</button>
                        </Link>
                     </div>
                  </form>
               </div>
            </div>
         )
      }
}               

const mapState = (state) => ({
   product: state.product
})

const mapDispatch = (dispatch, { history }) => ({
   updateProduct: (id, product) => dispatch(updateProduct(id, product, history)),
   getSingleProduct: (id) => dispatch(fetchSingleProduct(id))
})

export default connect(mapState, mapDispatch)(AdminEditProduct);
