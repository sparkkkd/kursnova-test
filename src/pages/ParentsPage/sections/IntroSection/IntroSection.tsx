import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'

import IntroImg from '../../../../assets/parents/intro/intro-img.png'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const [isVideoReady, setIsVideoReady] = useState<boolean>(false)
	const videoRef = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		if (videoRef.current) {
			setIsVideoReady(false)
			videoRef.current.load()
		}
	}, [])

	return (
		<section className={clsx(styles.intro, className)}>
			<Container className={styles.wrapper}>
				<motion.h2
					className={styles.title}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div>Берём заботу</div>
					<div>о домашках</div>
					<div>на себя</div>
				</motion.h2>
				<button className={styles.button}>Попробовать за 0 ₽</button>
			</Container>

			<motion.video
				className={styles.video}
				ref={videoRef}
				autoPlay
				muted
				preload='auto'
				playsInline
				initial={{ opacity: 0, y: 100 }}
				animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				onCanPlay={() => setIsVideoReady(true)}
			>
				<source
					src='https://storage.yandexcloud.net/test-backet-kursnova/parents-intro-video-safari.mov'
					type='video/mp4; codecs=hvc1'
				/>
				<source
					src='https://storage.yandexcloud.net/test-backet-kursnova/parents-intro-video.webm'
					type='video/webm'
				/>
			</motion.video>

			<motion.div
				className={styles.imageWrapper}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.4 }}
			>
				<img className={styles.mobileImg} src={IntroImg} alt='' />
			</motion.div>
		</section>
	)
}
