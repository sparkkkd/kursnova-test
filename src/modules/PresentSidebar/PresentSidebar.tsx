import clsx from 'clsx'
import { useEffect, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useForm } from 'react-hook-form'
import {
	presentFormSchema,
	type presentFormValues,
} from './present-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	setIsPresentOpen,
	successPresentAction,
} from '../../store/slices/uiSlice'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'

import PresentImg from '../../assets/parents/cards/cards-sidebar-img.png'
import CloseIcon from '../../assets/close.svg?react'

import styles from './PresentSidebar.module.sass'
import { useLenis } from 'lenis/react'

interface PresentSidebarProps {
	className?: string
}

export const PresentSidebar: FC<PresentSidebarProps> = ({}) => {
	const dispatch = useAppDispatch()
	const { isPresentOpen } = useAppSelector((state) => state.uiReducer)

	const [isMounted, setIsMounted] = useState(false)

	const { width } = useWindowSize()

	const lenis = useLenis()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<presentFormValues>({
		resolver: zodResolver(presentFormSchema),
	})

	useEffect(() => {
		if (isPresentOpen) {
			setIsMounted(true)
			lenis?.stop()
		} else {
			lenis?.start()
		}
	}, [isPresentOpen])

	const handleAnimationComplete = () => {
		if (!isPresentOpen) {
			setIsMounted(false)
		}
	}

	const onSubmit = (data: presentFormValues) => {
		console.log(data)
		dispatch(successPresentAction())
	}

	if (!isMounted && !isPresentOpen) return null

	return (
		<AnimatePresence>
			{isPresentOpen && (
				<motion.div
					className={styles.overlay}
					onClick={() => dispatch(setIsPresentOpen(false))}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<button
						className={styles.close}
						onClick={() => dispatch(setIsPresentOpen(false))}
					>
						<CloseIcon className={styles.closeIcon} />
					</button>

					<motion.div
						className={styles.content}
						data-lenis-prevent
						onClick={(e) => e.stopPropagation()}
						initial={{
							x: width > 700 ? '100%' : '0%',
							y: width <= 700 ? '100%' : '0%',
						}}
						animate={{ x: '0%', y: '0%' }}
						exit={{
							x: width > 700 ? '100%' : '0%',
							y: width <= 700 ? '100%' : '0%',
						}}
						transition={{ duration: 0.3 }}
						onAnimationComplete={handleAnimationComplete}
					>
						<img className={styles.img} src={PresentImg} alt='' />

						<h4 className={styles.title}>
							Мы вас прекрасно понимаем. Поэтому дарим скидку 10% на первые два
							месяца и мини-гайд
						</h4>

						<div className={styles.captionCard}>
							<h5 className={styles.captionTitle}>
								Гайд «Ребёнок и гаджеты: как найти баланс»
							</h5>
							<span className={styles.captionText}>
								Ваш ребёнок практически живёт в телефоне, а вы не знаете, что с
								этим делать? Наш гайд — о том, как помочь ребёнку найти баланс
								между реальной и виртуальной жизнью. Покажем, как использовать
								технологии осознанно.
							</span>
						</div>

						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<input
								className={clsx(styles.input, styles.name, {
									[styles.error]: errors.name,
								})}
								type='text'
								placeholder='Имя'
								{...register('name')}
							/>
							<input
								className={clsx(styles.input, styles.phone, {
									[styles.error]: errors.phone,
								})}
								type='text'
								placeholder='Телефон'
								{...register('phone')}
							/>
							<input
								className={clsx(styles.input, styles.mail, {
									[styles.error]: errors.email,
								})}
								type='text'
								placeholder='Почта'
								{...register('email')}
							/>
							<button className={styles.button}>Забрать скидку и гайд</button>
						</form>

						<span className={styles.privacy}>
							Нажимая на кнопку, вы соглашаетесь с{' '}
							<Link to='/personal-data' target='_blank'>
								условиями
							</Link>{' '}
							сбора и обработки данных
						</span>

						<div className={styles.line} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
