import type { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import ArrowIcon from '../../assets/common/icons/arrow-icon.svg'

import styles from './BackButton.module.sass'

interface BackButtonProps {
	className?: string
}

export const BackButton: FC<BackButtonProps> = ({ className }) => {
	return (
		<Link className={clsx(styles.button, className)} to='/'>
			<div className={styles.icon}>
				<img src={ArrowIcon} alt='back' />
			</div>
			Назад
		</Link>
	)
}
