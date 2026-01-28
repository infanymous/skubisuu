import React from 'react';
import GalleryGrid, { type GalleryImage } from '../../components/GalleryGrid';

const GalleryPage = () => {
	const images: GalleryImage[] = [
		{ src: '/images/gallery/1.webp', alt: 'Gallery photo 1' },
		{ src: '/images/gallery/2.webp', alt: 'Gallery photo 2' },
		{ src: '/images/gallery/3.webp', alt: 'Gallery photo 3' },
		{ src: '/images/gallery/4.webp', alt: 'Gallery photo 4' },
		{ src: '/images/gallery/5.webp', alt: 'Gallery photo 5' },
		{ src: '/images/gallery/6.webp', alt: 'Gallery photo 6' },
		{ src: '/images/gallery/7.webp', alt: 'Gallery photo 7' },
		{ src: '/images/gallery/8.webp', alt: 'Gallery photo 8' },
		{ src: '/images/gallery/9.webp', alt: 'Gallery photo 9' },
		{ src: '/images/gallery/10.webp', alt: 'Gallery photo 10' },
		{ src: '/images/gallery/12.webp', alt: 'Gallery photo 12' },
		{ src: '/images/gallery/13.webp', alt: 'Gallery photo 13' },
		{ src: '/images/gallery/14.webp', alt: 'Gallery photo 14' },
		{ src: '/images/gallery/15.webp', alt: 'Gallery photo 15' },
		{ src: '/images/gallery/16.webp', alt: 'Gallery photo 16' },
    ];

	// If you later add an 11.webp, just insert it after 10.webp.

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-description">Explore our collection of images showcasing our work and events.</p>
			<GalleryGrid images={images} />
        </div>
    );
};

export default GalleryPage;