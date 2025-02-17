import React from 'react';
import './home.css';
import logo from '../images/logo.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <img src={logo} alt="[Artist Name] Logo" className="logo" />
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#music">Music</a></li>
                        <li><a href="#art">Art</a></li>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <p>Hi, I'm [Artist Name], a passionate musician dedicated to creating inspiring music. Stay tuned for my latest updates and releases.</p>
            </section>
            <section id="music" className="music-section">
                <h2>My Music</h2>
                <div className="music-gallery">
                    <div className="music-item">Track 1</div>
                    <div className="music-item">Track 2</div>
                    <div className="music-item">Track 3</div>
                </div>
            </section>
            <section id="art" className="art-section">
                <h2>My Art</h2>
                <p>Explore my artistic creations and visual artworks.</p>
            </section>
            <section id="games" className="games-section">
                <h2>My Games</h2>
                <p>Discover the games I've developed and collaborated on.</p>
            </section>
            <section id="contact" className="contact-section">
                <h2>Contact</h2>
                <p>Feel free to reach out for collaborations, events, or just to say hi!</p>
                <p>Email: contact@myemail.com</p>
            </section>
            <footer className="footer-section">
                <p>&copy; {new Date().getFullYear()} [Artist Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
