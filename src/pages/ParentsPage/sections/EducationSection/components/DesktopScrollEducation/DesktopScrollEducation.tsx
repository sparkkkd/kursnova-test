import { type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { Container } from '../../../../../../components/Container/Container'

import SharkImg from '../../../../../../assets/parents/education/education-shark.png'
import PlayIcon from '../../../../../../assets/common/icons/play-icon.svg'

import {
	EDUCATION_VIDEOS,
	PROGRESS_SIDE,
	STAGES_LABEL,
	VIDEO_SIDE,
} from '../../constants'

import styles from './DesktopScrollEducation.module.sass'

interface DesktopScrollEducationProps {
	className?: string
	activeStage: number
}

export const DesktopScrollEducation: FC<DesktopScrollEducationProps> = ({
	className,
	activeStage,
}) => {
	return (
		<Container className={clsx(styles.wrapper, className)}>
			<div className={styles.content}>
				<div className={styles.left}>
					{STAGES_LABEL.map(({ id, title, text }, i) => {
						return (
							<motion.div layout className={styles.stage} key={id}>
								<motion.div
									className={styles.stageIndicator}
									initial={{
										backgroundColor: '#25252b',
									}}
									animate={{
										backgroundColor: activeStage === i ? '#aff26d' : '#25252b',
									}}
								/>
								<motion.div layout className={styles.stageContent}>
									<motion.h5
										className={styles.stageTitle}
										initial={{ color: '#25252b' }}
										animate={{
											color: activeStage === i ? '#fff' : '#25252b',
										}}
									>
										{title}
									</motion.h5>
									<AnimatePresence mode='wait'>
										{activeStage === i && (
											<motion.div
												className={styles.stageText}
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												layout
											>
												{text}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</motion.div>
						)
					})}
				</div>

				<div className={styles.center}>
					<AnimatePresence mode='wait'>
						{activeStage === 0 && (
							<motion.video
								className={styles.video}
								key={activeStage}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.3 }}
								preload='auto'
								playsInline
								autoPlay
								muted
								poster={EDUCATION_VIDEOS[activeStage].poster}
							>
								<source
									src={EDUCATION_VIDEOS[activeStage].src}
									type='video/mp4'
								/>
							</motion.video>
						)}

						{activeStage === 1 && (
							<motion.video
								className={clsx(styles.video)}
								key={activeStage}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.3 }}
								preload='auto'
								playsInline
								autoPlay
								muted
								poster={EDUCATION_VIDEOS[activeStage].poster}
							>
								<source
									src={EDUCATION_VIDEOS[activeStage].src}
									type='video/mp4'
								/>
							</motion.video>
						)}

						{activeStage === 2 && (
							<motion.video
								className={styles.video}
								key={activeStage}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.3 }}
								preload='auto'
								playsInline
								autoPlay
								muted
								poster={EDUCATION_VIDEOS[activeStage].poster}
							>
								<source
									src={EDUCATION_VIDEOS[activeStage].src}
									type='video/mp4'
								/>
							</motion.video>
						)}
					</AnimatePresence>
				</div>

				<div className={styles.right}>
					<AnimatePresence mode='wait'>
						{activeStage === 0 && (
							<motion.div
								key={activeStage}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.3 }}
								className={styles.videoWrapper}
							>
								{VIDEO_SIDE.map(({ id, icon, title, text }) => {
									return (
										<motion.div className={styles.videoCard} key={id}>
											<img className={styles.videoIcon} src={icon} alt='' />
											<div className={styles.videoTitle}>{title}</div>
											<div className={styles.videoText}>{text}</div>
										</motion.div>
									)
								})}

								<button className={styles.videoButton}>
									<img src={PlayIcon} alt='' />
									<div>Смотреть пример</div>
								</button>
							</motion.div>
						)}

						{activeStage === 1 && (
							<div className={styles.sharkWrapper}>
								<motion.img
									key={activeStage}
									src={SharkImg}
									className={styles.shark}
									alt=''
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -50 }}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}
								/>
							</div>
						)}

						{activeStage === 2 && (
							<motion.div
								className={styles.progressWrapper}
								key={activeStage}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.3 }}
							>
								{PROGRESS_SIDE.map(({ id, icon, title }) => (
									<div className={styles.progressCard} key={id}>
										<img className={styles.progressIcon} src={icon} alt='' />

										<div className={styles.progressTitle}>{title}</div>
									</div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</Container>
	)
}
