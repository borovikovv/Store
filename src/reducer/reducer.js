const ADDED_TO_CART = 'ADDED_TO_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const FETCH_PRODUCTS_LOADED = 'FETCH_PRODUCTS_LOADED';
const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
const INCREASE_BASKET_COUNT = 'INCREASE_BASKET_COUNT';
const DECREASE_BASKET_COUNT = 'DECREASE_BASKET_COUNT';

let initialState = {
    products: [],
    loading: true,
    cartItems: [],
    orderTotal: 0,
    totalCount: 0 
};

const updateCartItems = (cartItems, item, idx) => {

    if(item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }
    if(idx === -1){
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (product, item = {}, quantity) => {

    const { id = product.id, 
        price = 0, 
        count = 0, 
        name = product.name } = item;

    return {
        id,
        name,
        count: count + quantity,
        price: price + quantity * product.price
    };
    
};

const updateOrder = (state, productId, quantity) => {
    const { products, cartItems } = state;
    const product = products.find((item) => item.id === productId);
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    const item = cartItems[productIndex];

    const newItem = updateCartItem(product, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, productIndex)
    }

};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_PRODUCTS_LOADED:
                return {
                    ...state,
                    loading: false,
                    products: action.payload
                };
        case FETCH_PRODUCTS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ADDED_TO_CART:
            return updateOrder(state, action.payload, 1);

        case DELETE_ITEM:
            const item = state.cartItems.find((item) => item.id === action.payload);
            return updateOrder(state, action.payload, - item.count);
        case INCREASE_BASKET_COUNT: 
            const addedItems = state.cartItems.reduce((acc, item) => (acc + item.count), 0);
            const addedTotalPrice = state.cartItems.reduce((acc, item) => (acc + item.price), 0);
            return {
                ...state,
                totalCount: addedItems,
                orderTotal: addedTotalPrice
            }
        case DECREASE_BASKET_COUNT: 
            const decreaseItems = state.cartItems.reduce((acc, item) => acc + item.count, 0);
            const decreaseTotalPrice = state.cartItems.reduce((acc, item) => acc + item.price, 0);
            return {
                ...state,
                totalCount: decreaseItems,
                orderTotal: decreaseTotalPrice
            }

        default:
            return state;
    }
};

export const productsLoaded = (products) => ({
    type: FETCH_PRODUCTS_LOADED,
    payload: products
});

export const productsRequested = () => ({ type: FETCH_PRODUCTS_REQUESTED });

export const deleteItems = (id) => ({
    type: DELETE_ITEM,
    payload: id
});

export const onAddedToCart = (id) => ({
    type: ADDED_TO_CART,
    payload: id
});

export const increaseBascetCount = () => ({
    type: INCREASE_BASKET_COUNT
});


export const decreaseBascetCount = (id) => ({
    type: DECREASE_BASKET_COUNT,
    payload: id
});



export default reducer;