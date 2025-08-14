import { useEffect, useState, type FC } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsModalOpen, setIsModalSuccess } from '../../store/slices/uiSlice'
import { useWindowSize } from 'usehooks-ts'

import styles from './Modal.module.sass'
import { useLenisScrollLock } from '../../hooks/useLenisScrollLock'

interface ModalProps extends React.PropsWithChildren {
	className?: string
}

export const Modal: FC<ModalProps> = ({ className, children }) => {
	const [isMounted, setIsMounted] = useState(false)

	const dispatch = useAppDispatch()
	const { isModalOpen } = useAppSelector((state) => state.uiReducer)

	const { width } = useWindowSize()

	const { lock, unlock } = useLenisScrollLock()

	useEffect(() => {
		if (isModalOpen) {
			setIsMounted(true)
			lock()
		} else {
			unlock()
		}
	}, [isModalOpen])

	const handleAnimationComplete = () => {
		if (!isModalOpen) {
			setIsMounted(false)
		}
	}

	if (!isMounted && !isModalOpen) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isModalOpen && (
				<motion.div
					className={clsx(styles.overlay)}
					onClick={() => {
						dispatch(setIsModalOpen(false))
						dispatch(setIsModalSuccess(false))
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className={clsx(styles.content, className)}
						onClick={(e) => e.stopPropagation()}
						initial={{
							opacity: 0,
							y: 100,
						}}
						animate={{ opacity: 1, y: 0, x: 0 }}
						exit={{
							opacity: 0,
							y: width > 600 ? -100 : 100,
						}}
						transition={{ duration: 0.3 }}
						onAnimationComplete={handleAnimationComplete}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('modal-root')!
	)
}
