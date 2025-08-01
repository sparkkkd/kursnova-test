import { type FC } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'

import { ScrollDown } from '../../../../../../components/ScrollDown/ScrollDown'

import BombImage_1 from '../../../../../../assets/students/intro/bomb-1.png'
import BombImage_2 from '../../../../../../assets/students/intro/bomb-2.png'
// import { MobileBombsAnimation } from '../MobileBombsAnimation/MobileBombsAnimation'

import styles from './TitleWithBombs.module.sass'

interface TitleWithBombsProps {
	className?: string
}

export const TitleWithBombs: FC<TitleWithBombsProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<div className={clsx(styles.wrapper, className)}>
			<div className={styles.titleWrapper}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					viewport={{ once: true, amount: 0.3 }}
					style={{ willChange: 'transform, opacity' }}
				>
					<div>{width > 530 ? 'Домашки' : 'Домашки и'}</div>
					<div>{width > 530 ? 'и контрольные' : 'контрольные'}</div>
					<div>больше</div>
					<div>не проблема</div>
					<div className={styles.tag}>С kursnova</div>

					{width <= 815 && (
						<>
							<motion.img
								className={clsx(styles.bomb, styles.bomb_1)}
								src={BombImage_1}
								alt=''
								initial={{ opacity: 0, y: '50%', rotate: 60 }}
								animate={{ opacity: 1, y: '0%', rotate: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							/>
							<motion.img
								className={clsx(styles.bomb, styles.bomb_2)}
								src={BombImage_2}
								alt=''
								initial={{ opacity: 0, y: '50%', rotate: -60 }}
								animate={{ opacity: 1, y: '0%', rotate: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
							/>
						</>
					)}
				</motion.h1>
			</div>

			{/* {width <= 815 && <MobileBombsAnimation />} */}

			{width > 815 && (
				<video className={styles.video} autoPlay muted preload='auto'>
					<source
						src='https://storage.yandexcloud.net/test-backet-kursnova/bombs-safari.mov'
						type='video/mp4; codecs=hvc1'
					/>
					<source
						src='https://storage.yandexcloud.net/test-backet-kursnova/bombs.webm'
						type='video/webm'
					/>
				</video>
			)}

			<ScrollDown className={styles.scroll} />
		</div>
	)
}
