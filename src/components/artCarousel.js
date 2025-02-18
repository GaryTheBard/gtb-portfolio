import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MonsterInTheTree from '../images/art/MonsterInTheTree.png';
import FishMan from '../images/art/IWishIwasAFish.png';
import SpaceMan from '../images/art/WaltzOfTheMelancholySpaceman.png'
import VoodooDoll from '../images/art/VoodooDoll.jpg'
import VagrantLyreGirl from '../images/art/VagrantLyreGirl.png'
import WakeUpAmerica from '../images/art/WakeUpAmerica.png'
import DoItAgain from '../images/art/DoItAgain.png'

function ArtCarousel() {
    return (
        <Carousel className="carousel">
            <div className="carousel-slide">
                <h3>Vagrant Lyre Girl</h3>
                <img src={VagrantLyreGirl} alt="First slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>Monster in the Tree</h3>
                <img src={MonsterInTheTree} alt="First slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>Poke You</h3>
                <img src={VoodooDoll} alt="First slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>I Wish I was a Fish</h3>
                <img src={FishMan} alt="Second slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>Wake Up America</h3>
                <img src={WakeUpAmerica} alt="Third slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>Waltz Of The Melancholy Spaceman</h3>
                <img src={SpaceMan} alt="Third slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <h3>Do It Again</h3>
                <img src={DoItAgain} alt="Third slide" className="art-image" />
            </div>
        </Carousel>
    );
}

export default ArtCarousel;
