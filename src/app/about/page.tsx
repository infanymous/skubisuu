import Link from 'next/link';

const AboutPage = () => {
    const phoneDisplay = '+48 606 885 604';
    const phoneHref = 'tel:+48606885604';

    const fleet = [
        {
            name: 'VOLKSWAGEN TRANSPORTER T6',
            productionYear: '2018',
            buildYear: '2018',
            dmc: '3500 kg',
            payload: '1500 kg',
        },
        {
            name: 'RENAULT MASTER',
            productionYear: '2025',
            buildYear: '2025',
            dmc: '3500 kg',
            payload: '1320 kg',
        },
        {
            name: 'RENAULT MASTER',
            productionYear: '2025',
            buildYear: '2025',
            dmc: '3500 kg',
            payload: '1320 kg',
        },
    ] as const;

    return (
        <div className="about-page">
            <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-secondary">
                    <span className="font-semibold">O nas</span>
                    <span className="text-secondary/80">poznaj Skubisuu Racing &amp; Rent</span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-2 bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
                    Kim jesteśmy?
                </h1>
                <p className="mt-4 text-lg font-semibold text-neutral-300 max-w-3xl">
                    Szybka pomoc drogowa, holowanie i wsparcie po kolizji — 24/7. Wynajem lawet i transport pojazdów. Zaufaj profesjonalistom z doświadczeniem i pasją do motoryzacji.
                </p>

                <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm px-6 py-8 shadow-sm">
                    <div className="space-y-4 text-neutral-300 leading-relaxed">
                        <p>
                            Skubisuu Racing &amp; Rent to firma z wieloletnim doświadczeniem w branży motoryzacyjnej, specjalizująca się w pomocy drogowej, holowaniu oraz wynajmie lawet. Nasza misja to zapewnienie szybkiej i niezawodnej pomocy kierowcom w trudnych sytuacjach na drodze.
                        </p>
                        <p>
                            Nasz zespół składa się z doświadczonych ludzi, którzy pasjonują się swoją pracą. Każda interwencja to inne wyzwanie i okazja do pokazania naszego profesjonalizmu oraz zaangażowania. Działamy 24 godziny na dobę, 7 dni w tygodniu, aby być zawsze gotowi do pomocy.
                        </p>
                        <p>
                            Nasza firma zlokalizowana jest w rejonie Sławkowa, oferujemy swoje usługi głównie na terenie województwa śląskiego, w szczególności w rejonie miast: Sławków, Bolesław, Bukowno, Klucze, Olkusz i Dąbrowa Górnicza. Jesteśmy również w stanie dojechać do klientów w całej Polsce. Dysponujemy nowoczesnym sprzętem i flotą lawet, które pozwalają nam skutecznie radzić sobie z różnorodnymi sytuacjami na drodze.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 id="wynajem-lawet" className="scroll-mt-28 text-2xl sm:text-3xl font-bold text-neutral-50">
                            Wynajem lawet
                        </h2>
                        <p className="mt-3 text-neutral-300 leading-relaxed max-w-3xl">
                            Szukasz lawety na wynajem? Może mamy coś, co Cię zainteresuje. Mamy w ofercie flotę lawet na wynajem, sprawdź wykaz naszych aut poniżej wraz z
                            podstawową specyfikacją! Jeśli chcesz dowiedzieć się więcej, skontaktuj się z nami telefonicznie lub przez formularz kontaktowy -&gt; <Link href="/contact" className="text-secondary underline">tutaj</Link>.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm">
                                    <thead className="bg-neutral-900/60 text-neutral-200">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 font-semibold">
                                                Nazwa
                                            </th>
                                            <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                                                Rok prod.
                                            </th>
                                            <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                                                Rok zabudowy
                                            </th>
                                            <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                                                DMC
                                            </th>
                                            <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                                                Ładowność
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800 text-neutral-300">
                                        {fleet.map((row, i) => (
                                            <tr key={`${row.name}-${i}`} className="hover:bg-neutral-900/40">
                                                <td className="px-4 py-3 font-semibold text-neutral-100">
                                                    {row.name}
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">{row.productionYear}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{row.buildYear}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{row.dmc}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{row.payload}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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