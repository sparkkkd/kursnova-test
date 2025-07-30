import type { FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { FaqIcon } from '../FaqIcon/FaqIcon'

import styles from './FaqItem.module.sass'

interface FaqItemProps {
	className?: string
	question: string
	answer: string
	isOpen: boolean
	onToggle: () => void
}

export const FaqItem: FC<FaqItemProps> = ({
	className,
	answer,
	question,
	isOpen,
	onToggle,
}) => {
	return (
		<li className={clsx(styles.item, className)}>
			<button
				className={clsx(styles.question, { [styles.open]: isOpen })}
				onClick={onToggle}
			>
				<span>{question}</span>
				<FaqIcon className={styles.icon} isOpen={isOpen} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.answer}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<div className={styles.answerInner}>{answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	)
}
