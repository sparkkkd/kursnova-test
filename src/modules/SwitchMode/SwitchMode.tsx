import clsx from 'clsx'
import { useEffect, useRef, useState, type FC } from 'react'
import { motion } from 'framer-motion'
import {
	setIsSiderbarOpen,
	switchMode as switchModeAction,
} from '../../store/slices/uiSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useLenis } from 'lenis/react'

import styles from './SwitchMode.module.sass'

interface SwitchModeProps {
	className?: string
}

export const SwitchMode: FC<SwitchModeProps> = ({ className }) => {
	const { mode } = useAppSelector((state) => state.uiReducer)
	const dispatch = useAppDispatch()

	const parentRef = useRef<HTMLButtonElement>(null)
	const studentRef = useRef<HTMLButtonElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const [position, setPosition] = useState({ x: 0, width: 0 })

	const lenis = useLenis()

	useEffect(() => {
		const ref = mode === 'parents' ? parentRef : studentRef
		const containerRect = containerRef.current?.getBoundingClientRect()
		const rect = ref.current?.getBoundingClientRect()

		if (rect && containerRect) {
			const offsetX = rect.left - containerRect.left

			setPosition({
				x: offsetX,
				width: rect.width,
			})
		}
	}, [mode])

	const handleChangeMode = (mode: 'parents' | 'students') => {
		dispatch(switchModeAction(mode))
		dispatch(setIsSiderbarOpen(false))

		const ref = mode === 'parents' ? parentRef : studentRef
		const containerRect = containerRef.current?.getBoundingClientRect()
		const rect = ref.current?.getBoundingClientRect()

		if (rect && containerRect) {
			const offsetX = rect.left - containerRect.left

			setPosition({
				x: offsetX,
				width: rect.width,
			})
		}

		lenis?.scrollTo(0, { duration: 0, immediate: true })
	}

	return (
		<div className={clsx(styles.wrapper, className)} ref={containerRef}>
			<button
				ref={parentRef}
				className={clsx(styles.button, mode === 'parents' && styles.acive)}
				onClick={() => handleChangeMode('parents')}
			>
				Родителям
			</button>
			<button
				ref={studentRef}
				className={clsx(styles.button, mode === 'students' && styles.acive)}
				onClick={() => handleChangeMode('students')}
			>
				Ученикам
			</button>
			<motion.div
				className={styles.indicator}
				initial={{
					x: 0,
					width: parentRef.current?.getBoundingClientRect().width || 'auto',
				}}
				animate={{
					x: position.x,
					width: position.width,
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			></motion.div>
		</div>
	)
}
