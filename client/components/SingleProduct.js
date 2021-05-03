import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { addToCartThunk, getCartThunk } from "../store/cart";
import { Link } from "react-router-dom";
import { Button } from "./GlobalStyles";
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
} from "./AllProducts.styles";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    const body = {
      buyerEmail: this.props.auth.email,
    };
    console.log("component did mount", this.props.auth.id);
    this.props.fetchCart(this.props.auth.id, body);
    this.props.loadSingleProduct(this.props.match.params.id);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    console.log("FROM THE HANDLE SUBMIT");
    const body = {
      orderId: this.props.cart.id,
      productId: this.props.match.params.id,
      qty: this.state.quantity,
    };
    this.props.addToCart(body);
  }
  render() {
    console.log("new qty -->", this.state.quantity);
    return (
      <div>
        <ProductsContent>
          <ProductsContainer>
            <ProductsCardContent>
              <ProductsCard>
                <div key={this.props.product.id}>
                  <h4> {this.props.product.name} </h4>
                  <p> {this.props.product.description}</p>
                  <input
                    type="number"
                    min={1}
                    max={999999}
                    onChange={this.handleChange}
                    name="quantity"
                  />
                  {this.props.isLoggedIn ? (
                    <Link to="/cart">
                      <Button onClick={this.handleSubmit}>Add to Cart</Button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Button>Please sign in</Button>
                    </Link>
                  )}
                </div>
              </ProductsCard>
            </ProductsCardContent>
          </ProductsContainer>
        </ProductsContent>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product,
    cart: state.cart,
    auth: state.auth,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (body) => dispatch(addToCartThunk(body)),
    fetchCart: (userId, body) => dispatch(getCartThunk(userId, body)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
