import type { FC } from 'react'
import clsx from 'clsx'
import { useAppDispatch } from '../../store/hooks'
import { setIsModalOpen, setIsModalSuccess } from '../../store/slices/uiSlice'

import CloseIcon from '../../assets/close.svg?react'
import SuccessImage from '../../assets/success.png'

import IphoneQrcode from '../../assets/common/footer/iphone-qrcode.svg'
import AndroidQrcode from '../../assets/common/footer/android-qrcode.svg'
import AppleLogo from '../../assets/common/icons/apple-logo.svg'
import AndroidLogo from '../../assets/common/icons/android-logo.svg'
import AppleIcon from '../../assets/common/icons/apple-logo.svg?react'
import GooglePlayIcon from '../../assets/common/icons/googleplay-icon.svg?react'

import styles from './SuccessModal.module.sass'

interface SuccessModalProps {
	className?: string
}

export const SuccessModal: FC<SuccessModalProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)

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
				Cпасибо! Осталось только скачать приложение
			</div>
			<div className={styles.text}>До новых знаний всего один шаг!</div>

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

			{/* Download button */}
			<button className={styles.downloadButton}>
				{isIOS ? <AppleIcon /> : <GooglePlayIcon />}
				Перейти в {isIOS ? 'App Store' : 'Google Play'}
			</button>
		</div>
	)
}
