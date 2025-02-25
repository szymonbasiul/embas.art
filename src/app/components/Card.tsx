import Image from 'next/image';
import arrow from '../../../public/vercel.svg';
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
	image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<motion.div
			className="relative overflow-hidden h-[400px] min-w-[400px] bg-darkLight rounded-xl flex justify-center items-center hover:cursor-pointer"
			onHoverStart={() => setShowOverlay(true)}
			onHoverEnd={() => setShowOverlay(false)}
		>
			{showOverlay && (
				<motion.div
					className="absolute inset-0 z-10 flex justify-center items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className="absolute bg-dark pointer-events-none opacity-50 h-full w-full" />
					<motion.h2
						className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover-opacity:75"
						initial={{ y: 10 }}
						animate={{ y: 0 }}
						exit={{ y: 10 }}
					>
						<span>Explore Now</span>
						<Image
							src={arrow}
							alt="arrow"
							width={20}
							height={20}
							className="text-dark"
						/>
					</motion.h2>
				</motion.div>
			)}
			<Image src={image} alt={image} fill style={{ objectFit: 'cover' }} />
		</motion.div>
	);
};

export default Card;
