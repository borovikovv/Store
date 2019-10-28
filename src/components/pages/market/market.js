import React from 'react';
import './market.css';

const Market = ({products, onAddedToCart}) => {

        return <ul className='matket-items'>
            {
            products.map(product => <li key={product.id} className='market-item'>
                <div>
                    <span className='market-label'>{product.label}</span>
                </div>
                <div className='market-info'>
                    <h3 className='market-name'>{product.name}</h3>
                    <span className='market-price'>${product.price}</span>
                    <button onClick={ () => onAddedToCart(product.id) }
                        className='d-flex btn btn-primary'>
                        Add to cart
                    </button>
                </div>
            </li>)
            }
        </ul>
};
export default Market;