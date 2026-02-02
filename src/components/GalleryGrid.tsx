"use client";

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type GalleryImage = {
	src: string;
	alt: string;
};

type Props = {
	images: GalleryImage[];
};

export default function GalleryGrid({ images }: Props) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const isOpen = activeIndex !== null;
	const active = useMemo(() => (activeIndex === null ? null : images[activeIndex]), [activeIndex, images]);

	const close = useCallback(() => setActiveIndex(null), []);

	const prev = useCallback(() => {
		setActiveIndex((current) => {
			if (current === null) return current;
			return (current - 1 + images.length) % images.length;
		});
	}, [images.length]);

	const next = useCallback(() => {
		setActiveIndex((current) => {
			if (current === null) return current;
			return (current + 1) % images.length;
		});
	}, [images.length]);

	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};

		document.addEventListener('keydown', onKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [close, isOpen, next, prev]);

	return (
		<>
			<div className="gallery-images">
				{images.map((img, index) => (
					<button
						key={img.src}
						type="button"
						onClick={() => setActiveIndex(index)}
						className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-secondary/40"
						aria-label={`Open image ${index + 1} of ${images.length}`}
					>
						<div className="relative aspect-[4/3]">
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
							/>
						</div>
						<div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
					</button>
				))}
			</div>

			{isOpen && active ? (
				<div
					className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
					role="dialog"
					aria-modal="true"
					onMouseDown={(e) => {
						if (e.target === e.currentTarget) close();
					}}
				>
					<div className="absolute top-4 right-4 flex items-center gap-2">
						<button
							type="button"
							onClick={close}
							className="rounded-md border border-neutral-700 bg-neutral-950/70 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
						>
							Close
						</button>
					</div>

					<div className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:block">
						<button
							type="button"
							onClick={prev}
							className="rounded-md border border-neutral-700 bg-neutral-950/70 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
							aria-label="Previous image"
						>
							←
						</button>
					</div>

					<div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:block">
						<button
							type="button"
							onClick={next}
							className="rounded-md border border-neutral-700 bg-neutral-950/70 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
							aria-label="Next image"
						>
							→
						</button>
					</div>

					<div className="mx-auto flex h-full w-full items-center justify-center px-4 py-10">
						<div className="relative h-[82vh] w-[92vw] max-w-6xl">
							<Image
								src={active.src}
								alt={active.alt}
								fill
								sizes="92vw"
								className="object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
