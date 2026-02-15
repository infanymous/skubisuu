import Image from 'next/image';
import type { Metadata } from 'next';
import { readdir } from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
    title: 'Galeria',
    description: 'Zdjęcia i realizacje Skubisuu Racing & Rent.',
};

type GalleryImage = {
    src: string;
    alt: string;
};

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

function toAltText(filename: string) {
    const base = filename.replace(path.extname(filename), '');
    return base.replace(/[-_]+/g, ' ').trim() || 'Zdjęcie z galerii';
}

function sortGalleryFilenames(a: string, b: string) {
    const aBase = a.replace(path.extname(a), '');
    const bBase = b.replace(path.extname(b), '');

    const aNum = Number.parseInt(aBase, 10);
    const bNum = Number.parseInt(bBase, 10);

    const aIsNum = Number.isFinite(aNum) && String(aNum) === aBase;
    const bIsNum = Number.isFinite(bNum) && String(bNum) === bBase;

    if (aIsNum && bIsNum) return aNum - bNum;
    if (aIsNum) return -1;
    if (bIsNum) return 1;

    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function getGalleryImages(): Promise<GalleryImage[]> {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    const entries = await readdir(galleryDir, { withFileTypes: true });

    const files = entries
        .filter((e) => e.isFile())
        .map((e) => e.name)
        .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
        .sort(sortGalleryFilenames);

    return files.map((name) => ({
        src: `/images/gallery/${name}`,
        alt: toAltText(name),
    }));
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <div className="gallery-container">
            <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
                    <span className="font-semibold">Galeria</span>
                    <span className="text-secondary/80">nasze realizacje</span>
                </div>

                <h1 className="gallery-title mt-6 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
                    Zobacz nasze realizacje
                </h1>

                <p className="gallery-description">
                    Kilka zdjęć z naszej pracy — holowanie, pomoc drogowa i transport.
                </p>

                {images.length === 0 ? (
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 text-neutral-300">
                        Brak zdjęć w folderze <span className="font-semibold">public/images/gallery</span>.
                    </div>
                ) : (
                    <div className="gallery-images">
                        {images.map((img) => (
                            <Image
                                key={img.src}
                                src={img.src}
                                alt={img.alt}
                                width={1200}
                                height={900}
                                className="w-full h-auto"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
