'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import close from '../img/close.svg';
import burger from '../img/burger-menu.svg';
import Link from 'next/link';

export default function Navbar() {
	const sectionIds = ['home', 'biography', 'gallery', 'contact'];

	const [open, setOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const [activeLink, setActiveLink] = useState('home');

	const determineActiveSection = () => {
		for (let i = sectionIds.length - 1; i >= 0; i--) {
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

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
			determineActiveSection();
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`nav justify-between flex h-[110px] w-full items-center bg-dark text-white top-0 sticky transition-all delay-100 duration-500 ease z-30 ${
				scroll ? `bg-opacity-75` : `bg-opacity-100`
			}`}
		>
			<div className="logo flex w-auto ">
				<Link href="#home" className="flex container h-full p-5">
					<Image src="icon.svg" width={60} height={60} alt="Logo MB" />
					<p className="text-2xl flex h-full p-4 font-bold">eMBe</p>
				</Link>
			</div>
			<div className="nav-links flex h-full px-5">
				<ul className="md:flex hidden justify-between items-center h-full table-of-contents">
					{sectionIds.map((sectionId, i) => (
						<li
							key={i}
							className={`flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-25 hover:text-beigeLight delay-100 duration-500 ease-in-out px-5 uppercase ${
								sectionId === activeLink
									? 'bg-darkLight bg-opacity-25 text-beigeLight delay-100 duration-500 ease-in-out'
									: ''
							} `}
						>
							<Link
								href={`#${sectionId}`}
								className={`flex w-full h-full items-center justify-center ${
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
				<button
					className="menu md:hidden p-5"
					onClick={() => setOpen((x) => !x)}
				>
					{open ? (
						<Image src={close} width={60} height={60} alt="Close menu" />
					) : (
						<Image src={burger} width={60} height={60} alt="Open menu" />
					)}
				</button>
			</div>
		</nav>
	);
}
