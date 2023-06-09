import './assets/cart-counter.css';

export default function CartCounter({value, onIncrement, onDecrement}){
    return (<div class='cart-counter'>
        <button onClick={onDecrement}>-</button>
            <span className='counter-x'>x</span>
            {value}
        <button onClick={onIncrement}>+</button>
    </div>)
}