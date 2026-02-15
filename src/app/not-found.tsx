import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-10">
			<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nie znaleziono strony</h1>
			<p className="mt-4 text-neutral-300">Ta strona nie istnieje lub została przeniesiona.</p>
			<Link href="/" className="mt-6 inline-flex font-semibold text-primary hover:underline">
				Wróć na stronę główną →
			</Link>
		</div>
	);
}
