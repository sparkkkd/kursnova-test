import clsx from 'clsx'
import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './ScrollDown.module.sass'

interface ScrollDownProps {
	className?: string
}

export const ScrollDown: FC<ScrollDownProps> = ({ className }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, x: '-50%' }}
			animate={{
				opacity: 1,
				y: 0,
				x: '-50%',
				transition: {
					duration: 0.3,
					delay: 0.5,
				},
			}}
			className={clsx(styles.wrapper, className)}
		>
			<button className={styles.button}>
				<img src='./scroll.svg' alt='scroll-down' />
				Скролль вниз
			</button>
		</motion.div>
	)
}
