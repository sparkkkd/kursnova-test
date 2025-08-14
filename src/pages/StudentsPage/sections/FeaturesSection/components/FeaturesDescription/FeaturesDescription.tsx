import type { FC, JSX } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import styles from './FeaturesDescription.module.sass'

export interface FeaturesDescriptionProps {
	className?: string
	icon: JSX.Element
	title: string
	description: string | JSX.Element
}

export const FeaturesDescription: FC<FeaturesDescriptionProps> = ({
	className,
	icon,
	title,
	description,
}) => {
	return (
		<motion.div
			className={clsx(styles.wrapper, className)}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: false, amount: 0.3 }}
		>
			<motion.div className={styles.icon}>{icon}</motion.div>
			<motion.div className={styles.title}>{title}</motion.div>
			<motion.div className={styles.description}>{description}</motion.div>
		</motion.div>
	)
}
