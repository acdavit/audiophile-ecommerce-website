import './assets/order-confirmation.css';
import orderConfirmationCheckmarkLogo from './assets/icon-order-confirmation.svg';
import CartItem from '../../../shared-components/cart/cart-item/CartItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useTotal from '../../../hooks/useTotal';
import { useNavigate } from 'react-router';


export default function OrderConfirmation() {
    const cart = useSelector(state => state.cart);
    const total = useTotal(cart);
    const navigate = useNavigate();
    const [hiddenItems, setHiddenItems] = useState(true);

    return (<div id="order-confirmation">
        <div id='order-confirmation-card'>
            <img src={orderConfirmationCheckmarkLogo} />
            <h1>Thank you for your order</h1>
            <h2>You will receive an email confirmation shortly.</h2>

            <div id='items-and-total'>
                <div id='confirmation-items'>
                    {cart.length > 1 ?
                        <div className='confirmation-item-containers'>
                            {hiddenItems ?
                                <CartItem
                                    item={cart[0]}
                                    index={0}
                                /> :

                                <div 
                                    className={cart.length > 3 ? 'confirmation-overflow' : ''} 
                                    id='confirmation-item-list'
                                >
                                {
                                    cart.map((item, index) => (
                                        <CartItem
                                            key={index}
                                            item={item}
                                            index={index}
                                        />
                                    ))
                                }
                                </div>
                            }

                            <hr></hr>

                            <button
                                onClick={() => setHiddenItems(prev => !prev)}
                            >
                                {hiddenItems ?
                                    `and ${cart.length - 1} other item(s)` :
                                    'View less'
                                }
                            </button>
                        </div>
                        :


                        <div className='confirmation-item-containers' id='singular-item-container'>
                            <CartItem item={cart[0]} index={0} />
                        </div>
                    }
                </div>

                <div id='confirmation-total'>
                    <h3>Grand Total</h3>
                    <h4>${total + 50}</h4>
                </div>
            </div>

            <button
                className='button button-orange'
                onClick={() => navigate('/')}>
                Back to home
            </button>
        </div>
    </div>
    )
}