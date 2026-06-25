import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
import spotifyLogo from '../images/logos/spotify.png';
import appleLogo from '../images/logos/apple.png';
import amazonLogo from '../images/logos/amazon2.png';
import youtubeLogo from '../images/logos/youtube1.png';

const Modal = ({ show, onClose, album }) => {
    useEffect(() => {
        if (!show) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose, show]);

    if (!show || typeof document === 'undefined') return null;

    const platforms = [
        {
            key: 'spotify',
            label: 'Spotify',
            href: album.links?.spotify,
            logo: spotifyLogo
        },
        {
            key: 'appleMusic',
            label: 'Apple Music',
            href: album.links?.appleMusic,
            logo: appleLogo
        },
        {
            key: 'amazonMusic',
            label: 'Amazon Music',
            href: album.links?.amazonMusic,
            logo: amazonLogo
        },
        {
            key: 'youtubeMusic',
            label: 'YouTube Music',
            href: album.links?.youtubeMusic,
            logo: youtubeLogo
        }
    ].filter((platform) => Boolean(platform.href));

    const handleOverlayClick = (e) => {
        // Check if the click is on the overlay and not on the content
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="album-modal-title">
                <button type="button" className="modal-close" onClick={onClose} aria-label="Close album modal">
                    &times;
                </button>
                <p className="modal-kicker">Selected Release</p>
                <h3 className="modal-title" id="album-modal-title">{album.title}</h3>
                {album.year && <p className="modal-year">{album.year}</p>}
                <img src={require(`../${album.cover}`)} alt={album.title} className="modal-cover" />
                {album.description && <p className="modal-description">{album.description}</p>}
                <p className="modal-subtitle">Stream on</p>
                {platforms.length > 0 ? (
                    <ul className="modal-links">
                        {platforms.map((platform) => (
                            <li key={platform.key}>
                                <a href={platform.href} target="_blank" rel="noopener noreferrer" className="modal-link-pill">
                                    <img src={platform.logo} alt={platform.label} />
                                    <span>{platform.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="modal-empty-state">Streaming links are coming soon for this release.</p>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
