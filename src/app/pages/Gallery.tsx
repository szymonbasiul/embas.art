'use client';

import HorizontalCarousel from '../components/HorizontalCarousel';

export default function Gallery() {
	return (
		<section id="gallery" className="gallery bg-dark text-beigeLight">
			<h2 className="section-title container pt-[2em] pb-[1em] text-beigeLight text-4xl md:text-3xl sm:text-2xl text-center font-bold uppercase">
				Galeria
			</h2>
			<div className="relative h-[500px] p-4 mt-[2em] bg-dark overflow-hidden">
				<HorizontalCarousel />
			</div>
		</section>
	);
}
