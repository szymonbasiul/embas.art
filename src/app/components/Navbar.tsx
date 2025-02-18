'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import close from '../img/close.svg';
import burger from '../img/burger-menu.svg';
import Link from 'next/link';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`nav flex p-5 h-[110px] w-full items-center bg-black text-white top-0 sticky transition-all delay-100 duration-500 ease z-30 ${
				scroll ? `bg-opacity-75` : `bg-opacity-100`
			}`}
		>
			<div className="logo flex container">
				<Image src="icon.svg" width={60} height={60} alt="Logo MB" />
				<p className="text-2xl flex h-full p-4 font-bold">eMBe</p>
			</div>
			<div className="flex justify-end">
				<ul className="sm:flex hidden space-x-4">
					<li>
						<Link href="#biography">
							<div className="hover:text-gray-400 text-xl font-bold">
								Biografia
							</div>
						</Link>
					</li>
					<li>
						<Link href="#gallery">
							<div className="hover:text-gray-400 text-xl font-bold">
								Galeria
							</div>
						</Link>
					</li>
					<li>
						<Link href="#contact">
							<div className="hover:text-gray-400 text-xl font-bold">
								Kontakt
							</div>
						</Link>
					</li>
				</ul>
				<button className="menu md:hidden" onClick={() => setOpen((x) => !x)}>
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
