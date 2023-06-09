import './assets/categories.css';
import imageEarphones from './assets/image-category-thumbnail-earphones.png';
import imageHeadphones from './assets/image-category-thumbnail-headphones.png';
import imageSpeakers from './assets/image-category-thumbnail-speakers.png';
import iconArrow from './assets/icon-arrow-right.svg';
import { useNavigate } from 'react-router';

export default function Categories(){
    const navigate = useNavigate();
    
    return (<div class='categories'>
        <div class='category' onClick={() => navigate('/headphones')}>
            <img src={imageHeadphones}/>
            <div class='category-gap'/>
            <h1>Headphones</h1>
            <div class='shop'>
                SHOP
                <img src={iconArrow}/>
            </div>
        </div>
        <div class='category' onClick={() => navigate('/speakers')}>
            <img src={imageSpeakers}/>
            <div class='category-gap'/>
            <h1>Speakers</h1>
            <div class='shop'>
                SHOP
                <img src={iconArrow}/>
            </div>
        </div>
        <div class='category' onClick={() => navigate('/earphones')}>
            <img src={imageEarphones}/>
            <div class='category-gap'/>
            <h1>Earphones</h1>
            <div class='shop'>
                SHOP
                <img src={iconArrow}/>
            </div>
        </div>
    </div>)
}