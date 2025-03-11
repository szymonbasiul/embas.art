'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import leftArrow from '../../../../public/filled_la.png';
import rightArrow from '../../../../public/filled_ra.png';

const bigImages = [
	'/strona_d/3gracje.jpg',
	'/strona_d/batszeba.jpg',
	'/strona_d/bezglowy.jpg',
	'/strona_d/ex3.jpg',
	'/strona_d/ex4.jpg',
	'/strona_d/ex5.jpg',
	'/strona_d/ex6.jpg',
	'/strona_d/ex7.jpg',
	'/strona_d/interior.jpg',
	'/strona_d/judyta.jpg',
	'/strona_d/lezaca.jpg',
	'/strona_d/trans1.jpg',
	'/strona_d/trans2.jpg',
	'/strona_d/trans3.jpg',
	'/strona_d/wenus.jpg',
	'/strona_d/zuzanna.jpg',
];

const Duze: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		setCurrentIndex((prev) => (prev === 0 ? bigImages.length - 1 : prev - 1));
	};
	const nextImage = () => {
		setCurrentIndex((prev) => (prev === bigImages.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="h-screen flex flex-col justify-between bg-dark bg-opacity-90 py-6 px-4 sm:px-6">
			<h2 className="text-3xl font-bold text-center text-beigeLight mb-6">
				Galeria Dużej Formy
			</h2>
			<nav className="mb-6 flex justify-center gap-4 flex-wrap">
				<Link
					href="/galeria/male"
					className="text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition"
				>
					Małe Formy
				</Link>
				<Link
					href="/galeria/exlibrys"
					className="text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition"
				>
					Exlibrys
				</Link>
				<Link
					href="/galeria/wielkoformatowe"
					className="text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition"
				>
					Wielkoformatowe
				</Link>
			</nav>

			<div className="relative w-full flex justify-center items-center">
				<div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
					<button
						onClick={prevImage}
						className="p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition"
					>
						<Image src={leftArrow} alt="Poprzednie" width={50} height={50} />
					</button>
				</div>

				<div className="w-full flex justify-center items-center overflow-x-auto">
					<div className="flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-4 gap-6">
						<Image
							src={bigImages[currentIndex]}
							alt={`Duże formy ${currentIndex + 1}`}
							className="rounded-lg shadow-lg max-w-full sm:max-w-[800px] max-h-[500px] sm:max-h-[600px] object-contain transition-all duration-300 ease-in-out"
							width={800}
							height={600}
							quality={75}
							priority
						/>
					</div>
				</div>

				<div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
					<button
						onClick={nextImage}
						className="p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition"
					>
						<Image src={rightArrow} alt="Następne" width={50} height={50} />
					</button>
				</div>
			</div>

			<div className="mt-4 flex justify-center sm:overflow-x-auto sm:whitespace-nowrap gap-2 flex-wrap sm:flex-nowrap">
				{bigImages.map((src, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`border-2 rounded-lg overflow-hidden ${
							currentIndex === index
								? 'border-beigeLight'
								: 'border-transparent'
						} hover:border-beigeLight transition`}
					>
						<Image
							src={src}
							alt={`Miniatura ${index + 1}`}
							className="w-24 h-16 object-cover rounded-lg"
							width={100}
							height={66}
							quality={75}
						/>
					</button>
				))}
			</div>

			<div className="mt-8 text-center">
				<Link
					href="/#galeria"
					className="px-6 py-3 bg-beigeLight text-dark font-bold rounded-lg shadow-md hover:bg-opacity-80 transition"
				>
					Powrót do galerii
				</Link>
			</div>
		</div>
	);
};

export default Duze;
