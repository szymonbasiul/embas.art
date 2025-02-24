import useMeasure from 'react-use-measure';
import Card from './Card';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HorizontalCarousel() {
	const images = [
		'/street-art.jpg',
		'/winter.jpg',
		'/folk-art.jpg',
		'/birmingham.jpg',
	];

	const FAST_DURATION = 25;
	const SLOW_DURATION = 75;

	const [duration, setDuration] = useState(FAST_DURATION);

	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: 'linear',
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: 'linear',
				duration: duration,
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
			});
		}
		return controls?.stop;
	}, [xTranslation, width, duration, rerender, mustFinish]);

	return (
		<motion.div
			className="absolute left-0 flex gap-4"
			ref={ref}
			style={{ x: xTranslation }}
			onHoverStart={() => {
				setMustFinish(true);
				setDuration(SLOW_DURATION);
			}}
			onHoverEnd={() => {
				setMustFinish(true);
				setDuration(FAST_DURATION);
			}}
		>
			{[...images, ...images].map((item, index) => (
				<Card image={item} key={index} />
			))}
		</motion.div>
	);
}
