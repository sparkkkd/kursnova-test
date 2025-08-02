import { type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { LICENSE_ITEMS } from '../constants'

import styles from './FooterLicense.module.sass'
import { Link } from 'react-router-dom'

interface FooterLicenseProps {
	className?: string
	isMobile: boolean
}

export const FooterLicense: FC<FooterLicenseProps> = ({
	className,
	isMobile,
}) => {
	return (
		<motion.ul
			className={clsx(styles.list, className)}
			initial={!isMobile ? { opacity: 0 } : { opacity: 0, y: 100 }}
			whileInView={!isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true, amount: 0.5 }}
		>
			{LICENSE_ITEMS.map(({ path, title }, index) => {
				return (
					<motion.li key={index} className={styles.item}>
						<Link to={path}>{title}</Link>
					</motion.li>
				)
			})}
		</motion.ul>
	)
}
