"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState, useRef, useEffect } from 'react';

type NavItem = {
	label: string;
	href: string;
};

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const phoneDisplay = '+48 606 885 604';
	const phoneHref = 'tel:+48606885604';
	const serviceAreas = ['Sławków', 'Bolesław', 'Bukowno', 'Klucze', 'Olkusz', 'Dąbrowa Górnicza'];
	const primaryArea = serviceAreas[0];
	const extraAreas = serviceAreas.length - 1;

	const [showAreas, setShowAreas] = useState(false);
	const areasRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!showAreas) return;
		const onDocDown = (e: MouseEvent) => {
			if (!areasRef.current) return;
			if (!(e.target instanceof Node)) return;
			if (!areasRef.current.contains(e.target)) setShowAreas(false);
		};
		document.addEventListener('mousedown', onDocDown);
		return () => document.removeEventListener('mousedown', onDocDown);
	}, [showAreas]);

	const items: NavItem[] = useMemo(
		() => [
			{ label: 'Start', href: '/' },
			{ label: 'Oferta', href: '/about' },
			{ label: 'Galeria', href: '/gallery' },
			{ label: 'Kontakt', href: '/contact' },
		],
		[]
	);

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname?.startsWith(`${href}/`);
	};

	return (
		<header className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-50 overflow-visible">
			{/* Top info strip */}
			<div className="border-b border-neutral-800 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
				<div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
					<div className="flex items-center gap-3 text-sm text-neutral-200">
						<span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
							24/7
						</span>

						{/* Desktop / tablet: inline mini-list */}
						<div className="hidden sm:flex items-center gap-3 min-w-0">
							<span className="font-semibold text-neutral-300 whitespace-nowrap text-sm leading-tight">Pomoc drogowa •</span>
							<ul className="flex items-center gap-2 whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
								{serviceAreas.map((c, i) => (
									<li key={c} className="text-neutral-300 text-sm inline-flex items-center gap-2 leading-tight">
										<span className="whitespace-nowrap leading-tight">{c}</span>
										{i < serviceAreas.length - 1 ? <span className="text-neutral-500">•</span> : null}
									</li>
								))}
							</ul>
						</div>

						{/* Mobile: first area + summary + dropdown */}
						<div className="sm:hidden relative ">
							
							{extraAreas > 0 ? (
								<button
									type="button"
									aria-expanded={showAreas}
									aria-controls="service-areas-list"
									onClick={() => setShowAreas((v) => !v)}
									className="ml-2 text-neutral-500 text-sm font-medium"
								>
									<span className="text-neutral-300 font-semibold">{primaryArea}</span> • +{extraAreas}
								</button>
							) : null}

							{showAreas ? (
								<div
									id="service-areas-list"
									ref={areasRef}
									className="absolute left-0 top-full mt-2 w-56 rounded-md bg-neutral-900 border border-neutral-800 p-2 text-sm z-50 shadow-lg"
								>
									{serviceAreas.map((c) => (
										<button
											key={c}
											type="button"
											onClick={() => setShowAreas(false)}
											className="block w-full text-left px-2 py-1 text-neutral-200 hover:bg-neutral-800 rounded"
										>
											{c}
										</button>
									))}
								</div>
							) : null}
						</div>
					</div>

					<div className="flex items-center gap-3">
						<a
							href={phoneHref}
							className="text-sm font-semibold text-neutral-100 hover:text-secondary"
							aria-label={`Zadzwoń: ${phoneDisplay}`}
						>
							{phoneDisplay}
						</a>
						<a
							href={phoneHref}
							className="hidden sm:inline-flex btn-wow rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
						>
							Zadzwoń teraz
						</a>
					</div>
				</div>
			</div>

			<nav className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 overflow-visible">
				<div className="flex items-center gap-3">
					<Link
						href="/"
						className="relative z-10 block h-10 w-44 sm:w-56 md:w-64 overflow-visible ml-0 sm:-ml-8 md:-ml-12"
						aria-label="My Company home"
						onClick={() => setIsOpen(false)}
					>
						<Image
							src="/images/brand/logo2.png"
							alt="Logo"
							width={520}
							height={520}
							priority
							className="relative h-10 sm:absolute sm:left-[calc(100%-15em)] sm:top-[calc(100%+1em)] sm:h-24 md:h-32 w-auto sm:-translate-x-6 md:-translate-x-8 sm:-translate-y-1/2 drop-shadow-lg"
						/>
					</Link>
				</div>

				{/* Desktop nav */}
				<ul className="hidden md:flex items-center gap-6">
					{items.map((item) => {
						const active = isActive(item.href);
						return (
							<li key={item.href}>
								<Link
									href={item.href}
									className={
										active
											? 'text-secondary font-semibold'
											: 'text-neutral-200 hover:text-secondary'
									}
									aria-current={active ? 'page' : undefined}
								>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>

				{/* Mobile menu button */}
				<button
					type="button"
					className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-700 px-3 py-2 text-neutral-200 hover:bg-neutral-900"
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((v) => !v)}
				>
					<span className="sr-only">Menu</span>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						{isOpen ? (
							<path
								d="M6 6L18 18M18 6L6 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						) : (
							<path
								d="M4 7H20M4 12H20M4 17H20"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile panel */}
			{isOpen ? (
				<div className="md:hidden border-t border-neutral-800 bg-neutral-950">
					<ul className="container mx-auto px-4 py-3 flex flex-col gap-2">
						<li className="pb-2">
							<a
								href={phoneHref}
									className="btn-wow inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90"
								onClick={() => setIsOpen(false)}
							>
								Zadzwoń: {phoneDisplay}
							</a>
							<div className="mt-2 text-xs text-neutral-400 text-center">
								Obsługujemy:
								<div className="mt-1 grid grid-cols-2 gap-1 text-neutral-200 text-sm">
									{serviceAreas.map((c) => (
										<div key={c} className="px-2 py-1">
											{c}
										</div>
									))}
								</div>
							</div>
						</li>

						{items.map((item) => {
							const active = isActive(item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={
											active
													? 'block rounded-md px-3 py-2 text-secondary font-semibold bg-neutral-900'
													: 'block rounded-md px-3 py-2 text-neutral-200 hover:bg-neutral-900 hover:text-secondary'
										}
										aria-current={active ? 'page' : undefined}
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</header>
	);
}
