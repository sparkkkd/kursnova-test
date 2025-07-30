import { useEffect, useLayoutEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { setIsCanAddSection } from '../../../../../../store/slices/uiSlice'
import { useAppDispatch } from '../../../../../../store/hooks'
import { useLenis } from 'lenis/react'

import { ExplodeWithHeader } from '../ExplodeWithHeader/ExplodeWithHeader'
import { TitleWithBombs } from '../TitleWithBombs/TitleWithBombs'

import styles from './DesktopIntro.module.sass'

interface DesktopIntroProps {
	className?: string
}

export const DesktopIntro: FC<DesktopIntroProps> = ({ className }) => {
	const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const introRef = useRef<HTMLDivElement>(null)

	const dispatch = useAppDispatch()

	const lenis = useLenis()

	useEffect(() => {
		const handleScroll = () => {
			if (!isScrolled && window.scrollY > 500) {
				setIsScrolled(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [isScrolled])

	useLayoutEffect(() => {
		if (!isAnimationComplete || !introRef.current) return

		requestAnimationFrame(() => {
			const rect = introRef.current!.getBoundingClientRect()
			const scrollTop = window.scrollY || document.documentElement.scrollTop
			const sectionTop = rect.top + scrollTop

			if (lenis) {
				lenis.scrollTo(sectionTop, { immediate: true, duration: 1 })
			} else {
				window.scrollTo({ top: sectionTop, behavior: 'smooth' })
			}
		})
	}, [isAnimationComplete])

	const handleAnimationEnd = () => {
		setIsAnimationComplete(true)
		dispatch(setIsCanAddSection(true))
	}

	return (
		<motion.div
			className={clsx(styles.wrapper, className)}
			ref={introRef}
			style={{ height: isAnimationComplete ? '100vh' : '300vh' }}
			initial={{ background: '#14141A' }}
			animate={{ background: isScrolled ? '#5735ff' : '#14141A' }}
			transition={{ delay: 0.1, duration: 0.3 }}
		>
			<div className={styles.stickyWrapper}>
				<div className={styles.sticky}>
					<AnimatePresence>
						{!isScrolled && (
							<motion.div
								className={clsx(styles.screen, styles.screen_1)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								<TitleWithBombs />
							</motion.div>
						)}
					</AnimatePresence>

					<AnimatePresence>
						{isScrolled && (
							<div className={clsx(styles.screen, styles.screen_2)}>
								<ExplodeWithHeader handleAnimationEnd={handleAnimationEnd} />
							</div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	)
}
