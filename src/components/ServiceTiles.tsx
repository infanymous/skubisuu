"use client";

import { useMemo, useState } from 'react';

type Tile = {
	title: string;
	desc: string;
	extra: string;
};

export default function ServiceTiles() {
	const tiles: Tile[] = useMemo(
		() => [
			{
				title: 'Holowanie (osobowe / dostawcze / TIR)',
				desc: 'Bezpieczny transport i pełna kontrola nad procesem.',
				extra:
					'Dojeżdżamy sprawnie na miejsce i dobieramy sposób holowania do sytuacji oraz rodzaju pojazdu. Zabezpieczamy auto, pomagamy przy formalnościach po kolizji i dowozimy we wskazane miejsce.',
			},
			{
				title: 'Awaryjne uruchamianie',
				desc: 'Gdy akumulator zawiedzie — uruchomimy pojazd.',
				extra:
					'Jeśli rozładował się akumulator, pomożemy w bezpiecznym uruchomieniu (rozruch awaryjny) oraz sprawdzimy podstawowe przyczyny problemu. Podpowiemy też, czy warto od razu jechać do serwisu.',
			},
			{
				title: 'Dowóz paliwa',
				desc: 'Szybko dowieziemy paliwo tam, gdzie utknąłeś.',
				extra:
					'Zdarza się każdemu — dojedziemy z odpowiednim paliwem, pomożemy bezpiecznie zatankować i wrócić na trasę. Działamy szybko, żebyś nie tracił czasu i nerwów.',
			},
			{
				title: 'Wymiana koła w trasie',
				desc: 'Sprawna pomoc na poboczu — bez ryzyka.',
				extra:
					'Wymienimy koło na miejscu, zabezpieczymy auto i zadbamy o Twoje bezpieczeństwo (trójkąt, ustawienie pojazdu). Jeśli koło jest uszkodzone lub brak zapasu — zorganizujemy transport.',
			},
			{
				title: 'Likwidacja szkód komunikacyjnych',
				desc: 'Pomagamy przejść przez formalności i działania na miejscu.',
				extra:
					'Podpowiemy krok po kroku co zrobić po stłuczce: dokumentacja, zdjęcia, oświadczenie sprawcy, zabezpieczenie miejsca. Pomożemy skoordynować holowanie i dalsze działania, żebyś miał wszystko dopięte.',
			},
			{
				title: 'Samochód zastępczy z OC sprawcy',
				desc: 'Gdy sytuacja tego wymaga — pomożemy ruszyć dalej.',
				extra:
					'Jeśli Twoje auto nie nadaje się do jazdy, pomożemy ogarnąć auto zastępcze z OC sprawcy. Doradzimy jakie dokumenty przygotować i jak przejść przez proces bez zbędnych opóźnień.',
			},
		],
		[]
	);

	const [open, setOpen] = useState<Set<number>>(() => new Set());

	return (
		<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{tiles.map((tile, index) => {
				const isOpen = open.has(index);
				return (
					<button
						key={tile.title}
						type="button"
						className={
							'group text-left rounded-xl border border-neutral-800 bg-neutral-900/80 p-5 shadow-sm transition ' +
							'hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary/40 cursor-pointer ' +
							(isOpen ? 'ring-1 ring-secondary/40' : '')
						}
						aria-expanded={isOpen}
						onClick={() =>
							setOpen((prev) => {
								const next = new Set(prev);
								if (next.has(index)) next.delete(index);
								else next.add(index);
								return next;
							})
						}
					>
						<div className="flex items-start gap-3">
							<div className="mt-0.5 h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-95" />
							<div className="min-w-0">
								<div className="font-semibold text-neutral-50 group-hover:text-secondary">
									{tile.title}
								</div>
								<div className="mt-1 text-neutral-300">{tile.desc}</div>
							</div>
						</div>

						<div
							className={
								'mt-3 overflow-hidden transition-all duration-300 ease-out ' +
								(isOpen ? 'max-h-[420px] opacity-100 pb-1' : 'max-h-0 opacity-0')
							}
						>
							<p className="text-sm text-neutral-300 leading-relaxed">{tile.extra}</p>
							<div className="mt-3 text-xs font-semibold text-primary/90">Kliknij ponownie, aby zwinąć</div>
						</div>
					</button>
				);
			})}
		</div>
	);
}
