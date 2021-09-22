import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedIn} from '@fortawesome/free-brands-svg-icons';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Prathmesh Singh</span>
                </h1>
                <p className="h-sub-text">
                    UnderGrad in the field of Information technology Engineering and currently working as MERN Stack Developer.
                    Passionate about Backend scripting and Database Management and have worked on several projects.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        {/* <FontAwesomeIcon icon={faLinkedIn} className="icon li" /> */}
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
