import React from 'react';

const ContactPage = () => {
    const phoneDisplay = '+48 123 456 789';
    const phoneHref = 'tel:+48123456789';
    const locationDisplay = 'Kraków, Małopolskie';
    const mapsHref =
        'https://www.google.com/maps/search/?api=1&query=Krak%C3%B3w%2C%20Ma%C5%82opolskie';

    return (
        <div className="contact-page">
            <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
                    <span className="font-semibold">Kontakt</span>
                    <span className="text-secondary/80">jesteśmy dostępni 24/7</span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-2 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
                    Skontaktuj się z nami
                </h1>
                <p className="mt-4 text-lg font-semibold text-neutral-700 max-w-3xl">
                    Jeśli masz pytania lub potrzebujesz pomocy na drodze — zadzwoń. Odpowiadamy szybko.
                </p>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                        <form>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                        <div className="text-sm font-semibold text-neutral-900">Dane kontaktowe</div>
                        <div className="mt-4 space-y-3 text-neutral-700">
                            <div>
                                <div className="text-xs text-neutral-500">Telefon</div>
                                <a className="font-semibold text-primary hover:underline" href={phoneHref}>
                                    {phoneDisplay}
                                </a>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-500">Obszar działania</div>
                                <div className="font-semibold text-neutral-900">{locationDisplay}</div>
                            </div>
                            <div>
                                <a
                                    className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
                                    href={mapsHref}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Otwórz mapę →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;