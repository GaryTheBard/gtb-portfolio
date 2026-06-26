import React, { useState, useEffect } from 'react';
import './home.css';
import logo from '../images/garythebardlogo.png';
import albumsData from '../albums.json';
import Modal from './modal';
import ArtCarousel from './artCarousel';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'video', label: 'Videos' },
    { id: 'music', label: 'Music' },
    { id: 'art', label: 'Art' },
    { id: 'games', label: 'Games' },
    { id: 'contact', label: 'Contact' }
];

const Home = () => {
    const artistName = 'Gary The Bard';
    const tagline = 'Musician, Visual Artist, and Game Creator';
    const featuredVideos = [
        {
            id: 'VJ5e5_BO9lY',
            title: 'Green Skies & Blue Grass',
            youtubeUrl: 'https://www.youtube.com/watch?v=VJ5e5_BO9lY&list=RDVJ5e5_BO9lY&start_radio=1'
        },
        {
            id: '2BFQynbyosc',
            title: 'Dreams',
            youtubeUrl: 'https://www.youtube.com/watch?v=2BFQynbyosc&list=RD2BFQynbyosc&start_radio=1'
        },
        {
            id: 'b9pU9sDJfkA',
            title: 'For You Live 2013',
            youtubeUrl: 'https://www.youtube.com/watch?v=b9pU9sDJfkA'
        },
        {
            id: 'a3I5TpR2aoY',
            title: 'Vagrant Lyre Girl',
            youtubeUrl: 'https://www.youtube.com/watch?v=a3I5TpR2aoY&list=RDa3I5TpR2aoY&start_radio=1'
        }
    ];
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sortedAlbums = [...albumsData].sort((a, b) => {
            const yearA = Number.parseInt(a.year, 10) || 0;
            const yearB = Number.parseInt(b.year, 10) || 0;

            if (yearA !== yearB) {
                return yearB - yearA;
            }

            return (b.id || 0) - (a.id || 0);
        });
        setAlbums(sortedAlbums);
    }, []);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries[0]) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: '-35% 0px -55% 0px',
                threshold: [0.15, 0.35, 0.6]
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px'
            }
        );

        revealElements.forEach((element) => revealObserver.observe(element));
        return () => revealObserver.disconnect();
    }, []);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
        setShowModal(true);
    };

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const showPreviousVideo = () => {
        setActiveVideoIndex((currentIndex) => {
            if (currentIndex === 0) {
                return featuredVideos.length - 1;
            }
            return currentIndex - 1;
        });
    };

    const showNextVideo = () => {
        setActiveVideoIndex((currentIndex) => (currentIndex + 1) % featuredVideos.length);
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
                <div className="hero-overlay" />
                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="primary-navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div className="logo-shell">
                    <img src={logo} alt={`${artistName} logo`} className="logo" />
                </div>
                <p className="hero-tagline">{tagline}</p>
                <nav className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`} id="primary-navigation">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={handleNavClick}
                                    className={activeSection === item.id ? 'nav-link-active' : ''}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <section id="about" className="about-section reveal-on-scroll">
                <h2>{artistName}</h2>
                <p className="section-intro">
                    I build immersive creative work across music, visual art, and interactive media.
                </p>
                <div className="about-grid">
                    <article className="about-card">
                        <h3>Musician</h3>
                        <p>
                            I have released seven albums and continue to blend psychedelic folk rock with country,
                            jazz, classical, hip-hop, metal, and pop influences.
                        </p>
                    </article>
                    <article className="about-card">
                        <h3>Visual Artist</h3>
                        <p>
                            My visual practice spans oil and acrylic painting, digital animation, and 3D work in
                            Blender and Maya, with a strong focus on storytelling and texture.
                        </p>
                    </article>
                    <article className="about-card">
                        <h3>Game Creator</h3>
                        <p>
                            I have solo-built two games, handling everything from code and design to music, assets,
                            and sound to craft cohesive player experiences.
                        </p>
                    </article>
                    <article className="about-card">
                        <h3>Engineer</h3>
                        <p>
                            I work professionally as a full-stack developer and bring my artist perspective into
                            systems work, shaping ideas into polished, end-to-end experiences.
                        </p>
                    </article>
                </div>
            </section>

            <section id="video" className="video-section reveal-on-scroll">
                <h2>Featured Video</h2>
                <p className="section-intro">
                    A rotating reel from the Gary The Bard YouTube channel.
                </p>
                <div className="video-frame-wrapper">
                    <iframe
                        className="featured-video-iframe"
                        src={`https://www.youtube.com/embed/${featuredVideos[activeVideoIndex].id}`}
                        title={featuredVideos[activeVideoIndex].title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="video-controls">
                    <button type="button" className="video-nav-button" onClick={showPreviousVideo} aria-label="Previous video">
                        Previous
                    </button>
                    <button type="button" className="video-nav-button" onClick={showNextVideo} aria-label="Next video">
                        Next
                    </button>
                </div>
                <div className="video-playlist">
                    {featuredVideos.map((video, index) => (
                        <button
                            key={video.id}
                            type="button"
                            className={`video-pill ${index === activeVideoIndex ? 'video-pill-active' : ''}`}
                            onClick={() => setActiveVideoIndex(index)}
                            aria-label={`Play ${video.title}`}
                        >
                            {video.title}
                        </button>
                    ))}
                </div>
                <p className="video-source-link">
                    <a href={featuredVideos[activeVideoIndex].youtubeUrl} target="_blank" rel="noopener noreferrer">
                        Watch this video on YouTube
                    </a>
                </p>
            </section>

            <section id="music" className="music-section reveal-on-scroll">
                <h2>Music</h2>
                <div className="album-gallery">
                    {albums.map((album) => (
                        <button key={album.id} type="button" className="album-item" onClick={() => handleAlbumClick(album)}>
                            <img
                                src={getAlbumCover(album.cover)}
                                alt={album.title}
                                className="album-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </button>
                    ))}
                </div>
                <Modal show={showModal} onClose={() => setShowModal(false)} album={selectedAlbum} />
            </section>
            <section id="art" className="art-section reveal-on-scroll">
                <h2>Art</h2>
                <p className="section-intro">A selection of original pieces across traditional and digital mediums.</p>
                <ArtCarousel />
            </section>
            <section id="games" className="games-section reveal-on-scroll">
                <h2>Games</h2>
                <p className="section-intro">Two solo-developed projects featuring original music, visuals, and code.</p>
                <div className="game-iframe">
                    <iframe
                        title="Half Empty by Gary The Bard"
                        frameBorder="0"
                        src="https://itch.io/embed/267687?bg_color=000000&amp;fg_color=ffffff&amp;link_color=a40706&amp;border_color=000000"
                        width="552"
                        height="167"
                    >
                        <a href="https://garythebard.itch.io/half-empty">Half Empty by Gary The Bard</a>
                    </iframe>
                    <iframe
                        title="The Cartographer's Tale by Gary The Bard"
                        frameBorder="0"
                        src="https://itch.io/embed/262803?bg_color=000000&amp;fg_color=ffffff&amp;link_color=a40706&amp;border_color=000000"
                        width="552"
                        height="167"
                    >
                        <a href="https://garythebard.itch.io/the-cartographers-tale">The Cartographer&apos;s Tale by Gary The Bard</a>
                    </iframe>
                </div>
            </section>
            <section id="contact" className="contact-section reveal-on-scroll">
                <h2>Contact</h2>
                <p>
                    Reach out for music composition, visual collaborations, game audio, or creative technology work.
                </p>
                <p><a href="mailto:garythebard@gmail.com" className="email-link">garythebard@gmail.com</a></p>
            </section>
            <footer className="footer-section">
                <p>&copy; {new Date().getFullYear()} {artistName}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
