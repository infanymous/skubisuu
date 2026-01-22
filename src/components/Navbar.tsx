"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

type NavItem = {
	label: string;
	href: string;
};

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const phoneDisplay = '+48 123 456 789';
	const phoneHref = 'tel:+48123456789';
	const locationDisplay = 'Kraków, Małopolskie';

	const items: NavItem[] = useMemo(
		() => [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Gallery', href: '/gallery' },
			{ label: 'Contact', href: '/contact' },
		],
		[]
	);

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname?.startsWith(`${href}/`);
	};

	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
			{/* Top info strip */}
			<div className="border-b border-gray-100 bg-gradient-to-r from-red-50 via-white to-yellow-50">
				<div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
					<div className="flex items-center gap-3 text-sm text-gray-700">
						<span className="inline-flex items-center rounded-full bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
							24/7
						</span>
						<span className="hidden sm:inline">Pomoc drogowa • {locationDisplay}</span>
						<span className="sm:hidden">{locationDisplay}</span>
					</div>

					<div className="flex items-center gap-3">
						<a
							href={phoneHref}
							className="text-sm font-semibold text-gray-900 hover:text-red-700"
							aria-label={`Zadzwoń: ${phoneDisplay}`}
						>
							{phoneDisplay}
						</a>
						<a
							href={phoneHref}
							className="hidden sm:inline-flex btn-wow rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
						>
							Zadzwoń teraz
						</a>
					</div>
				</div>
			</div>

			<nav className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<Link
						href="/"
						className="text-red-600 font-semibold text-lg tracking-tight"
						aria-label="My Company home"
						onClick={() => setIsOpen(false)}
					>
						Skubisuu R&amp;R
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
											? 'text-red-600 font-semibold'
											: 'text-yellow-700 hover:text-red-600'
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
					className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-50"
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
				<div className="md:hidden border-t border-gray-200 bg-white">
					<ul className="container mx-auto px-4 py-3 flex flex-col gap-2">
						<li className="pb-2">
							<a
								href={phoneHref}
								className="btn-wow inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-3 text-white font-semibold hover:bg-red-700"
								onClick={() => setIsOpen(false)}
							>
								Zadzwoń: {phoneDisplay}
							</a>
							<div className="mt-2 text-xs text-gray-600 text-center">Obsługujemy: {locationDisplay}</div>
						</li>

						{items.map((item) => {
							const active = isActive(item.href);
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={
											active
												? 'block rounded-md px-3 py-2 text-red-600 font-semibold bg-red-50'
												: 'block rounded-md px-3 py-2 text-yellow-700 hover:bg-gray-50 hover:text-red-600'
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
