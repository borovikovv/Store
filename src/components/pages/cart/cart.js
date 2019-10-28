import React from 'react';
import './cart.css';

const Cart = ({items, total, onRemovedCart }) => {

  const renderRow = (item, idx) => {
    const { id, name, count, price} = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td className='table-count'
            >{count}</td>
        <td>${price}</td>
        <td>
          <button 
            onClick={()=> onRemovedCart(id) }
            className="btn cart-btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="cart-page">
      <h2 className='cart-header float-left'>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default Cart;