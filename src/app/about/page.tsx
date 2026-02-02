import Link from 'next/link';

const AboutPage = () => {
    const phoneDisplay = '+48 123 456 789';
    const phoneHref = 'tel:+48123456789';

    return (
        <div className="about-page">
            <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
                    <span className="font-semibold">O nas</span>
                    <span className="text-secondary/80">poznaj Skubisuu Racing &amp; Rent</span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-2 bg-gradient-to-r from-secondary via-primary to-primary bg-clip-text text-transparent">
                    Kim jesteśmy?
                </h1>
                <p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
                    Szybka pomoc drogowa, holowanie i wsparcie po kolizji — 24/7.
                </p>

                <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                    <div className="space-y-4 text-neutral-300 leading-relaxed">
                        <p>
                            Welcome to our company! We are dedicated to providing the best services to our clients.
                        </p>
                        <p>
                            Our team is composed of experienced professionals who are passionate about their work.
                        </p>
                        <p>
                            We believe in innovation, quality, and customer satisfaction.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href={phoneHref}
                            className="btn-wow inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90"
                            aria-label={`Zadzwoń: ${phoneDisplay}`}
                        >
                            Zadzwoń teraz: {phoneDisplay}
                        </a>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-6 py-3 text-neutral-100 font-semibold hover:bg-neutral-800"
                        >
                            Zobacz realizacje
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;