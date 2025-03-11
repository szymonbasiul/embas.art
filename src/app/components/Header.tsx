import backgroundImage from '../../../public/headerHero.jpg';
import Image from 'next/image';

export default function Header() {
	return (
		<section id="home" className="w-full h-screen relative pt-[110px]">
			<header className="absolute inset-0 w-full h-full overflow-hidden">
				<div className="absolute inset-0 bg-dark bg-opacity-80 shadow-lg w-full h-full"></div>
				<div className="absolute inset-0 w-full h-full z-0">
					<Image
						src={backgroundImage}
						alt="Zdjęcie pracowni artysty w tle"
						fill={true}
						className="object-cover object-center"
					/>
				</div>
				<div className="absolute bottom-0 w-full bg-black bg-opacity-50 z-20 p-6 pb-10">
					<div className="container text-center">
						<blockquote className="text-lg font-semibold text-beigeLight drop-shadow-lg leading-10 italic pb-6">
							„W mojej robocie interesuje mnie „jak” na równi z „co”. Uważam, że
							poprzez „jak”, całość, czyli również „co”, jest głębsze. Że,
							znajdując właściwą formę, mówię więcej.”
						</blockquote>
						<div className="mt-2 text-right text-sm italic text-beigeLight">
							<p>Sławomir Grabowy, Autoportret 60 i 35</p>
						</div>
					</div>
				</div>
			</header>
		</section>
	);
}
