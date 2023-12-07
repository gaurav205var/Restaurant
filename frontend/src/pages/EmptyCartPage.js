import React from 'react';
import "../styles/EmptyCartPage.css";
import EmptyCartImg from "../img/myemptycart.avif";

const EmptyCartPage = () => {
    return (
        <div className='container1 d-flex flex-column align-items-center justify-content-center'>
            <div className="img_container">
                <img src={EmptyCartImg} alt="Empty Cart" className="empty-cart-image" />
            </div>
            <h1>Your Cart is Empty!</h1>
            <h5>Must add items to the cart before you proceed to checkout.</h5>
        </div>
    );
};

export default EmptyCartPage;
