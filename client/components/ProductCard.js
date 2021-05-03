import React, { Component } from "react";
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
class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductsContent>
          <ProductsContainer>
            <ProductsCardContent>
              <ProductsCard>
                <div className="product" key={this.props.product.id}>
                  <Link to={`/products/${this.props.product.id}`}>
                    <ProductsCardTitle>
                      {this.props.product.name}
                    </ProductsCardTitle>
                    <ProductsCardText>
                      {/* <img
                        className="eventImg"
                        src={this.props.product.image}
                      /> */}
                    </ProductsCardText>
                    <Button>View</Button>
                  </Link>
                </div>
              </ProductsCard>
            </ProductsCardContent>
          </ProductsContainer>
        </ProductsContent>
      </div>
    );
  }
}

export default ProductCard;
