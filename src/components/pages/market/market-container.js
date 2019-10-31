import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { productsLoaded, productsRequested, 
    onAddedToCart, increaseBascetCount } from '../../../reducer/reducer';
import Spinner from '../../spinner/spinner';
import Market from './market';
import withStoreService from "../../hoc/withStoreService";

class MarketContainer extends Component {

    componentDidMount() {
        const {
            productsLoaded,
            productsRequested,
            storeService
        } = this.props;
        productsRequested();
        storeService.getProducts()
        .then((data) => productsLoaded(data))
        .catch((error) => console.log(error));
    }

    handleAddToCart = (id) => {
        const { onAddedToCart, increaseBascetCount } = this.props;
        onAddedToCart(id)
        increaseBascetCount()
    }

    render() {
        const { loading, products } = this.props;
        if(loading) {
            return <Spinner />
        }
        return (
            <div>
                <Market
                    products={products}
                    onAddedToCart={this.handleAddToCart}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.products.loading,
        products: state.products.products
    };
};

const mapDispatchToProps = {
    productsLoaded, productsRequested,
    onAddedToCart, increaseBascetCount
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MarketContainer);