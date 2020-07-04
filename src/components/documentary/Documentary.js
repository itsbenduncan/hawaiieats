import React from 'react';
import './Documentary.css';
// import soil from './soil.jpg';

const Documentary = () => {
    return (
        <div className="documentary">
            <div className="coming-soon">
                <div className="soil">
                    <div className="layer">Coming Soon!</div>
                    </div>
            </div>
            <div className="synopsis">
                <span>
                    Where does your dinner come from? A simple question, that leads to a complex and controversial topic.
                    Now ask yourself, where does the dinner come from for the most isolated island chain in the world.
                    <br /><br />
                    <span id="italic">Hawai`i Eats Sustainable</span> takes an in-depth look at the food landscape of Hawai`i.
                    From the history of Hawaiian agricultural practices to the shipping industry that provides for the islands today.
                    Starting on a local scale, we explore current farming practices, policies, and educational programs.
                    How does this industry stand today? How can Hawai`i start to move the needle on the over 90% importation of their foods?
                    <br /><br />
                    We then take the conversation to a larger scale. Through identifying and detailing sustainable food practices and resources that
                    are available, we hope to provide education for the consumer. Empowering yourself to be a concious consumer can
                    provide first steps to eating more sustainable. 
                </span>
            </div>
        </div>
    )
}

export default Documentary;