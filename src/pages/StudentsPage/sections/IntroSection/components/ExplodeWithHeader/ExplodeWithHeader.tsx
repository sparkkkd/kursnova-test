import { useRef, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import HeartSvg from '../../../../../../assets/common/icons/heart.svg?react'
import PizzaSvg from '../../../../../../assets/common/icons/pizza.svg?react'
import HandsSvg from '../../../../../../assets/common/icons/hands.svg?react'
import PhoneSvg from '../../../../../../assets/common/icons/phone.svg?react'

import styles from './ExplodeWithHeader.module.sass'

interface ExplodeWithHeaderProps {
	className?: string
	handleAnimationEnd: () => void
}

export const ExplodeWithHeader: FC<ExplodeWithHeaderProps> = ({
	className,
	handleAnimationEnd,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	return (
		<div className={clsx(styles.wrapper, className)} ref={containerRef}>
			<motion.video
				ref={videoRef}
				src='https://storage.yandexcloud.net/test-backet-kursnova/explode.webm'
				className={styles.explode}
				muted
				preload='auto'
				playsInline
				autoPlay
				initial={{
					opacity: 1,
				}}
				animate={{
					opacity: 0,
					transition: {
						delay: 1,
						duration: 0.3,
					},
				}}
				onAnimationComplete={() => {
					handleAnimationEnd()
				}}
			></motion.video>
			<motion.h3
				className={styles.title}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1, duration: 1 }}
			>
				<div>
					Учись в любимом
					<HeartSvg />
				</div>
				<div>
					<PizzaSvg />
					формате
					<HandsSvg />
					нужен
				</div>
				<div>
					только
					<PhoneSvg />
					смартфон
				</div>
			</motion.h3>
		</div>
	)
}
