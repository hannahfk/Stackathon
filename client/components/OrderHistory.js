import React from "react";
import { connect } from "react-redux";
import { fetchHistory } from "../store/order_history";
import NestedSingle from './NestedSingle'

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadHistory(this.props.auth.id);
  }

  render() {
    const history = this.props.orderHistory;

    console.log('here is the history', history);
    return (
      // <div className="notwhite">
      //   {history.map((order) => 
      //     order.products.map((product) => (
      //       <div className="notwhite" key={product.id}>
      //         {product.name}
      //       </div>)
      //     )
      //   )}
      // </div>
      <div className="notwhite">
        {history.map(order =>
        <div key={order.id}>
        Order Number:{order.id}
        <div/>
        Date: {Date(order.createdAt)}
        <NestedSingle products={order.products}/>
        <hr/>
        <div/>
        </div>)}
        
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    orderHistory: state.orderHistory,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadHistory: (id) => dispatch(fetchHistory(id)),
  };
};

export default connect(mapState, mapDispatch)(OrderHistory);
