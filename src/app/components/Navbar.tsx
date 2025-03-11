'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import closeIcon from '../../../public/close.svg';
import burgerIcon from '../../../public/burger-menu.svg';

export default function Navbar() {
	const sectionIds = ['home', 'biografia', 'galeria', 'kontakt'];
	const [scroll, setScroll] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [activeLink, setActiveLink] = useState('home');

	// Funkcja do określania aktywnej sekcji na podstawie scrolla
	const determineActiveSection = () => {
		sectionIds.forEach((id) => {
			const section = document.getElementById(id);
			if (section) {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					setActiveLink(id);
				}
			}
		});
	};

	// Funkcja do obsługi scrolla
	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 100);
			determineActiveSection();
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setIsVisible(!isVisible);

	return (
		<nav
			className={`fixed top-0 w-full h-[110px] flex justify-between items-center px-5 bg-dark text-beigeLight transition-all duration-500 ease-in-out z-30 ${
				scroll ? 'bg-opacity-85 shadow-lg' : 'bg-opacity-100'
			}`}
		>
			{/* Logo */}
			<div className="flex items-center">
				<Link href="#home" className="flex items-center">
					<Image
						src="/icon.jpg"
						width={80}
						height={80}
						alt="Logo MB"
						className="h-[80px] w-[80px] rounded-md object-cover"
					/>
					<p className="text-2xl px-4 uppercase font-bold">Marek Basiul</p>
				</Link>
			</div>

			{/* Nawigacja desktopowa */}
			<ul className="hidden md:flex space-x-8 uppercase font-semibold h-full">
				{sectionIds.map((id) => (
					<li key={id} className="flex-1 h-full">
						<Link
							href={`#${id}`}
							className={`flex items-center justify-center w-full h-full p-8 transition duration-300 ${
								id === activeLink
									? 'bg-darkLight text-white'
									: 'hover:bg-darkLight hover:bg-opacity-75'
							}`}
						>
							{id.charAt(0).toUpperCase() + id.slice(1)}
						</Link>
					</li>
				))}
			</ul>

			{/* Przycisk menu mobilnego */}
			<button className="md:hidden z-30" onClick={toggleMenu}>
				<Image
					src={isVisible ? closeIcon : burgerIcon}
					width={40}
					height={40}
					alt="Menu toggle"
				/>
			</button>

			{/* Nawigacja mobilna */}
			<div
				className={`fixed top-0 right-0 w-full h-screen bg-dark bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-20 ${
					isVisible ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<ul className="space-y-8 text-2xl font-semibold">
					{sectionIds.map((id) => (
						<li key={id} className="w-full text-center">
							<Link
								href={`#${id}`}
								onClick={toggleMenu}
								className={`block w-full py-4 px-6 rounded-md text-white transition duration-300 ease-in-out ${
									id === activeLink
										? 'bg-darkLight text-white' // Aktywna sekcja
										: 'hover:bg-darkLight hover:bg-opacity-75' // Efekt hover
								}`}
							>
								{id.charAt(0).toUpperCase() + id.slice(1)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
