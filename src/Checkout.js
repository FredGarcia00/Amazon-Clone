import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import './Checkout.css';
function Checkout() {
    //pull the basket from the store
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

            
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/shazam/HPTO-Generic-DSP-Banners-Billboard-1940x500-Zpb8T._V404899617_.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping Basket is empty</h2>
                    <p>You have no items in your basket.
                        To buy one or more items click "Add to Basket" 
                        next to the item.
                    </p>
                </div>
            ): (
                <div>
                   <h2 className="checkout__title">Your Shopping Basket</h2> 

                   {/* list out checkout products below */}
                   {basket?.map(item => (
                   <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       img={item.img}
                       price={item.price}
                       rating={item.rating}
                       />
                   ))}

                </div>
             )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                   <SubTotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
