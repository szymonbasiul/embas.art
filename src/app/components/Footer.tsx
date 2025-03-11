import React from 'react';

export default function Footer() {
	return (
		<section id="footer" className="footer bg-dark text-beigeLight p-4">
			<footer className="flex container text-center justify-center items-center">
				<p>
					&copy; <span>{new Date().getFullYear()}</span> Marek Basiul. Created
					by Pixel Breeze
				</p>
			</footer>
		</section>
	);
}
