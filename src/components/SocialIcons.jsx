import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "../styles/components/socialicons.scss";

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <span><SocialIcon url="https://twitter.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Twitter" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="https://medium.com/@jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Medium" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="https://github.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on GitHub" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="https://instagram.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Instagram" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="https://linkedin.com/in/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on LinkedIn" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="https://facebook.com/harrodjayden" rel="noopener noreferrer" aria-label="Jayden on Facebook" style={{ height: 18, width: 18 }} color="black" /></span>
            <span><SocialIcon url="mailto:harrod.jayden@gmail.com" rel="noopener noreferrer" aria-label="Contact Jayden via Email" style={{ height: 18, width: 18 }} color="black" /></span>
        </div>
    )
}

export default SocialIcons;
