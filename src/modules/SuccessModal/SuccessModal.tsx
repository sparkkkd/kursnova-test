import type { FC } from 'react'
import clsx from 'clsx'
import { useAppDispatch } from '../../store/hooks'
import { setIsModalOpen, setIsModalSuccess } from '../../store/slices/uiSlice'

import SuccessImage from '../../assets/success.png'
import CloseIcon from '../../assets/close.svg?react'

import styles from './SuccessModal.module.sass'

interface SuccessModalProps {
	className?: string
}

export const SuccessModal: FC<SuccessModalProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	return (
		<div className={clsx(styles.wrapper, className)}>
			<CloseIcon
				className={styles.close}
				onClick={() => {
					dispatch(setIsModalOpen(false))
					dispatch(setIsModalSuccess(false))
				}}
			/>

			<img className={styles.img} src={SuccessImage} alt='Готово' />
			<div className={styles.title}>
				Спасибо! Ссылка на бесплатный доступ уже на почте
			</div>
			<div className={styles.text}>
				Если ничего не пришло, проверьте папку «Спам»
			</div>
			<button
				className={styles.button}
				onClick={() => {
					dispatch(setIsModalOpen(false))
					dispatch(setIsModalSuccess(false))
				}}
			>
				Отлично, спасибо
			</button>
		</div>
	)
}
