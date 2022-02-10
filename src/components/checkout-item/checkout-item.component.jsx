import React from 'react';

import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

    
    const CheckoutItem = ({ cartItem, clearItemFromCart,addItem ,removeItem}) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick= { () => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                
                <div className="arrow" onClick= { () => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
        </div>
        </div>
    )
};

const mapDispatchToProp = (dispatch) => ({

    clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
   

})

export default connect(null, mapDispatchToProp)(CheckoutItem);