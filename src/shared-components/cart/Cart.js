import { useDispatch, useSelector } from 'react-redux';
import clearCart from '../../actions/clearCart';
import './assets/cart.css';
import CartItem from './cart-item/CartItem';
import useTotal from '../../hooks/useTotal';
import { useNavigate } from 'react-router';

export default function Cart({ setCartVisibility }) {
    const cart = useSelector(state => state.cart);
    const total = useTotal(cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (<>
        <div id='cart-background' onClick={() => setCartVisibility(false)}/>
        <div id="cart-card">
            {cart.length !== 0 ?
                <>
                    <div className='inline' id='title-bar'>
                        <span>Cart ({cart.length})</span>
                        <button onClick={() => dispatch(clearCart())}>Remove all</button>
                    </div>

                    <div className={cart.length < 4 ? 'cart-items' : 'cart-items cart-items-overflow'}>
                        {cart.map((item, index) => <CartItem key={index} item={item} index={index}/>)}
                    </div>


                    <div className='inline' id='total'>
                        <span id='total-label'>Total</span>
                        <span id='total-price'>${total}</span>
                    </div>

                    <button
                        onClick={() => {
                            navigate('/checkout');
                            setCartVisibility(false);
                        }}
                        className='button button-orange' 
                        id='checkout-button'
                    >Checkout</button>
                </>
            :   <div id='no-items'>
                    <h1>No items</h1>
                    <p>Start by adding an item to the cart</p>
                </div>}

        </div>
    </>)
}