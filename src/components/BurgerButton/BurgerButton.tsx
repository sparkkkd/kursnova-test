import type { FC } from 'react'

import styles from './BurgerButton.module.sass'
import clsx from 'clsx'

interface BurgerButtonProps {
	className?: string
	onClick?: () => void
}

export const BurgerButton: FC<BurgerButtonProps> = ({ className, onClick }) => {
	return (
		<button onClick={onClick} className={clsx(styles.burger, className)}>
			<div className={styles.dots}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
		</button>
	)
}
