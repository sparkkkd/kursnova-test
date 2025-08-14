import type { FC } from 'react'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tryFormSchema, type tryFormValues } from './tryForm.schema'
import { useAppDispatch } from '../../store/hooks'
import { setIsModalOpen, setIsModalSuccess } from '../../store/slices/uiSlice'

import { InputMask } from '@react-input/mask'

import CloseIcon from '../../assets/close.svg?react'

import styles from './TryForm.module.sass'
import { Link } from 'react-router-dom'

interface TryFormProps {
	className?: string
}

export const TryForm: FC<TryFormProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<tryFormValues>({
		resolver: zodResolver(tryFormSchema),
		defaultValues: {
			name: '',
			phone: '',
			role: undefined,
		},
	})

	const selectedRole = watch('role')

	const onSubmit = (data: tryFormValues) => {
		console.log(data)
		dispatch(setIsModalSuccess(true))
	}

	return (
		<form
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<button
				type='button'
				onClick={() => dispatch(setIsModalOpen(false))}
				className={styles.close}
			>
				<CloseIcon />
			</button>

			<div className={styles.line} />

			<div className={styles.title}>Введите данные</div>

			<div className={styles.fields}>
				<div className={styles.field}>
					<input
						type='text'
						className={styles.input}
						{...register('name')}
						placeholder='Имя'
					/>
					{errors.name && (
						<span className={styles.error}>{errors.name.message}</span>
					)}
				</div>

				<div className={styles.field}>
					<InputMask
						mask='+7 (___) ___ __ __'
						replacement={{ _: /\d/ }}
						{...register('phone')}
						className={styles.input}
						placeholder='Телефон'
					/>
					{errors.phone && (
						<span className={styles.error}>{errors.phone.message}</span>
					)}
				</div>
			</div>

			<div className={styles.checkboxes}>
				<label
					className={clsx(styles.checkbox, {
						[styles.active]: selectedRole === 'parent',
					})}
				>
					<input
						className={styles.hidden}
						type='radio'
						checked={selectedRole === 'parent'}
						onChange={() => setValue('role', 'parent')}
					/>
					<div className={styles.outer}>
						<div className={styles.inner}></div>
					</div>
					Я родитель
				</label>

				<label
					className={clsx(styles.checkbox, {
						[styles.active]: selectedRole === 'student',
					})}
				>
					<input
						className={styles.hidden}
						type='radio'
						checked={selectedRole === 'student'}
						onChange={() => setValue('role', 'student')}
					/>
					<div className={styles.outer}>
						<div className={styles.inner}></div>
					</div>
					Я ученик
				</label>
			</div>

			{errors.role && (
				<span className={clsx(styles.error, styles.errorRole)}>
					{errors.role.message}
				</span>
			)}

			<button className={styles.button} type='submit'>
				Получить бесплатный доступ
			</button>

			<span className={styles.privacy}>
				Нажимая на кнопку, вы соглашаетесь с{' '}
				<Link to='/personal-data' target='_blank'>
					условиями
				</Link>{' '}
				сбора и обработки данных
			</span>
		</form>
	)
}
