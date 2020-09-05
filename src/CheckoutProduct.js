import React from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, title, price, rating, img}) {
    const [{basket}, dispatch] = useStateValue();

    // console.log(id, title, price, rating, img);
    const RemoveFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        });
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={img} alt=""/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                        }
                    </div>
                    <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
