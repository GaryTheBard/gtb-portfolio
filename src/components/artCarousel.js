import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MonsterInTheTree from '../images/art/MonsterInTheTree.png';
import FishMan from '../images/art/IWishIwasAFish.png';
import SpaceMan from '../images/art/WaltzOfTheMelancholySpaceman.png'

function ArtCarousel() {
    return (
        <Carousel className="carousel">
            <div className="carousel-slide">
                <h3>Monster in the Tree</h3>
                <img src={MonsterInTheTree} alt="First slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <img src={FishMan} alt="Second slide" className="art-image" />
            </div>
            <div className="carousel-slide">
                <img src={SpaceMan} alt="Third slide" className="art-image" />
            </div>
        </Carousel>
    );
}

export default ArtCarousel;
