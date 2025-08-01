import { type FC } from 'react'
import {
	FeaturesDescription,
	type FeaturesDescriptionProps,
} from '../FeaturesDescription/FeaturesDescription'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../../../components/Container/Container'

import PhoneIcon from '../../../../../../assets/students/features/video-phone.svg?react'
import VideoTagImage from '../../../../../../assets/students/features/video-tag.svg'
// Dont delete
// import VideoPlayIcon from '../../../../../../assets/students/features/video-play.svg?react'

import EyeIcon from '../../../../../../assets/common/icons/eyes.svg?react'
import TimerIcon from '../../../../../../assets/common/icons/timer.svg?react'

import Poster from '../../../../../../assets/parents/education/poster-1.png'

import styles from './FeaturesVideo.module.sass'

interface FeaturesVideoProps {
	className?: string
}

export const FeaturesVideo: FC<FeaturesVideoProps> = ({ className }) => {
	return (
		<Container className={styles.container}>
			<div className={clsx(styles.wrapper, className)}>
				<div className={styles.left}>
					<div className={styles.textWrapper}>
						<motion.div
							initial={{ opacity: 0, y: -100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.3,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
							className={styles.title}
						>
							Смотри
						</motion.div>
						<div className={styles.text}>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.3,
										delay: 0.2,
									},
								}}
								viewport={{ once: true, amount: 0.3 }}
							>
								<div>ви</div>
								<PhoneIcon className={styles.phoneIcon} />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.3,
										delay: 0.1,
									},
								}}
								viewport={{ once: true, amount: 0.2 }}
							>
								део
							</motion.div>
							<motion.img
								className={styles.videoTag}
								src={VideoTagImage}
								alt=''
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									transition: {
										delay: 0.4,
										duration: 0.2,
									},
								}}
								viewport={{ once: true, amount: 0.3 }}
							/>
							{/* Dont delete */}
							{/* <motion.button
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									rotateZ: -8,
									transition: {
										duration: 0.3,
										delay: 0.3,
									},
								}}
								viewport={{ once: true, amount: 0.3 }}
								className={styles.button}
							>
								<VideoPlayIcon className={styles.playIcon} />
								Смотреть пример
							</motion.button> */}
						</div>
					</div>
				</div>
				<motion.div
					className={styles.center}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.5,
							delay: 0.4,
							type: 'spring',
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					<video
						className={styles.video}
						src='https://storage.yandexcloud.net/test-backet-kursnova/features-video-1.mp4'
						autoPlay
						muted
						playsInline
						preload='auto'
						poster={Poster}
					></video>
				</motion.div>
				<div className={styles.right}>
					{FEATURES_DESCRIPTIONS.map((props, index) => {
						const baseDelay = 0.1
						return (
							<FeaturesDescription
								delayIcon={baseDelay + index * 0.1}
								delayTitle={baseDelay + index * 0.2}
								delayText={baseDelay + index * 0.3}
								key={index}
								{...props}
							/>
						)
					})}
				</div>
			</div>
		</Container>
	)
}

const FEATURES_DESCRIPTIONS: FeaturesDescriptionProps[] = [
	{
		icon: <EyeIcon />,
		title: 'Более 400 видео',
		description: 'на нашей платформе',
	},
	{
		icon: <TimerIcon />,
		title: '5-10 минут',
		description: (
			<>
				длится один ролик kursnova. <br /> Ещё и на задачки остаётся!
			</>
		),
	},
]
