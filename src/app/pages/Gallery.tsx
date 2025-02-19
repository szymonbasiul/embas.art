'use client';

import HorizontalCarousel from '../components/HorizontalCarousel';

export default function Gallery() {
	return (
		<section className="bg-dark text-beigeLight">
			<h2 className="section-title container pt-[2em] pb-[1em] text-4xl text-center font-bold uppercase">
				Galeria
			</h2>
			<div className='relative h-[400px] bg-dark overflow-hidden'>
				<HorizontalCarousel />
			</div>
		</section>
	);
}
