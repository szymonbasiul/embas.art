'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import close from '../../../public/close.svg';
import burger from '../../../public/burger-menu.svg';
import Link from 'next/link';

export default function Navbar() {
	const sectionIds = ['home', 'biografia', 'galeria', 'kontakt'];

	const [scroll, setScroll] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [activeLink, setActiveLink] = useState('home');

	// Funkcja do określenia aktywnej sekcji na podstawie scrolla
	const determineActiveSection = () => {
		for (let i = 0; i < sectionIds.length; i++) {
			const section = document.getElementById(sectionIds[i]);
			if (section) {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					setActiveLink(sectionIds[i]);
					return;
				}
			}
		}
	};

	const toggleMenu = () => {
		setIsVisible(!isVisible);
	};

	// Nasłuchiwanie na przewijanie strony
	useEffect(() => {
		const handleScroll = () => {
			// Zmiana koloru tła nawigacji po przewinięciu
			if (window.scrollY > 100) {
				setScroll(true);
			} else {
				setScroll(false);
			}

			// Wywołanie funkcji do określenia aktywnej sekcji
			determineActiveSection();
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []); // [] zapewnia, że funkcja będzie nasłuchiwała tylko raz

	return (
		<nav
			className={`nav justify-between flex h-[110px] w-full items-center bg-dark text-beigeLight top-0 sticky transition-all delay-200 duration-500 ease z-30 ${
				scroll ? 'bg-opacity-85' : 'bg-opacity-100'
			}`}
		>
			<div className="logo flex w-auto">
				<Link href="#home" className="flex container h-full p-5">
					<Image src="icon.svg" width={60} height={60} alt="Logo MB" />
					<p className="text-2xl flex h-full p-4 font-bol uppercase">
						Marek Basiul
					</p>{' '}
				</Link>
			</div>
			<div className="nav-links flex h-full px-5">
				<ul className="md:flex hidden justify-between items-center h-full table-of-contents">
					{sectionIds.map((sectionId, i) => (
						<li
							key={i}
							className={`flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-75 delay-100 duration-500 ease-in-out px-5 uppercase ${
								sectionId === activeLink
									? 'bg-darkLight bg-opacity-75 text-beigeLight'
									: ''
							}`}
						>
							<Link
								href={`#${sectionId}`}
								className={`flex w-full h-full items-center justify-center ${
									sectionId === activeLink ? 'active-link ' : ''
								}`}
							>
								<div className="text-2xl text-center font-bold">
									{sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
								</div>
							</Link>
						</li>
					))}
				</ul>
				<button className="menu md:hidden p-5 z-30" onClick={toggleMenu}>
					{isVisible ? (
						<Image src={close} width={60} height={60} alt="Close menu" />
					) : (
						<Image src={burger} width={60} height={60} alt="Open menu" />
					)}
				</button>
			</div>
			{isVisible && (
				<div
					className={`mobile-nav fixed block bg-dark bg-opacity-85 top-[110px] w-full h-screen transition-transform delay-300 duration-[1500ms] ease-in-out z-20 ${
						isVisible
							? 'transform translate-x-0'
							: 'transform -translate-x-full'
					}`}
				>
					<ul className="justify-between items-center h-screen table-of-contents">
						{sectionIds.map((sectionId, i) => (
							<li
								key={i}
								className={`flex justify-center items-center hover:bg-darkLight hover:bg-opacity-75 hover:text-beigeLight delay-100 duration-500 ease-in-out uppercase ${
									sectionId === activeLink
										? 'bg-darkLight bg-opacity-75 text-beigeLight'
										: ''
								}`}
							>
								<Link
									href={`#${sectionId}`}
									onClick={toggleMenu}
									className={`flex w-full h-full items-center justify-center p-5 ${
										sectionId === activeLink ? 'active-link' : ''
									}`}
								>
									<div className="text-2xl text-center font-bold">
										{sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
