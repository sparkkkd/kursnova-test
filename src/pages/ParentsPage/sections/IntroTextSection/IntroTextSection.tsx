import { useRef, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, motion, useTransform } from 'framer-motion'

import { AnimatedText } from '../../../../modules/AnimatedText/AnimatedText'
import { Container } from '../../../../components/Container/Container'

import CoffeeImg from '../../../../assets/parents/intro-text/coffe-img.png'
import Marshmallow_1 from '../../../../assets/parents/intro-text/marshmallow-1.png'
import Marshmallow_2 from '../../../../assets/parents/intro-text/marshmallow-2.png'
import Marshmallow_3 from '../../../../assets/parents/intro-text/marshmallow-3.png'

import styles from './IntroTextSection.module.sass'

interface IntroTextSectionProps {
	className?: string
}

export const IntroTextSection: FC<IntroTextSectionProps> = ({ className }) => {
	const titleText =
		'Kursnova — образовательная платформа с новым подходом. Мы знаем, как дети любят игры и соцсети, поэтому интегрируем их в образование'

	const subtitleText = 'Наливайте что-нибудь вкусное, сейчас мы всё расскажем'

	const sectionRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	const titleProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
	const titleY = useTransform(scrollYProgress, [0, 0.3], [300, 100])

	const subtitleProgress = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
	const subtitleY = useTransform(scrollYProgress, [0.3, 0.6], ['50%', '0%'])
	const subTitleOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

	const imageY = useTransform(scrollYProgress, [0.4, 0.8], ['10%', '-18%'])
	const imageOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])

	const marshmallow_1Y = useTransform(
		scrollYProgress,
		[0.4, 1],
		['80%', '-100%']
	)
	const marshmallow_2Y = useTransform(
		scrollYProgress,
		[0.4, 1],
		['20%', '-100%']
	)
	const marshmallow_3Y = useTransform(
		scrollYProgress,
		[0.4, 1],
		['50%', '-50%']
	)

	return (
		<div className={styles.wrapper} ref={sectionRef} id='about'>
			<section className={clsx(styles.section, className)}>
				<Container className={styles.container}>
					<motion.div className={styles.titleWrapper} style={{ y: titleY }}>
						<AnimatedText
							progress={titleProgress}
							text={titleText}
							className={styles.title}
						/>
					</motion.div>

					<motion.div
						style={{ y: subtitleY, opacity: subTitleOpacity }}
						className={styles.subtitleWrapper}
					>
						<AnimatedText
							text={subtitleText}
							progress={subtitleProgress}
							className={clsx(styles.title, styles.subtitle)}
						/>
					</motion.div>

					<motion.div
						className={styles.cofeeWrapper}
						style={{ opacity: imageOpacity, y: imageY }}
					>
						<motion.img className={styles.coffeeImg} src={CoffeeImg} alt='' />
						<motion.img
							className={clsx(styles.marshmallow, styles.marshmallow_1)}
							src={Marshmallow_1}
							alt=''
							style={{ y: marshmallow_1Y }}
						/>
						<motion.img
							className={clsx(styles.marshmallow, styles.marshmallow_2)}
							src={Marshmallow_2}
							alt=''
							style={{ y: marshmallow_2Y }}
						/>
						<motion.img
							className={clsx(styles.marshmallow, styles.marshmallow_3)}
							src={Marshmallow_3}
							alt=''
							style={{ y: marshmallow_3Y }}
						/>
					</motion.div>
				</Container>
			</section>
		</div>
	)
}
