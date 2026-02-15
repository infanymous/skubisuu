import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt',
    description:
        'Kontakt do Skubisuu Racing & Rent: pomoc drogowa 24/7, holowanie oraz wynajem lawet. Zadzwoń lub napisz przez formularz.',
};

const ContactPage = () => {
    const phoneDisplay = '+48 606 885 604';
    const phoneHref = 'tel:+48606885604';
    const locationDisplay = 'Kraków, Małopolskie';
    const mapsHref =
        'https://share.google/Uh2IHPvTlAyPnDzN2';

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
                <p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
                    Jeśli potrzebujesz pomocy na drodze — zadzwoń! Zawsze jesteśmy dostępni, aby Ci pomóc. 
                </p>
                <p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
                    Szukasz lawety na wynajem? Chcesz dowiedzieć się więcej o naszych usługach? Skontaktuj się z nami telefonicznie lub przez formularz kontaktowy poniżej. 
                </p>
                <p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
                    Zapraszamy również do sprawdzenia opinii o nas w Google -&gt; <a href={mapsHref} className="text-secondary underline">tutaj</a>. Zdania klientów mówią same za siebie, zapraszamy!
                </p>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                        <form>
                            <div>
                                <label htmlFor="name">Imię:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Wiadomość:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit">Wyślij wiadomość</button>
                        </form>
                    </div>

                    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                        <div className="text-sm font-semibold text-neutral-100">Dane kontaktowe</div>
                        <div className="mt-4 space-y-3 text-neutral-300">
                            <div>
                                <div className="text-xs text-neutral-500">Telefon</div>
                                <a className="font-semibold text-primary hover:underline" href={phoneHref}>
                                    {phoneDisplay}
                                </a>
                            </div>
                            <div>
                                <a
                                    id="map-link"
                                    className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
                                    href="#map"
                                >
                                    Otwórz mapę →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Embedded Google Map section */}
                <div id="map" className="mt-8 mx-auto max-w-5xl">
                    <div className="rounded-3xl overflow-hidden border border-neutral-800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.9133154711844!2d19.37656124302545!3d50.27918124380974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc357eb8d31e4a61%3A0xabeea0f253577a7a!2sPOMOC%20DROGOWA%2FWYPO%C5%BBYCZALNIA%20LAWET%20Skubisuu%20Racing%26Rent%20Jakub%20Skubis!5e0!3m2!1spl!2spl!4v1770237371542!5m2!1spl!2spl"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;