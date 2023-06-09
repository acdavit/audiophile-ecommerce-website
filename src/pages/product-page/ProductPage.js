import { useEffect, useState } from "react";
import './assets/product-page.css';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router";
import CartCounter from "../../shared-components/cart-counter/CartCounter";
import OtherProducts from "./other-products/OtherProducts";
import Categories from "../../shared-components/categories/Categories";
import BestGear from "../../shared-components/best-gear/BestGear";
import addItem from "../../actions/addItem";
import setQuantity from "../../actions/setQuantity";
import removeItem from "../../actions/removeItem";
import BackButton from "../../shared-components/back-button/BackButton";

export default function ProductPage({product}){
    const {width} = useWindowDimensions();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartIndex = cart.findIndex(item => item.slug === product.slug);
    const [quantity, setQuantityState] = useState((
        cartIndex === -1 ?
            1:
            cart[cartIndex].quantity
    ))

    const onIncrement = () => setQuantityState(prev => prev+1);
    const onDecrement = () => setQuantityState(prev => (prev > 1 ? prev-1 : prev));

    useEffect(() => {
        if (cartIndex !== -1)
            dispatch(setQuantity(cartIndex, quantity))
    }, [quantity]);

    useEffect(() => {
        if (cartIndex !== -1)
            setQuantityState(cart[cartIndex].quantity);
    }, [cart]);

    useEffect(() => {
        setQuantityState((
            cartIndex === -1 ?
                1:
                cart[cartIndex].quantity
        ))
    }, [product]);
    

    const device = (width < 768 ? 'mobile' : (width < 1200 ? 'tablet' : 'desktop'));


    return (<div className='product-page'>
        <BackButton/>

        <section className='main'> 
            <img src={product.image[device]} alt={'Image of ' + product.name}/>
            <div className='main-text'>
                {(
                    product.new ? 
                        <span className='new-product'>New Product</span> :
                        <></>
                )}
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <span className='product-price'>${product.price}</span>
                <div className="inline">
                    <CartCounter value={quantity} onIncrement={onIncrement} onDecrement={onDecrement}/>
                    {( cartIndex === -1?
                        <button
                            class='button button-orange'
                            onClick={() => dispatch(addItem(product, quantity))}>Add to cart</button>:
                        <button
                            class='button button-grey'
                            onClick={() => dispatch(removeItem(cartIndex))}>Added</button>
                    )}
                </div>
            </div>
            
        </section>
        
        <div className={(device === 'desktop' ? "inline" : '')}>
            <section className='features'>
                <h2>Features</h2>
                <p>
                    {product.features}
                </p>
            </section>
                    
            <section className="in-the-box">
                <h2>In the box</h2>
                <div className='included-items'>
                    {product.includes.map((item, index) => (
                        <div className='included-item' key={index}>
                            <span className='included-item-quantity'>{item.quantity}x </span>
                            <span className='included-item-text'>{item.item}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        

        <section className='gallery'>
            <div className="small-images">
                <img className='gallery-image' src={product.gallery.first[device]}/>
                <img className='gallery-image' src={product.gallery.second[device]}/>
            </div>
            <img className='gallery-image' src={product.gallery.third[device]}/>
        </section>

        <OtherProducts products={product.others} device={device}/>
        <Categories/>
        <BestGear/>
    </div>)
}