import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItems, decreaseBascetCount } from '../../../reducer/reducer';
import Cart from './cart';

class CartContainer extends Component {

  handleRemoveFromCart = (id) => {
    const { OnDelete, decreaseBascetCount } = this.props;
    OnDelete(id)
    decreaseBascetCount(id)
  }

  render() {
      const { items, total } = this.props;
      return (
          <Cart items={items} total={total} onRemovedCart={this.handleRemoveFromCart} />
      )
  }
}

const mapStateToProps = ({products: {cartItems, orderTotal}}) => {
  return{
    items: cartItems,
    total: orderTotal
  }
}
  
const mapDispatchToProps = {
  OnDelete: deleteItems,
  decreaseBascetCount: decreaseBascetCount
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);