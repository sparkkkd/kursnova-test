import clsx from 'clsx'
import { useEffect, useRef, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './TryButton.module.sass'
import { useWindowSize } from 'usehooks-ts'

interface TryButtonProps {
	className?: string
	onClick?: () => void
}

export const TryButton: FC<TryButtonProps> = ({ className, onClick }) => {
	const { width } = useWindowSize()

	const [isFooterVisible, setIsFooterVisible] = useState(false)
	const footerRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const footer = document.querySelector('#footer-id') as HTMLElement

		if (!footer) return

		footerRef.current = footer

		const footerObserver = new IntersectionObserver(
			([entry]) => {
				setIsFooterVisible(entry.isIntersecting)
			},
			{
				root: null,
				threshold: 0.1,
			}
		)

		footerObserver.observe(footer)

		return () => {
			footerObserver.disconnect()
		}
	}, [])

	const isVisible = !isFooterVisible

	return (
		<AnimatePresence>
			{isVisible && width > 600 && (
				<motion.button
					className={clsx(styles.button, className)}
					onClick={onClick}
					initial={{ opacity: 0, y: 100, x: '-50%' }}
					animate={{ opacity: 1, y: 0, x: '-50%' }}
					exit={{ opacity: 0, y: 100, x: '-50%' }}
					transition={{ duration: 0.3 }}
				>
					Попробовать за 0 ₽
				</motion.button>
			)}
		</AnimatePresence>
	)
}
