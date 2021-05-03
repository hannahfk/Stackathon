import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { getCartThunk, removeFromCartThunk } from "../store/cart";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItems: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    this.props.loadProducts();
    this.props.fetchCart(this.props.auth.id, {
      buyerEmail: this.props.auth.email,
    });
  }

  handleAdd(evt) {
    this.props.fetchAddItem();
  }

  render() {
    const products = this.props.products || [];

    return (
      <div>
        <div className="all-items-row">
          {products
            ? products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
    fetchCart: (userId, body) => dispatch(getCartThunk(userId, body)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
