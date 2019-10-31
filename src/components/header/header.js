import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({order, count}) => {
    return (
        <header className='header row'>
            <Link to='/' className='header-main'>Store</Link>
            <Link to='/cart' className='price-info'>
                <i className='cart-icon fa fa-shopping-cart'></i>
                    item {count} ({order}$)
            </Link>
        </header>
    )
}
class HeaderContainer extends Component {
    render() {
        const { orderTotal, totalCount } = this.props;
        return (
            <Header order={orderTotal} count={totalCount} />
        )
    }
}
const mapStateToProps = ({products: { orderTotal, totalCount}} ) => {
    return {
        orderTotal,
        totalCount
    }
}


export default compose(
    connect(mapStateToProps, {})
)(HeaderContainer);