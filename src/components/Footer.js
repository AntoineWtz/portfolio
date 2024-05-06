import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className='socials'>
                <a href='https://www.linkedin.com/in/antoine-wurtz/' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='https://github.com/AntoineWtz' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <p>© 2024 - AntnWtz</p>
        </footer>
    );
}

export default Footer;
