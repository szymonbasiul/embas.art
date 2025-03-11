import Image from 'next/image';
import Link from 'next/link';

const galleryLinks = [
	{
		title: 'Małe formy',
		path: '/galeria/male', // Link do strony z wszystkimi zdjęciami tej kategorii
		imageSrc: '/strona_m/samson.jpg',
		width: 400, // Szerokość obrazu
		height: 250, // Wysokość obrazu
	},
	{
		title: 'Duże formy',
		path: '/galeria/duze', // Link do strony z wszystkimi zdjęciami tej kategorii
		imageSrc: '/strona_d/batszeba.jpg',
		width: 400, // Szerokość obrazu
		height: 250, // Wysokość obrazu
	},
	{
		title: 'Exlibrys',
		path: '/galeria/exlibrys', // Link do strony z wszystkimi zdjęciami tej kategorii
		imageSrc: '/strona_ex/t_mse.jpg',
		width: 400, // Szerokość obrazu
		height: 250, // Wysokość obrazu
	},
	{
		title: 'Wielkoformatowe',
		path: '/galeria/wielkoformatowe', // Link do strony z wszystkimi zdjęciami tej kategorii
		imageSrc: '/strona_w/mb_wenus.jpg',
		width: 400, // Szerokość obrazu
		height: 250, // Wysokość obrazu
	},
];

const Gallery: React.FC = () => {
	return (
		<section id="galeria" className="bg-dark text-beigeLight py-16">
			<div className="max-w-7xl mx-auto p-6 bg-dark bg-opacity-90">
				<h2 className="text-3xl font-bold text-center text-beigeLight mb-6">
					Galeria
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
					{galleryLinks.map((link, index) => (
						<div
							key={index}
							className="gallery-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group"
						>
							<Link href={link.path}>
								<div className="relative block h-full">
									{/* Obrazek */}
									<Image
										src={link.imageSrc}
										alt={link.title}
										className="w-full h-64 object-cover object-center sm:h-80 md:h-96"
										width={link.width}
										height={link.height}
									/>
									{/* Półprzeźroczyste tło i napis "Zobacz" - widoczny po hoverze */}
									<div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="text-xl font-bold text-beigeLight uppercase tracking-widest">
											Zobacz
										</span>
									</div>
									{/* Tytuł galerii */}
									<div className="p-4">
										<h3 className="text-xl font-semibold text-dark text-center z-20">
											{link.title}
										</h3>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
