import React from 'react';
import './Welcome.css';
import welcome from './welcome.jpg';
import { TwitterFollowButton } from 'react-twitter-embed';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-text">
                <span className="welcome-title">Aloha</span>
                <br />
                <span className="welcome-message">
                    This is Hawai`i Eats Sustainable, a local organization creating a movement to change the food landscape of Hawai`i.
                </span>
                <div className="followbutton">
                    <TwitterFollowButton
                        screenName={'hawaii_eats'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Welcome;