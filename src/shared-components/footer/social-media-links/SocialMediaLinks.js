import iconFacebook from './assets/icon-facebook.svg';
import iconTwitter from './assets/icon-twitter.svg';
import iconInstagram from './assets/icon-instagram.svg';

import './assets/social-media-links.css';

export default function SocialMediaLinks(){
    return (
        <div className='social-media-links'>
            <a href='https://www.facebook.com/acdavit'><img
                src={iconFacebook}
                alt='Facebook'
                className='social-icon'
                style={{marginLeft: 0}}
            /></a>
            <a href='https://twitter.com/acdavid29'><img
                src={iconTwitter}
                alt='Twitter'
                className='social-icon'
            /></a>
            <a href='https://www.instagram.com/acdavyd/'><img
                src={iconInstagram}
                alt='Instagram'
                className='social-icon'
                style={{marginRight: 0}}
            /></a>
        </div>
    )
}