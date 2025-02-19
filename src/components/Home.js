import React, { useState, useEffect } from 'react';
import './home.css';
import logo from '../images/logo.jpg';
import albumsData from '../albums.json';
import Modal from './modal';
import ArtCarousel from './artCarousel'
import artData from '../art.json'
//import artData from '../artData.js'

const Home = () => {
    const artistName = 'Gary The Bard';
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
    <h2>{artistName}</h2>
    <p>
        Hi, I'm {artistName}, a multifaceted artist and software engineer with a passion for creating and exploring various forms of expression. 
        By day, I navigate corporate America as a Software Engineer, solving complex problems and building innovative solutions. 
        By night, I transform into my true artistic self, immersing myself in the world of art and creativity. 
        As an Art School Graduate and a Museum reject, I take pride in my unique journey and the unconventional path I've chosen.
    </p>
    <p>
        My love for music composition has led me to create six albums, each reflecting different stages of my artistic evolution. 
        From haunting melodies to groovy basslines, my music tells stories that words alone cannot capture.
        While Psychedelic Folk Rock remains my primary domain, I frequently weave in elements from various genres. 
        I've explored the realms of Country, Americana, Jazz, Classical, Hip-Hop, Metal, Hard Rock, and Pop, seamlessly blending diverse influences to create a rich tapestry of sound.
    </p>
    <p>
    In addition to my musical pursuits, I have ventured into the world of video game development. I've solo developed two games, with the first one being my senior project and the second coming shortly after, 
    as a means to further hone my skills. As the sole developer, I poured my artistic energy into every aspect of these games—crafting the graphics, creating assets, composing music, designing sound effects, and programming. 
    This immersive experience deepened my appreciation for the art of video game creation. Looking ahead, I aspire to develop a game of much greater depth and complexity than my previous projects in this captivating medium.
    </p>
    <p>
    Visual arts are another realm where I channel my creativity. I work with both physical and digital mediums. Over the years, I've painted more than 10 pieces using oil and acrylic, each one a testament to my evolving artistic journey. 
    Additionally, I've ventured into animation, transforming hand-drawn sketches into lively digital puppets. My exploration extends to 3D modeling, with several creations crafted in Blender and Maya. As a texture artist, I bring depth and detail to my models, adding the finishing touches that make them come alive.
    </p>
    <p>
    Professionally, I have worked in the pharmaceutical, manufacturing, fintech, and entertainment industries. I currently make a living as a full-stack software developer, predominantly experienced with Java, 
    Spring, JavaScript, React, C#, and SQL. This diverse background has equipped me with the skills to merge technology with art seamlessly. Whether it's creating custom tools for my projects or developing innovative solutions, I find joy in the intersection of these two worlds.
    </p>
    <p>
        Outside of my creative endeavors, I prioritize exercise and maintaining a healthy lifestyle. Physical activity helps me stay focused, energized, and ready to take on new challenges, both in my art and my professional life.
    </p>
</section>

            <section id="music" className="music-section">
                <h2>Music</h2>
                <div className="album-gallery">
                    {albums.map((album) => (
                        <div key={album.id} className="album-item" onClick={() => handleAlbumClick(album)}>
                            <img src={getAlbumCover(album.cover)} alt={album.title} className="album-cover" />
                        </div>
                    ))}
                </div>
                <Modal show={showModal} onClose={() => setShowModal(false)} album={selectedAlbum} />
            </section>
            <section id="art" className="art-section">
                <h2>Art</h2>
                <ArtCarousel artPieces={artData} />
            </section>
            <section id="games" className="games-section">
                <h2>Games</h2>
                <div className="game-iframe">
                <iframe frameborder="0" src="https://itch.io/embed/267687?bg_color=000000&amp;fg_color=ffffff&amp;link_color=a40706&amp;border_color=000000" width="552" height="167"><a href="https://garythebard.itch.io/half-empty">Half Empty by Gary The Bard</a></iframe>
                <iframe frameborder="0" src="https://itch.io/embed/262803?bg_color=000000&amp;fg_color=ffffff&amp;link_color=a40706&amp;border_color=000000" width="552" height="167"><a href="https://garythebard.itch.io/the-cartographers-tale">The Cartographer's Tale by Gary The Bard</a></iframe>
                </div>
            </section>
            <section id="contact" className="contact-section">
                <h2>Contact</h2>
                <p>Feel free to reach out to say hi or inquire about music composition, game development, programming, and any other creative collaborations.</p>
                <br></br>
                <p><a href="mailto:garythebard@gmail.com" class="email-link">Email Me</a></p>
            </section>
            <footer className="footer-section">
                <p>&copy; {new Date().getFullYear()} {artistName}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
