import backgroundImage from '../../../public/hero-graphic-1.jpg';
import Image from 'next/image';

export default function Header() {
	return (
		<section id="home" className="header">
			<header className="header-container h-[600px] relative overflow-hidden">
				<div className="absolute inset-0 bg-dark bg-opacity-80 shadow-lg w-full"></div>
				<div className="relative w-full h-full z-10">
					<Image
						src={backgroundImage}
						alt="Galeria sztuki w tle"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
					<div className="container text-center px-4">
						<h1 className="text-4xl md:text-3xl sm:text-2xl xl:text-5xl font-semibold mb-4 text-beigeLight drop-shadow-lg">
							W stronę piękna: Sztuka tradycyjna
						</h1>
					</div>
				</div>
			</header>
		</section>
	);
}
