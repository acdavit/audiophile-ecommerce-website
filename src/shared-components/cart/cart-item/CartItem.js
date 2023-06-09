import './assets/cart-item.css';

import CartCounter from "../../cart-counter/CartCounter";
import setQuantity from '../../../actions/setQuantity';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function CartItem({item, index, setCartVisibility}){
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return(<div className="cart-item">
        <div className='inline cart-info' onClick={
            () => {
                navigate('/product/' + item.slug);
                setCartVisibility(false);
            }
        }>
            <img src={item.categoryImage.desktop}/>
            <div className='cart-spans'>
                <span className='item-label'>{item.name}</span>
                <span className='item-price'>${item.price}</span>
            </div>
        </div>
        
        <CartCounter
            onDecrement={() => dispatch(setQuantity(index, item.quantity - 1))} 
            onIncrement={() => dispatch(setQuantity(index, item.quantity + 1))}
            value={item.quantity}
        />
    </div>)
}