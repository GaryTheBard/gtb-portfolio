import React, { useState, useEffect } from 'react';
import './home.css';
import logo from '../images/logo.jpg';
import albumsData from '../albums.json';
import Modal from './modal';
import ArtCarousel from './artCarousel'
import artData from '../art.json'
//import artData from '../artData.js'

const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setAlbums(albumsData);
    }, []);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
        setShowModal(true);
    };

    const getAlbumCover = (cover) => {
        try {
            return require(`../${cover}`);
        } catch (err) {
            console.error("Image not found:", cover);
            return null;
        }
    };

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
                <p>Hi, I'm Gary The Bard and I like to make things. <br></br>By day, I embody the life of a corprate America Software Engineer, by night my true form emerges and art flows out of me. <br></br>Art School Graduate, Museum reject.</p>
            </section>
            <section id="music" className="music-section">
                <h2>My Music</h2>
                <div className="album-gallery">
                    {albums.map((album) => (
                        <div key={album.id} className="album-item" onClick={() => handleAlbumClick(album)}>
                            <img src={getAlbumCover(album.cover)} alt={album.title} className="album-cover" />
                            <p>{album.title}</p>
                        </div>
                    ))}
                </div>
                <Modal show={showModal} onClose={() => setShowModal(false)} album={selectedAlbum} />
            </section>
            <section id="art" className="art-section">
                <h2>My Art</h2>
                <ArtCarousel artPieces={artData} />
            </section>
            <section id="games" className="games-section">
                <h2>My Games</h2>
                <div className="game-iframe">
                    <iframe frameborder="0" src="https://itch.io/embed/267687" width="552" height="167">
                        <a href="https://garythebard.itch.io/half-empty">Half Empty by Gary The Bard</a>
                    </iframe>
                    <iframe frameborder="0" src="https://itch.io/embed/262803" width="552" height="167">
                        <a href="https://garythebard.itch.io/the-cartographers-tale">The Cartographer's Tale by Gary The Bard</a>
                    </iframe>
                </div>
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
