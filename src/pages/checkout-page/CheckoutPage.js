import './assets/checkout-page.css';

import { useState } from "react";
import BackButton from '../../shared-components/back-button/BackButton';
import cashOnDeliveryIcon from './assets/icon-cash-on-delivery.svg';
import { useSelector } from 'react-redux';
import useTotal from '../../hooks/useTotal';
import CartItem from '../../shared-components/cart/cart-item/CartItem';
import OrderConfirmation from './order-confirmation/OrderConfirmation';

const CASH_ON_DELIVERY = 'CASH_ON_DELIVERY';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default function CheckoutPage() {
    const cart = useSelector(state => state.cart);
    const total = useTotal(cart);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [payment, setPayment] = useState('');
    const [paymentPin, setPaymentPin] = useState('');

    const [emailValidity, setEmailValidity] = useState(true);

    const [orderConfirmation, setOrderConfirmation] = useState(false);

    return (<div id='checkout-page'>
        <BackButton/>
        
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!EMAIL_REGEX.test(email)){
                setEmailValidity(false);
                return;
            }
            setOrderConfirmation(true);
        }}>
            <div id='checkout'>
                <h1>Checkout</h1>

                <div className='info-section'>

                    <h3>billing details</h3>


                    <div className='label-and-input-block'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='David Abakelia'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div className={emailValidity ? 'label-and-input-block' : 'label-and-input-block invalid-email'}>
                        <label htmlFor='email'>Email Address <span>Wrong format</span></label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='acdavid@protonmail.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setEmailValidity(true);
                            }}
                            required
                        ></input>
                    </div>

                    <div className='label-and-input-block'>
                        <label htmlFor='phone-number'>Phone number</label>
                        <input
                            type='text'
                            name='phone-number'
                            id='phone-number'
                            placeholder="+995 511 16 08 91"
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber((v) => (
                                    /^[+\(\)\d\s]+$/.test(e.target.value) || e.target.value === ''
                                        ? e.target.value
                                        : v
                                ));
                            }}
                            required
                        ></input>
                    </div>

                </div>

                <div className='info-section'>

                    <h3>shipping info</h3>


                    <div className='label-and-input-block wide-input-block'>
                        <label htmlFor='address'>Address</label>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            placeholder='29 Krtsanisi Street'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div className='label-and-input-block'>
                        <label htmlFor='email'>ZIP Code</label>
                        <input
                            type='text'
                            name='zip-code'
                            id='zip-code'
                            placeholder='0114'
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value.toUpperCase())}
                            required
                        ></input>
                    </div>

                    <div className='label-and-input-block'>
                        <label htmlFor='city'>City</label>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            placeholder="Tbilisi"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div className='label-and-input-block'>
                        <label htmlFor='country'>Country</label>
                        <input
                            type='text'
                            name='country'
                            id='country'
                            placeholder="Sakhartvelo"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        ></input>
                    </div>

                </div>

                <div className="info-section">

                    <h3>payment details</h3>

                    <div id="payment-methods" className='label-and-input-block'>
                        <label>Payment method</label>

                        <div 
                            className={
                                payment === CASH_ON_DELIVERY ?
                                    'payment-method':
                                    'payment-method selected-payment-method'
                            }
                            onClick={() => {
                                setPayment('');
                                setPaymentPin('');
                            }}
                        >
                            <input
                                type='button'
                                onClick={() => {
                                    setPayment('');
                                    setPaymentPin('');
                                }}
                            >
                            </input>
                            e-Money
                        </div>

                        <div 
                            onClick={() => setPayment(CASH_ON_DELIVERY)}
                            className={
                                payment !== CASH_ON_DELIVERY ?
                                    'payment-method':
                                    'payment-method selected-payment-method'
                            }
                        >
                            <input
                                type='button'
                                onClick={() => setPayment(CASH_ON_DELIVERY)}
                            >
                            </input>
                            Cash on Delivery
                        </div>
                    </div>

                    <div id='e-money-inputs' className={payment === CASH_ON_DELIVERY ? 'hidden' : 'info-section'}>

                        <div className="label-and-input-block">
                            <label htmlFor='e-money-number'>e-Money Number</label>
                            <input
                                type='text'
                                name='e-money-number'
                                id='e-money-number'
                                placeholder="238521993"
                                value={payment}
                                onChange={(e) => setPayment((v) => (
                                    (/^\d+$/.test(e.target.value) && e.target.value.length < 10) || e.target.value === ''
                                        ? e.target.value
                                        : v
                                ))}
                            ></input>
                        </div>

                        <div className="label-and-input-block">
                            <label htmlFor='e-money-pin'>e-Money PIN</label>
                            <input
                                type='text'
                                name='e-money-pin'
                                id='e-money-pin'
                                placeholder="0729"
                                value={paymentPin}
                                onChange={(e) => setPaymentPin((v) => (
                                    (/^\d+$/.test(e.target.value) && e.target.value.length < 5) || e.target.value === ''
                                        ? e.target.value
                                        : v
                                ))}
                            ></input>
                        </div>

                    </div>

                    <div className={payment !== CASH_ON_DELIVERY ? 'hidden' : ''} id='cash-on-delivery-section'>
                        <img src={cashOnDeliveryIcon} alt=''></img>
                        <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>
                    </div>

                </div>

            </div>


            <div id='summary'>
                <h2>Summary</h2>


                <div id='checkout-items'>
                    {cart.map((item, index) => <CartItem key={index} item={item} index={index}/>)}
                </div>


                <div id='checkout-prices'>
                    <div className='price-container'>
                        <span className='price-label'>Total</span>
                        <span className='price-value'>${total}</span>
                    </div>

                    <div className='price-container'>
                        <span className='price-label'>Shipping</span>
                        <span className='price-value'>$50</span>
                    </div>

                    <div className='price-container'>
                        <span className='price-label'>VAT &#40;Included&#41;</span>
                        <span className='price-value'>${Math.round(total/100) * 20}</span>
                    </div>

                    <div className='price-container' id='grand-total'>
                        <span className='price-label'>Grand Total</span>
                        <span className='price-value'>${total+50}</span>
                    </div>

                </div>

                <input
                    type="submit" 
                    className='button button-orange' 
                    id='pay'
                    value='Continue & Pay'
                />

            </div>

        </form>

        {orderConfirmation ? <OrderConfirmation/> : null}
    </div>)
}