import Categories from '../../shared-components/categories/Categories';
import './assets/home-page.css';
import imageZX9 from './assets/desktop/image-speaker-zx9.png';
import BestGear from '../../shared-components/best-gear/BestGear';
import { useNavigate } from 'react-router';

export default function HomePage() {
    const navigate = useNavigate();
    
    return (<div id='home-page'>
        <div id='new-product' className='full-width'>
            <h1>NEW PRODUCT</h1>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button
                className='button button-orange'
                onClick={() => navigate('/product/xx99-mark-two-headphones')}
            >SEE PRODUCT</button>
        </div>
        <Categories />
        <div id='zx9-card' className='card'>
            <img src={imageZX9}></img>
            <div id='zx9-content'>
                <h1>ZX9<br/>SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button
                    className='button button-black'
                    onClick={() => navigate('/product/zx9-speaker')}
                >SEE PRODUCT</button>
            </div>
        </div>
        <div id='zx7-card' className='card'>
            <h4>ZX7 SPEAKER</h4>
            <button
                className='button button-transparent'
                onClick={() => navigate('/product/zx7-speaker')} 
            >See Product</button>
        </div>
        <div id='yx1-container'>
            <div id='yx1-photo-card' className='card'></div>
            <div id='yx1-card' className='card'>
                <h4>YX1 EARPHONES</h4>
                <button
                    className='button button-transparent'
                    onClick={() => navigate('/product/yx1-earphones')}    
                >SEE PRODUCT</button>
            </div>
        </div>
        <BestGear/>
    </div>)
}