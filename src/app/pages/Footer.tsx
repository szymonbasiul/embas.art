import Image from 'next/image';
import Link from 'next/link';
import facebook from '../img/facebook.svg';

export default function Footer() {
	return (
		<section id="footer" className="footer bg-dark text-white">
			<footer className="container px-4 py-8 text-center">
				<div className="social-media flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
					<p className="font-bold">Social media:</p>
					<div className="flex items-center gap-6">
						<Link href={'https://facebook.com'}>
							<Image
								rel="icon"
								src={facebook}
								alt="Facebook icon"
								className="w-8 h-8 hover:scale-110 transition-transform duration-200"
							/>
						</Link>
					</div>
				</div>
				<p className="text-sm sm:text-base mt-4">
					&copy; 2025 eMBe. Wszelkie prawa zastrzeżone.
				</p>
			</footer>
		</section>
	);
}
