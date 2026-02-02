import Link from 'next/link';
import ServiceTiles from '../components/ServiceTiles';

export default function HomePage() {
    const phoneDisplay = '+48 123 456 789';
    const phoneHref = 'tel:+48123456789';
    const locationDisplay = 'Kraków, Małopolskie';
    const mapsHref =
        'https://www.google.com/maps/search/?api=1&query=Krak%C3%B3w%2C%20Ma%C5%82opolskie';

    return (
        <div className="bg-transparent">
            {/* Sharp, geometric background (no blobs) */}
            <div className="relative isolate overflow-hidden">
				<div aria-hidden className="pointer-events-none absolute inset-0 z-0">
					{/* subtle grid */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />

                        {/* green diagonal wedge */}
					<div
                        className="absolute -top-24 right-0 h-[44rem] w-[72%] bg-gradient-to-br from-primary to-secondary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
						style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)' }}
					/>
                    <div
                        className="absolute -top-24 right-0 h-[44rem] w-[72%] opacity-25"
                        style={{
                            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)',
                            background:
                                'linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 45%, rgba(0,0,0,0.20) 100%)',
                        }}
                    />

                    {/* yellow accent stripe */}
                    
				</div>

                {/* Hero */}
                <section className="relative z-10">
                    <div className="container mx-auto px-4 py-14 sm:py-20">
                        <div className="mx-auto max-w-5xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
                            <span className="font-semibold">24/7</span>
                                <span className="text-secondary/80">Szybka i profesjonalna pomoc na drodze</span>
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                            <span className="block text-neutral-50">Pomoc Drogowa</span>
                                <span className="block pb-2 sm:pb-3 bg-gradient-to-r from-secondary via-primary to-primary bg-clip-text text-transparent">
                                Skubisuu Racing &amp; Rent
                            </span>
                        </h1>

                        <p
                            className="mt-6 text-lg sm:text-xl font-semibold leading-relaxed max-w-3xl text-neutral-100"
                            style={{ textShadow: '0 3px 10px rgba(0,0,0,0.85)' }}
                        >
                            Potrzebujesz lawety? Masz awarię, stłuczkę lub potrzebujesz holowania? Pomoc Drogowa Skubisuu R&amp;R
                            to gwarancja szybkiej i skutecznej pomocy 24 godziny na dobę, 7 dni w tygodniu.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href={phoneHref}
                                className="btn-wow inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90"
                                aria-label={`Zadzwoń: ${phoneDisplay}`}
                            >
                                Zadzwoń teraz: {phoneDisplay}
                            </a>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-6 py-3 text-neutral-100 font-semibold hover:bg-neutral-900"
                            >
                                Poznaj naszą ofertę
                            </Link>
                        </div>

                        {/* Service area strip */}
                        <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm px-5 py-4 shadow-lg">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary" />
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <div className="text-sm text-neutral-400">Obszar działania</div>
                                    <div className="text-lg font-semibold text-neutral-100">{locationDisplay}</div>
                                </div>
                                <div className="flex flex-col sm:items-end">
                                    <div className="text-sm text-neutral-400">Przykładowy adres</div>
                                    <a
                                        href={mapsHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-semibold text-secondary hover:underline relative"
                                    >
                                        Kraków, Małopolskie → mapa
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
                                <div className="font-semibold text-neutral-100">Szybko</div>
                                <div className="text-neutral-300">Działamy sprawnie i bez stresu</div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-secondary" />
                                <div className="font-semibold text-neutral-100">Bezpiecznie</div>
                                <div className="text-neutral-300">Dbamy o Twój pojazd i spokój</div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                                <div className="font-semibold text-neutral-100">Profesjonalnie</div>
                                <div className="text-neutral-300">Doświadczenie + dobry sprzęt</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* Crisp section divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

                {/* Services */}
                <section className="relative z-10 container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-5 py-10 sm:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-50">Co możemy zrobić na miejscu?</h2>
                        <p className="mt-3 text-neutral-300 max-w-3xl">
                            Oferujemy holowanie samochodów osobowych, dostawczych oraz TIR, awaryjne uruchamianie pojazdów,
                            dowóz paliwa, wymianę koła na trasie, likwidację szkód komunikacyjnych oraz samochód zastępczy z OC sprawcy.
                        </p>

                        <ServiceTiles />

                        <div className="mt-10 rounded-2xl border border-secondary/30 bg-secondary/10 px-6 py-6">
                        <p className="text-neutral-200 text-lg leading-relaxed">
                            Działamy szybko i niezawodnie, dbając o bezpieczeństwo Twojego pojazdu. Nasze doświadczenie i
                            profesjonalny sprzęt pozwalają na sprawne rozwiązanie każdej sytuacji drogowej.
                        </p>
                        <div className="mt-4">
                                    <Link href="/contact" className="font-semibold text-secondary hover:underline">
                                Zadzwoń i uzyskaj pomoc →
                            </Link>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

            {/* Floating call button (mobile) */}
            <a
                href={phoneHref}
                className="md:hidden fixed bottom-5 right-5 z-50 rounded-full bg-primary text-white shadow-lg px-5 py-3 font-semibold btn-wow hover:bg-primary/90"
                aria-label={`Zadzwoń teraz: ${phoneDisplay}`}
            >
                Zadzwoń
            </a>
        </div>
    );
}