import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { FooterCard } from '../FooterCard/FooterCard'
import { FooterLicense } from '../FooterLicense/FooterLicense'

import Eurica from '../../../assets/common/footer/eurica.png'
import Horse from '../../../assets/common/footer/horse.png'
import Circle from '../../../assets/common/footer/circle.png'
import Bot from '../../../assets/common/footer/bot.png'
import Shark from '../../../assets/common/footer/shark.png'
import GreenBall from '../../../assets/common/footer/green-ball.png'
import Star from '../../../assets/common/footer/star.png'

import styles from './DesktopFooter.module.sass'
import { FooterContactsDesktop } from '../FooterContactsDesktop/FooterContactsDesktop'

interface FooterProps {
	className?: string
}

export const DesktopFooter: FC<FooterProps> = ({ className }) => {
	const footerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const [contentWidth, setContentWidth] = useState(0)
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

	useEffect(() => {
		const updateSizes = () => {
			setViewportWidth(window.innerWidth)
			if (contentRef.current) {
				setContentWidth(contentRef.current.scrollWidth)
			}
		}

		updateSizes()
		window.addEventListener('resize', updateSizes)
		return () => window.removeEventListener('resize', updateSizes)
	}, [])

	const maxShift = Math.max(contentWidth - viewportWidth, 0)

	const { scrollYProgress } = useScroll({
		target: footerRef,
		offset: ['start start', 'end end'],
	})

	const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${maxShift}px`])

	return (
		<div ref={footerRef} className={clsx(styles.footer, className)}>
			<div className={styles.sticky}>
				<motion.div
					style={{ x }}
					ref={contentRef}
					className={styles.horizontalScroll}
				>
					<div className={styles.title}>
						<h2>
							<span>Учиться</span>
							<span>по-новому</span>
							<span>с</span>
							<span>kursnova</span>
						</h2>
						<img className={styles.eurica} src={Eurica} alt='Eurica' />
						<img className={styles.circle} src={Circle} alt='Circle' />
						<img className={styles.horse} src={Horse} alt='Horse' />
						<img className={styles.bot} src={Bot} alt='Bot' />
						<img className={styles.greenBall} src={GreenBall} alt='GreenBall' />
						<img className={styles.shark} src={Shark} alt='Shark' />
						<img className={styles.star} src={Star} alt='Star' />
					</div>
					<div className={styles.screen}>
						<div className={styles.screenTop}>
							<FooterCard className={styles.card} />
							<FooterContactsDesktop className={styles.contacts} />
						</div>

						<FooterLicense isMobile={false} className={styles.license} />

						<div className={styles.copyright}>© ООО «КУРСНОВА»</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
