import type { FC } from 'react'
import clsx from 'clsx'

import CardBackground from '../../../assets/common/footer/card-bg.png'

import styles from './FooterCard.module.sass'

interface FooterCardProps {
	className?: string
	backgroundImage?: string
}

export const FooterCard: FC<FooterCardProps> = ({
	className,
	backgroundImage,
}) => {
	return (
		<div
			className={clsx(styles.card, className)}
			style={{
				backgroundImage: `url(${
					backgroundImage ? backgroundImage : CardBackground
				})`,
			}}
		>
			<div className={styles.title}>vkurse</div>
			<div className={styles.text}>
				В курсе — наше медиа <br /> для небезразличных родителей
			</div>
			<div className={styles.links}>
				<a className={styles.link} href='#'>
					Телеграм
				</a>
				<a className={styles.link} href='#'>
					Вконтакте
				</a>
			</div>
		</div>
	)
}
