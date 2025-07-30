import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import styles from './HowCard.module.sass'

interface HowCardProps {
	className?: string
	img: string
	text: string
	soon?: boolean
	delayImg?: number
	delayText?: number
	delayCard?: number
}

export const HowCard: FC<HowCardProps> = ({
	className,
	img,
	text,
	soon,
	delayImg,
	delayText,
	delayCard,
}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 100,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.3,
					delay: delayCard,
				},
			}}
			viewport={{ once: true, amount: 0.3 }}
			className={clsx(styles.card, className)}
		>
			<motion.img
				className={styles.img}
				src={img}
				alt={text}
				initial={{
					opacity: 0,
					scale: 0,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 0.3,
						delay: delayImg,
					},
				}}
				viewport={{ once: true, amount: 0.3 }}
			/>
			<motion.div
				className={styles.text}
				initial={{
					opacity: 0,
					scale: 0,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 0.3,
						delay: delayText,
					},
				}}
			>
				{text}
			</motion.div>
			{soon && <div className={styles.soon}>скоро</div>}
		</motion.div>
	)
}
