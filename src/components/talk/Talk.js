import React from 'react';
import './Talk.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Talk = () => {
    return (
        <div className="talk">
            <div className="twitterfeed">
                <TwitterTimelineEmbed
                    className="twittertimeline"
                    sourceType="profile"
                    screenName="hawaii_eats"
                    options={{height: 500}}
                />
            </div>
            <div className="contact-form">
                <div className="name-input">
                    <label for="name">Your name</label><br />
                    <input type="text" id="name" name="name" />
                </div>
                <div className="email-input">
                    <label for="name">Your email</label><br />
                    <input type="text" id="name" name="name" />
                </div>
                <div className="message-input">
                    <label for="name">Message</label><br />
                    <input type="text" id="message" name="name" />
                </div>
                <div className="submit-button">
                    <input type="submit" id="submit" value="Send your message!" />
                </div>
            </div>
        </div>
    )
}

export default Talk;