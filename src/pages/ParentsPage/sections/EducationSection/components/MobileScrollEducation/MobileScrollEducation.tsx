import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { EducationBottomBar } from '../EducationBottomBar/EducationBottomBar/EducationBottomBar'

import { EDUCATION_VIDEOS, STAGES_LABEL } from '../../constants'

import SharkImg from '../../../../../../assets/parents/education/education-shark-mobile.png'

import styles from './MobileScrollEducation.module.sass'

interface MobileScrollEducationProps {
	activeStage: number
	classname?: string
}

export const MobileScrollEducation: FC<MobileScrollEducationProps> = ({
	activeStage,
	classname,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const videoRefs = useRef<HTMLVideoElement[]>([])

	useEffect(() => {
		videoRefs.current.forEach((video, index) => {
			if (video && index !== activeStage) {
				video.currentTime = 0
				video.pause()
			}
		})
	}, [activeStage])

	return (
		<div className={clsx(styles.content, classname)}>
			<div className={styles.top}>
				<AnimatePresence mode='wait'>
					{activeStage === 0 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>Обучающие видео</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
						</motion.div>
					)}
					{activeStage === 1 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>
								Закрепляем знания <br /> на тренажёрах
							</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
						</motion.div>
					)}
					{activeStage === 2 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>Отслеживаем прогресс</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
							<button onClick={() => setIsOpen(true)} className={styles.button}>
								Подробнее
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className={styles.bottom}>
				{/* Shark */}
				<motion.img
					initial={{
						opacity: 0,
						x: '100%',
						y: '50%',
					}}
					animate={{
						opacity: 1,
						x: activeStage === 1 ? '0%' : '100%',
						y: '50%',
					}}
					transition={{ duration: 0.3, delay: 0.2 }}
					className={styles.shark}
					src={SharkImg}
					alt=''
				/>
				<motion.div className={styles.videoWrapper}>
					<AnimatePresence mode='wait'>
						{activeStage === 0 && (
							<motion.div
								className={clsx(styles.videoContainer)}
								key={EDUCATION_VIDEOS[activeStage].id}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ duration: 0.3 }}
							>
								<video
									className={clsx(styles.video, styles.video_0)}
									preload='auto'
									playsInline
									autoPlay
									muted
									loop
									poster={EDUCATION_VIDEOS[activeStage].poster}
								>
									<source src={EDUCATION_VIDEOS[activeStage].src} />
								</video>
							</motion.div>
						)}

						{activeStage === 1 && (
							<motion.div
								className={clsx(styles.videoContainer)}
								key={EDUCATION_VIDEOS[activeStage].id}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ duration: 0.3 }}
							>
								<video
									className={clsx(styles.video)}
									preload='auto'
									playsInline
									autoPlay
									muted
									loop
									poster={EDUCATION_VIDEOS[activeStage].poster}
								>
									<source src={EDUCATION_VIDEOS[activeStage].src} />
								</video>
							</motion.div>
						)}

						{activeStage === 2 && (
							<motion.div
								className={clsx(styles.videoContainer)}
								key={EDUCATION_VIDEOS[activeStage].id}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ duration: 0.3 }}
							>
								<video
									className={clsx(styles.video)}
									preload='auto'
									playsInline
									autoPlay
									muted
									loop
									poster={EDUCATION_VIDEOS[activeStage].poster}
								>
									<source src={EDUCATION_VIDEOS[activeStage].src} />
								</video>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>

			<EducationBottomBar isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}
