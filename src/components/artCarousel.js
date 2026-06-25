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
        <Carousel className="carousel" showThumbs={false}>
            <div className="carousel-slide">
                <h3>Vagrant Lyre Girl</h3>
                <img src={VagrantLyreGirl} alt="Vagrant Lyre Girl artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>Monster in the Tree</h3>
                <img src={MonsterInTheTree} alt="Monster in the Tree artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>Poke You</h3>
                <img src={VoodooDoll} alt="Poke You artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>I Wish I was a Fish</h3>
                <img src={FishMan} alt="I Wish I was a Fish artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>Wake Up America</h3>
                <img src={WakeUpAmerica} alt="Wake Up America artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>Waltz Of The Melancholy Spaceman</h3>
                <img src={SpaceMan} alt="Waltz Of The Melancholy Spaceman artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
            <div className="carousel-slide">
                <h3>Do It Again</h3>
                <img src={DoItAgain} alt="Do It Again artwork" className="art-image" loading="lazy" decoding="async" />
            </div>
        </Carousel>
    );
}

export default ArtCarousel;
