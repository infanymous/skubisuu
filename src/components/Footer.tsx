import Link from 'next/link';

const Footer: React.FC = () => {
	const phoneDisplay = '+48 123 456 789';
	const phoneHref = 'tel:+48123456789';
	const locationDisplay = 'Kraków, Małopolskie';
	const mapsHref =
		'https://www.google.com/maps/search/?api=1&query=Krak%C3%B3w%2C%20Ma%C5%82opolskie';

    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="text-lg font-semibold text-neutral-100">Pomoc Drogowa Skubisuu R&amp;R</div>
                        <div className="mt-2 text-neutral-300">24/7 • {locationDisplay}</div>
                        <div className="mt-3 flex flex-wrap gap-3">
                            <a href={phoneHref} className="font-semibold text-secondary hover:underline">
                                {phoneDisplay}
                            </a>
                            <a href={mapsHref} target="_blank" rel="noreferrer" className="text-neutral-300 hover:underline">
                                Mapa →
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div>
                            <div className="text-sm font-semibold text-neutral-100">Nawigacja</div>
                            <ul className="mt-3 space-y-2 text-neutral-300">
                                <li><Link className="hover:text-secondary" href="/">Home</Link></li>
                                <li><Link className="hover:text-secondary" href="/about">About</Link></li>
                                <li><Link className="hover:text-secondary" href="/gallery">Gallery</Link></li>
                                <li><Link className="hover:text-secondary" href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-neutral-800 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                    <div>© {new Date().getFullYear()} Skubisuu R&amp;R. Wszelkie prawa zastrzeżone.</div>
                    <div className="text-neutral-500">Szybko • Bezpiecznie • Profesjonalnie</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;