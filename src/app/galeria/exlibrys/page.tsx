'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import leftArrow from '../../../../public/filled_la.png';
import rightArrow from '../../../../public/filled_ra.png';

const exlibrisImages = [
	'/strona_ex/batszeba.jpg',
	'/strona_ex/ex_libris_j.jpg',
	'/strona_ex/ex_libris_p.jpg',
	'/strona_ex/ex_libris_uor.jpg',
	'/strona_ex/ich2.jpg',
	'/strona_ex/mb_piotrg.jpg',
	'/strona_ex/mb_sg.jpg',
	'/strona_ex/t_mse.jpg',
	'/strona_ex/warkocz.jpg',
];

const Exlibrys: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? exlibrisImages.length - 1 : prev - 1
		);
	};
	const nextImage = () => {
		setCurrentIndex((prev) =>
			prev === exlibrisImages.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<div className="h-screen flex flex-col justify-between bg-dark bg-opacity-90 py-6 px-4 sm:px-6">
			<h2 className="text-3xl font-bold text-center text-beigeLight mb-6">
				Galeria Exlibrysu
			</h2>

			<nav className="mb-6 flex justify-center gap-4 flex-wrap">
				<Link
					href="/galeria/male"
					className="text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition"
				>
					Małe Formy
				</Link>
				<Link
					href="/galeria/duze"
					className="text-beigeLight font-semibold rounded-md p-3 bg-darkLight  hover:text-white transition"
				>
					Duże Formy
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
							src={exlibrisImages[currentIndex]}
							alt={`Exlibrys ${currentIndex + 1}`}
							className="rounded-lg shadow-lg max-w-full sm:max-w-[800px] max-h-[500px] sm:max-h-[600px] object-contain transition-all duration-300 ease-in-out"
							width={800}
							height={600}
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
				{exlibrisImages.map((src, index) => (
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

export default Exlibrys;
