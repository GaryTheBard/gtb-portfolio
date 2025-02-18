import React from 'react';
import './modal.css';
import spotifyLogo from '../images/logos/spotify.png';
import appleLogo from '../images/logos/apple.png';
import amazonLogo from '../images/logos/amazon2.png';
import youtubeLogo from '../images/logos/youtube1.png';

const Modal = ({ show, onClose, album }) => {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        // Check if the click is on the overlay and not on the content
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <img src={require(`../${album.cover}`)} alt={album.title} className="modal-cover" />
                <ul className="modal-links">
                    {album.links.spotify && (
                        <li>
                            <a href={album.links.spotify} target="_blank" rel="noopener noreferrer">
                                <img src={spotifyLogo} alt="Spotify" />
                            </a>
                        </li>
                    )}
                    {album.links.appleMusic && (
                        <li>
                            <a href={album.links.appleMusic} target="_blank" rel="noopener noreferrer">
                                <img src={appleLogo} alt="Apple Music" />
                            </a>
                        </li>
                    )}
                    {album.links.amazonMusic && (
                        <li>
                            <a href={album.links.amazonMusic} target="_blank" rel="noopener noreferrer">
                                <img src={amazonLogo} alt="Amazon Music" />
                            </a>
                        </li>
                    )}
                    {album.links.youtubeMusic && (
                        <li>
                            <a href={album.links.youtubeMusic} target="_blank" rel="noopener noreferrer">
                                <img src={youtubeLogo} alt="YouTube Music" />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
