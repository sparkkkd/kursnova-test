import type { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

import { SUPPORT_BUTTONS, SUPPORT_STAGES_COUNT } from '../../contants'

import styles from './StackedButtonList.module.sass'

interface StackedButtonListProps {
	className?: string
	activeStage: number
}

export const StackedButtonList: FC<StackedButtonListProps> = ({
	className,
	activeStage,
}) => {
	const getVisibleButtons = (stage: number) => {
		return [
			SUPPORT_BUTTONS[stage % SUPPORT_STAGES_COUNT],
			SUPPORT_BUTTONS[(stage + 1) % SUPPORT_STAGES_COUNT],
			SUPPORT_BUTTONS[(stage + 2) % SUPPORT_STAGES_COUNT],
		]
	}

	const visibleButtons = getVisibleButtons(activeStage)

	const scaleMap = [1, 0.9, 0.8]
	const backgroundColorMap = ['#aff26d', '#8cc257', '#699141']
	const textColorMap = ['#2a4311', '#8cc257', '#699141']

	return (
		<div className={clsx(styles.wrapper, className)}>
			<AnimatePresence mode='popLayout'>
				{visibleButtons.map((label, idx) => {
					const scale = scaleMap[idx]
					const backgroundColor = backgroundColorMap[idx]
					const color = textColorMap[idx]
					return (
						<motion.button
							className={styles.button}
							key={label}
							initial={{
								y: idx * -32,
								opacity: 0,
								scale,
							}}
							animate={{
								y: idx * 32,
								backgroundColor,
								opacity: 1,
								scale,
								color,
							}}
							exit={{
								y: -100,
								opacity: 0,
								scale: 0.5,
							}}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							style={{ zIndex: 10 - idx }}
						>
							{label}
						</motion.button>
					)
				})}
			</AnimatePresence>
		</div>
	)
}
