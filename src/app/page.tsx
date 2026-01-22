import Link from 'next/link';
import ServiceTiles from '../components/ServiceTiles';

export default function HomePage() {
    const phoneDisplay = '+48 123 456 789';
    const phoneHref = 'tel:+48123456789';
    const locationDisplay = 'Kraków, Małopolskie';
    const mapsHref =
        'https://www.google.com/maps/search/?api=1&query=Krak%C3%B3w%2C%20Ma%C5%82opolskie';

    return (
        <div className="bg-white">
            {/* Shared background across hero + services (prevents hard cut) */}
            <div className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-red-500/50 blur-2xl mix-blend-multiply" />
                    <div className="absolute top-20 -right-40 h-[32rem] w-[32rem] rounded-full bg-yellow-400/55 blur-2xl mix-blend-multiply" />
                    <div className="absolute -bottom-56 left-1/3 h-[36rem] w-[36rem] rounded-full bg-red-600/30 blur-3xl mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:18px_18px]" />
                </div>

                {/* Hero */}
                <section className="relative z-10">
                    <div className="container mx-auto px-4 py-14 sm:py-20">
                        <div className="mx-auto max-w-5xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm text-red-700">
                            <span className="font-semibold">24/7</span>
                            <span className="text-red-700/80">Szybka i profesjonalna pomoc na drodze</span>
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                            <span className="block text-gray-900">Pomoc Drogowa</span>
                            <span className="block bg-gradient-to-r from-red-600 via-red-600 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                                Skubisuu R&amp;R
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl">
                            Potrzebujesz lawety? Masz awarię, stłuczkę lub potrzebujesz holowania? Pomoc Drogowa Skubisuu R&amp;R
                             to gwarancja szybkiej i skutecznej pomocy 24 godziny na dobę, 7 dni w tygodniu.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href={phoneHref}
                                className="btn-wow inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700"
                                aria-label={`Zadzwoń: ${phoneDisplay}`}
                            >
                                Zadzwoń teraz: {phoneDisplay}
                            </a>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-900 font-semibold hover:bg-gray-50"
                            >
                                Poznaj naszą ofertę
                            </Link>
                        </div>

                        {/* Service area strip */}
                        <div className="mt-8 relative overflow-hidden rounded-2xl border border-yellow-200/70 bg-white/85 backdrop-blur-sm px-5 py-4 shadow-lg">
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-2xl" />
                                <div className="absolute -right-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-red-500/25 blur-2xl" />
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <div className="text-sm text-gray-600">Obszar działania</div>
                                    <div className="text-lg font-semibold text-gray-900">{locationDisplay}</div>
                                </div>
                                <div className="flex flex-col sm:items-end">
                                    <div className="text-sm text-gray-600">Przykładowy adres</div>
                                    <a
                                        href={mapsHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-semibold text-red-700 hover:underline relative"
                                    >
                                        Kraków, Małopolskie → mapa
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div className="relative overflow-hidden rounded-xl border border-red-100 bg-white/85 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-red-500/20 blur-2xl" />
                                </div>
                                <div className="font-semibold text-gray-900">Szybko</div>
                                <div className="text-gray-600">Działamy sprawnie i bez stresu</div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl border border-yellow-100 bg-white/85 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/25 blur-2xl" />
                                </div>
                                <div className="font-semibold text-gray-900">Bezpiecznie</div>
                                <div className="text-gray-600">Dbamy o Twój pojazd i spokój</div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/85 backdrop-blur-sm px-4 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute left-1/2 -bottom-10 h-24 w-24 -translate-x-1/2 rounded-full bg-red-500/15 blur-2xl" />
                                </div>
                                <div className="font-semibold text-gray-900">Profesjonalnie</div>
                                <div className="text-gray-600">Doświadczenie + dobry sprzęt</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* Soft fade into next content */}
                <div className="pointer-events-none h-10 bg-gradient-to-b from-transparent to-white" />

                {/* Services */}
                <section className="relative z-10 container mx-auto px-4 pb-12 sm:pb-16">
                    <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-10 sm:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Co możemy zrobić na miejscu?</h2>
                        <p className="mt-3 text-gray-700 max-w-3xl">
                            Oferujemy holowanie samochodów osobowych, dostawczych oraz TIR, awaryjne uruchamianie pojazdów,
                            dowóz paliwa, wymianę koła na trasie, likwidację szkód komunikacyjnych oraz samochód zastępczy z OC sprawcy.
                        </p>

                        <ServiceTiles />

                    <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50/90 px-6 py-6">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Działamy szybko i niezawodnie, dbając o bezpieczeństwo Twojego pojazdu. Nasze doświadczenie i
                            profesjonalny sprzęt pozwalają na sprawne rozwiązanie każdej sytuacji drogowej.
                        </p>
                        <div className="mt-4">
                            <Link href="/contact" className="font-semibold text-red-700 hover:underline">
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
                className="md:hidden fixed bottom-5 right-5 z-50 rounded-full bg-red-600 text-white shadow-lg px-5 py-3 font-semibold btn-wow"
                aria-label={`Zadzwoń teraz: ${phoneDisplay}`}
            >
                Zadzwoń
            </a>
        </div>
    );
}