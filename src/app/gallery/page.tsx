import Link from 'next/link';
import React from 'react';
import GalleryGrid, { type GalleryImage } from '../../components/GalleryGrid';

const GalleryPage = () => {
	const images: GalleryImage[] = [
		{ src: 'images/gallery/1.webp', alt: 'Gallery photo 1' },
		{ src: 'images/gallery/2.webp', alt: 'Gallery photo 2' },
		{ src: 'images/gallery/3.webp', alt: 'Gallery photo 3' },
		{ src: 'images/gallery/4.webp', alt: 'Gallery photo 4' },
		{ src: 'images/gallery/5.webp', alt: 'Gallery photo 5' },
		{ src: 'images/gallery/6.webp', alt: 'Gallery photo 6' },
		{ src: 'images/gallery/7.webp', alt: 'Gallery photo 7' },
		{ src: 'images/gallery/8.webp', alt: 'Gallery photo 8' },
		{ src: 'images/gallery/9.webp', alt: 'Gallery photo 9' },
		{ src: 'images/gallery/10.webp', alt: 'Gallery photo 10' },
		{ src: 'images/gallery/12.webp', alt: 'Gallery photo 12' },
		{ src: 'images/gallery/13.webp', alt: 'Gallery photo 13' },
		{ src: 'images/gallery/14.webp', alt: 'Gallery photo 14' },
		{ src: 'images/gallery/15.webp', alt: 'Gallery photo 15' },
		{ src: 'images/gallery/16.webp', alt: 'Gallery photo 16' },
    ];

	// If you later add an 11.webp, just insert it after 10.webp.

    return (
		<div className="gallery-container">
			<div className="mx-auto max-w-5xl">
				<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
					<span className="font-semibold">Galeria</span>
					<span className="text-secondary/80">zobacz nasze realizacje</span>
				</div>

				<h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-2 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
					Nasza galeria
				</h1>
				<p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
					Witamy w naszej galerii, gdzie na bieżąco dodajemy fotki z naszych akcji!
				</p>
				<div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-5 py-6 shadow-sm">
					<div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div className="text-sm text-neutral-600">
							Kliknij zdjęcie, aby otworzyć podgląd.
						</div>
						<Link href="/contact" className="font-semibold text-primary hover:underline">
							Potrzebujesz pomocy? Skontaktuj się →
						</Link>
					</div>
					<div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-6" />
					<GalleryGrid images={images} />
				</div>
			</div>
		</div>
    );
};

export default GalleryPage;