import Link from 'next/link';

export default function Navbar() {
	return (
		<header className="bg-white border-b border-gray-200">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="text-red-600 font-semibold text-lg">
					My Company
				</Link>

				<ul className="flex items-center gap-6 text-yellow-700">
					<li>
						<Link href="/" className="hover:underline">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className="hover:underline">
							About
						</Link>
					</li>
					<li>
						<Link href="/gallery" className="hover:underline">
							Gallery
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
