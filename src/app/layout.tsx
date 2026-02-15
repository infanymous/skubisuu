import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

import type { Metadata, Viewport } from 'next';

const DEFAULT_SITE_URL = 'https://infanymous.github.io/skubisuu';

function getSiteUrl() {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (raw) {
        try {
            return new URL(raw);
        } catch {
            // fall back
        }
    }
    return new URL(DEFAULT_SITE_URL);
}

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    metadataBase: SITE_URL,
    title: {
        default: 'Skubisuu Racing & Rent',
        template: '%s | Skubisuu Racing & Rent',
    },
    description:
        'Pomoc drogowa 24/7, holowanie oraz wynajem lawet. Sławków, Bolesław, Bukowno, Klucze, Olkusz, Dąbrowa Górnicza i okolice.',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'Skubisuu Racing & Rent',
        description:
            'Pomoc drogowa 24/7, holowanie oraz wynajem lawet. Szybko • bezpiecznie • profesjonalnie.',
        images: [
            {
                url: '/images/brand/logo2.png',
                width: 520,
                height: 520,
                alt: 'Skubisuu Racing & Rent',
            },
        ],
        locale: 'pl_PL',
    },
    twitter: {
        card: 'summary',
        title: 'Skubisuu Racing & Rent',
        description:
            'Pomoc drogowa 24/7, holowanie oraz wynajem lawet. Szybko • bezpiecznie • profesjonalnie.',
        images: ['/images/brand/logo2.png'],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a0a0a',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TowingService',
        name: 'Skubisuu Racing & Rent',
        url: SITE_URL.toString(),
        telephone: '+48606885604',
        image: new URL('/images/brand/logo2.png', SITE_URL).toString(),
        areaServed: [
            'Sławków',
            'Bolesław',
            'Bukowno',
            'Klucze',
            'Olkusz',
            'Dąbrowa Górnicza',
        ],
        serviceType: ['Pomoc drogowa', 'Holowanie', 'Wynajem lawet'],
    };

    return (
        <html lang="pl">
            <body className="min-h-screen flex flex-col">
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}