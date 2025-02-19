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
				<div className="md:flex hidden justify-between items-center h-full ">
					<button className="flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-25 delay-100 duration-500 ease-in-out px-5">
						<Link href="#home">
							<div className="hover:text-beigeLight delay-100 duration-500 ease-in-out text-2xl text-center font-bold">
								Home
							</div>
						</Link>
					</button>
					<button className="flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-25 delay-100 duration-500 ease-in-out px-5">
						<Link href="#biography">
							<div className="hover:text-beigeLight delay-100 duration-500 ease-in-out text-2xl text-center font-bold">
								Biografia
							</div>
						</Link>
					</button>
					<button className="flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-25 delay-100 duration-500 ease-in-out px-5">
						<Link href="#gallery">
							<div className="hover:text-beigeLight delay-100 duration-500 ease-in-out text-2xl font-bold">
								Galeria
							</div>
						</Link>
					</button>
					<button className="flex h-full justify-center items-center hover:bg-darkLight hover:bg-opacity-25 delay-100 duration-500 ease-in-out px-5">
						<Link href="#contact">
							<div className="hover:text-beigeLight delay-100 duration-500 ease-in-out text-2xl font-bold">
								Kontakt
							</div>
						</Link>
					</button>
				</div>
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
