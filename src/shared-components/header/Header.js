import './assets/header.css';
import iconHamburger from './assets/icon-hamburger.svg';
import iconCart from './assets/icon-cart.svg';
import logo from '../shared-assets/logo.svg';
import Navigation from '../navigation/Navigation';
import { useState } from 'react';
import Cart from '../cart/Cart';

export default function Header(){
    const [isNavigationVisible, setNavigationVisibility] = useState(false);
    const [isCartVisible, setCartVisibility] = useState(false);
    
    
    return (<>
        <header>
            <button onClick={() => setNavigationVisibility((prev) => !prev)} id='menu-button'>
                <img src={iconHamburger} alt='Menu' id='menu-button-img'/>
            </button>

            <img src={logo} alt='audiophile' id='logo'/>

            <div id='tablet-whitespace'/>
            <div id='navigation-desktop'>
                <Navigation/>
            </div>

            <button onClick={() => setCartVisibility((prev) => !prev)} id='cart-button'>
                <img src={iconCart} alt='Cart' id='cart-button-img'/>
            </button>
        </header>

        <div 
            id='navigation-mobile'
            style={isNavigationVisible ? {top: 'var(--header-height)'} : {}}
            onClick={() => setNavigationVisibility((prev) => !prev)}
        >
            <Navigation />
        </div>

        <hr id='header-hr'/>

        {isCartVisible ? <Cart setCartVisibility={setCartVisibility}/> : ''}
    </>)
}