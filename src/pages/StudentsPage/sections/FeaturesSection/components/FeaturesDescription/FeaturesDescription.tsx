import type { FC, JSX } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import styles from './FeaturesDescription.module.sass'

export interface FeaturesDescriptionProps {
	className?: string
	icon: JSX.Element
	title: string
	description: string | JSX.Element
	delayIcon?: number
	delayTitle?: number
	delayText?: number
}

export const FeaturesDescription: FC<FeaturesDescriptionProps> = ({
	className,
	icon,
	title,
	description,
	delayIcon,
	delayText,
	delayTitle,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<motion.div
				className={styles.icon}
				initial={{ opacity: 0, y: -100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
						delay: delayIcon,
					},
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				{icon}
			</motion.div>
			<motion.div
				className={styles.title}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
						delay: delayTitle,
					},
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				{title}
			</motion.div>
			<motion.div
				className={styles.description}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
						delay: delayText,
					},
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				{description}
			</motion.div>
		</div>
	)
}
