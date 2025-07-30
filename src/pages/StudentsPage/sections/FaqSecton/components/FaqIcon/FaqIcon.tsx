import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './FaqIcon.module.sass'
import clsx from 'clsx'

interface FaqIconProps {
	className?: string
	isOpen: boolean
}

export const FaqIcon: FC<FaqIconProps> = ({ isOpen, className }) => {
	return (
		<div className={clsx(styles.icon, className)}>
			<motion.span
				className={styles.horizontal}
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			></motion.span>
			<motion.span
				className={styles.vertical}
				initial={{ rotate: 0, opacity: 1 }}
				animate={{
					rotate: isOpen ? 0 : 90,
				}}
				transition={{ duration: 0.3 }}
			></motion.span>
		</div>
	)
}
