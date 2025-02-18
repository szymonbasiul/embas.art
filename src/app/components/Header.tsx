import backgroundImage from '../img/hero-graphic-1.jpg';
import Image from 'next/image';

export default function Header() {
	return (
		<header className="header h-[400px] relative overflow-hidden">
			<div className="absolute inset-0 bg-black bg-opacity-80 shadow-lg w-full"></div>
			<div className="relative w-full h-full z-10">
				<Image
					src={backgroundImage}
					alt="Galeria sztuki w tle"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				></Image>
			</div>
			<div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-20">
				<div className="container text-center">
					<h1 className="text-3xl font-semibold mb-2 text-white">
						W stronę piękna: Sztuka tradycyjna
					</h1>
				</div>
			</div>
		</header>
	);
}
