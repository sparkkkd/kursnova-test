import ReactDOM from 'react-dom'
import { useEffect, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import CloseIcon from '../../../../../../../assets/close.svg?react'

import { PROGRESS_SIDE } from '../../../constants'

import styles from './EducationBottomBar.module.sass'

interface EducationBottomBarProps {
	isOpen: boolean
	className?: string
	setIsOpen: (isOpen: boolean) => void
}

export const EducationBottomBar: FC<EducationBottomBarProps> = ({
	isOpen,
	setIsOpen,
	className,
}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (isOpen) setIsMounted(true)
	}, [isOpen])

	const handleAnimationComplete = () => {
		if (!isOpen) {
			setIsMounted(false)
		}
	}

	if (!isMounted && !isOpen) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className={styles.modal}
					onClick={() => setIsOpen(false)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className={clsx(styles.content, className)}
						onClick={(e) => e.stopPropagation()}
						initial={{ y: '100%' }}
						animate={{ y: '0%' }}
						exit={{ y: '100%' }}
						transition={{ duration: 0.3 }}
						onAnimationComplete={handleAnimationComplete}
					>
						<button className={styles.close} onClick={() => setIsOpen(false)}>
							<CloseIcon className={styles.closeIcon} />
						</button>

						<span className={styles.caption}>Как учиться?</span>

						<div className={styles.cardWrapper}>
							{PROGRESS_SIDE.map(({ id, icon, title }) => {
								return (
									<div className={styles.card} key={id}>
										<img className={styles.icon} src={icon} alt='' />
										<div className={styles.title}>{title}</div>
									</div>
								)
							})}
						</div>

						<div className={styles.line} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('modal-root')!
	)
}
