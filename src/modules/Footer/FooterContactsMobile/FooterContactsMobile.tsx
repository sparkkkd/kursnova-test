import type { FC } from 'react'

import styles from './FooterContactsMobile.module.sass'
import clsx from 'clsx'

interface FooterContactsMobileProps {
	className?: string
}

export const FooterContactsMobile: FC<FooterContactsMobileProps> = ({
	className,
}) => {
	return (
		<div className={clsx(styles.contacts, className)}>
			<div className={styles.title}>Связаться с нами</div>
			<a href='mailto:hello@kursnova.com' className={styles.mail}>
				hello@kursnova.com
			</a>
			<div className={styles.links}>
				<a href='#' className={styles.link}>
					WhatsApp
				</a>
				<a href='#' className={styles.link}>
					Телеграм
				</a>
			</div>
		</div>
	)
}
