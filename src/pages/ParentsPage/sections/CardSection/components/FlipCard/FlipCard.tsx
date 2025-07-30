import { useState, type FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../../../../store/hooks'
import { setIsPresentOpen } from '../../../../../../store/slices/uiSlice'

import type { ICard } from '../../constants'

import styles from './FlipCard.module.sass'

interface FlipCardProps extends ICard {
	className?: string
}

export const FlipCard: FC<FlipCardProps> = ({
	className,
	backTitle,
	emoji,
	frontTitle,
	backText,
	frontText,
	rotate,
	background,
	color,
	isPresent,
}) => {
	const [flipped, setFlipped] = useState<boolean>(false)

	const { isAlreadyPresentOpen } = useAppSelector((state) => state.uiReducer)

	const dispatch = useAppDispatch()

	return (
		<div
			className={clsx(styles.card, className)}
			onClick={(e) => {
				setFlipped((prev) => !prev)
				e.currentTarget.blur()
				e.preventDefault()

				if (isPresent && !isAlreadyPresentOpen) {
					setTimeout(() => {
						dispatch(setIsPresentOpen(true))
					}, 3000)
				}
			}}
			onPointerDown={(e) => {
				e.currentTarget.blur()
				e.preventDefault()
			}}
		>
			<div
				className={styles.inner}
				style={{
					transform: `rotateY(${flipped ? 180 : 0}deg) rotateZ(${rotate}deg)`,
				}}
			>
				<div className={clsx(styles.face, styles.front)} style={{ background }}>
					<div className={styles.frontTitle} style={{ color }}>
						{frontTitle}
					</div>
					<div className={styles.frontText} style={{ color }}>
						{frontText}
					</div>
				</div>
				<div className={clsx(styles.face, styles.back)}>
					<AnimatePresence>
						{flipped && (
							<>
								<motion.img
									initial={{ opacity: 0, y: 50 }}
									animate={{
										opacity: [0, 1, 0],
										y: [50, 0, -50],
									}}
									transition={{
										duration: 0.7,
										ease: 'linear',
									}}
									className={styles.emoji}
									src={emoji}
									alt=''
								/>
								<motion.img
									initial={{ opacity: 0, y: 50 }}
									animate={{
										opacity: [0, 1, 0],
										y: [50, 0, -50],
									}}
									transition={{
										duration: 0.7,
										ease: 'linear',
									}}
									className={styles.emoji_sm}
									src={emoji}
									alt=''
								/>
							</>
						)}
					</AnimatePresence>
					<div className={styles.backWrapper}>
						<div className={styles.backTitle}>{backTitle}</div>
						<div className={styles.backText}>{backText}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
