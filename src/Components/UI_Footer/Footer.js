import React from 'react';
import { FooterSocialItem } from './FooterSocialItem';

export const Footer = () => {
    const socialMedia = [
        {path: 'fab fa-facebook-f', enlace: 'https://www.facebook.com/Social-Academy-100105982404254'},
        {path: 'fab fa-twitter', enlace: 'https://twitter.com/SocialAcademyNi'},
        {path: 'fab fa-instagram', enlace: 'https://www.instagram.com/_socialacademy/'},
        {path: 'fab fa-youtube', enlace: 'https://www.youtube.com/channel/UC97UE9cK8nNr0HzJ2MOz5Rw'}
    ];
    
    return (
        <footer>
            <img
            className = "footer__Logo"
            src = {`./assets/Logos/LogoLetrasBlancas.png`}
            alt = "Social Academy"/>
            <div className = "SocialBar flex-row">
                {
                    socialMedia.map((media, index) =>(
                        <FooterSocialItem
                        key = {index}
                        path = {media.path}
                        enlace = {media.enlace}/>
                    ))
                }
            </div>

            <h1>
                Social Academy © 2021 All rights reserved
                
            </h1>
        </footer>
    )
}
