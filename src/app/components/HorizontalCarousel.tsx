import useMeasure from 'react-use-measure';
import Card from './Card';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HorizontalCarousel() {
	const images: string[] = [
		'/street-art.jpg',
		'/winter.jpg',
		'/folk-art.jpg',
		'/splash.jpg',
		'/hands.jpg',
	];

	const FAST_DURATION = 65;

	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const finalPosition = -width / 2 - 8;

		const controls = animate(xTranslation, finalPosition, {
			ease: 'linear',
			duration: FAST_DURATION,
			repeat: Infinity,
			repeatType: 'loop',
		});

		return () => controls.stop();
	}, [xTranslation, width]);

	useEffect(() => {
		if (isHovering) {
			xTranslation.stop();
		} else {
			animate(xTranslation, -width / 2 - 8, {
				ease: 'linear',
				duration: FAST_DURATION,
				repeat: Infinity,
				repeatType: 'loop',
			});
		}
	}, [isHovering, xTranslation, width]);

	return (
		<motion.div
			className="absolute left-0 flex gap-4"
			ref={ref}
			style={{ x: xTranslation }}
			onHoverStart={() => {
				setIsHovering(true);
			}}
			onHoverEnd={() => {
				setIsHovering(false);
			}}
		>
			{[...images, ...images].map((item, index) => (
				<Card image={item} key={index} />
			))}
		</motion.div>
	);
}
