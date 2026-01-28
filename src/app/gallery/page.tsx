import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    const images = [
        { src: '/images/gallery/sample-1.svg', alt: 'Galeria — zdjęcie 1' },
        { src: '/images/gallery/sample-2.svg', alt: 'Galeria — zdjęcie 2' },
        { src: '/images/gallery/sample-3.svg', alt: 'Galeria — zdjęcie 3' },
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-description">Explore our collection of images showcasing our work and events.</p>
            <div className="gallery-images">
                {images.map((img) => (
                    <div key={img.src} className="relative overflow-hidden rounded-md border border-yellow-200 bg-white">
                        <div className="relative aspect-[3/2]">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;