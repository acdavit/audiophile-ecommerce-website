import Navigation from '../navigation/Navigation';
import logo from '../shared-assets/logo.svg';
import SocialMediaLinks from './social-media-links/SocialMediaLinks';

import './assets/footer.css'

export default function Footer(){
    return (
        <footer>
            <div id='footer-content'>
                <div id='orange-line'></div>
                
                <div id='logo-and-navigation'>
                    <img src={logo} alt='audiophile' id='logo-footer'/>
                    <Navigation />
                </div>
                
                <div id='description-and-socials'>
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <div id='description-socials'>
                        <SocialMediaLinks />
                    </div>
                    
                </div>
                
                
                <div id='copyright-and-socials'>
                    <h2>Copyright 2021. All Rights Reserved</h2>
                    <SocialMediaLinks />
                </div>
                
            </div>
        </footer>
    )
}