'use client';

import HorizontalCarousel from '../components/HorizontalCarousel';

export default function Gallery() {
	return (
		<section id="galeria" className="gallery bg-dark text-beigeLight mb-6">
			<h2 className="section-title container pt-[2em] pb-[0.5em] text-beigeLight text-2xl text-center uppercase drop-shadow-lg">
				Galeria
			</h2>
			<div className="relative h-[40em] p-4 mt-[2em] bg-dark overflow-hidden">
				<HorizontalCarousel />
			</div>
		</section>
	);
}
