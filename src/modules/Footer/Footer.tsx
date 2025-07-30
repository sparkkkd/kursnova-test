import { type FC } from 'react'

import { DesktopFooter } from './DesktopFooter/DesktopFooter'

import styles from './Footer.module.sass'
import { MobileFooter } from './MobileFooter/MobileFooter'

export const Footer: FC = () => {
	return (
		<footer id='footer-id'>
			<DesktopFooter className={styles.desktop} />
			<MobileFooter className={styles.mobile} />
		</footer>
	)
}
