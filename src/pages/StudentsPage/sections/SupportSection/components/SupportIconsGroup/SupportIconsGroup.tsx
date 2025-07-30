import type { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './SupportIconsGroup.module.sass'
import clsx from 'clsx'

interface SupportIconsGroupProps {
	className?: string
	activeStage: number
	images: string[]
}

export const SupportIconsGroup: FC<SupportIconsGroupProps> = ({
	className,
	images,
	activeStage,
}) => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div className={clsx(styles.wrapper, className)} key={activeStage}>
				{images.map((src, idx) => (
					<motion.img
						key={src}
						className={clsx(
							styles.icon,
							styles[`icon_${activeStage + 1}_${idx + 1}`]
						)}
						src={src}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{
							duration: 0.1,
							type: 'spring',
							damping: 30,
							stiffness: 800,
						}}
					/>
				))}
			</motion.div>
		</AnimatePresence>
	)
}
