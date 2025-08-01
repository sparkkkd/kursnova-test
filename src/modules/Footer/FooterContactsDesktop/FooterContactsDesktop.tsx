import type { FC } from 'react'
import clsx from 'clsx'

import IphoneQrcode from '../../../assets/common/footer/iphone-qrcode.svg'
import AndroidQrcode from '../../../assets/common/footer/android-qrcode.svg'
import AppleLogo from '../../../assets/common/icons/apple-logo.svg'
import AndroidLogo from '../../../assets/common/icons/android-logo.svg'

import styles from './FooterContactsDesktop.module.sass'

interface FooterContactsDesktopProps {
	className?: string
}

export const FooterContactsDesktop: FC<FooterContactsDesktopProps> = ({
	className,
}) => {
	return (
		<div className={clsx(styles.contacts, className)}>
			<div className={styles.title}>Связаться с нами</div>
			<a href='mailto:hello@kursnova.com' className={styles.mail}>
				hello@kursnova.com
			</a>
			<div className={styles.buttons}>
				<button className={styles.button}>WhatsApp</button>
				<button className={styles.button}>Телеграм</button>
			</div>

			<div className={styles.title}>Скачать приложение kursnova</div>
			<div className={styles.qrcodes}>
				<div className={styles.qrcode}>
					<img
						className={styles.qrcodeImg}
						src={IphoneQrcode}
						alt='IphoneQrcode'
					/>
					<div className={styles.qrcodeSubtitle}>
						<img src={AppleLogo} alt='AppleLogo' />
						для iPhone
					</div>
				</div>
				<div className={styles.qrcode}>
					<img
						className={styles.qrcodeImg}
						src={AndroidQrcode}
						alt='AndroidQrcode'
					/>
					<div className={styles.qrcodeSubtitle}>
						<img src={AndroidLogo} alt='AndroidLogo' />
						для android
					</div>
				</div>
			</div>
		</div>
	)
}
