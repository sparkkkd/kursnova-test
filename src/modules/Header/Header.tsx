import clsx from 'clsx'
import { useEffect, useState, type FC } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../store/hooks'
import { setIsSiderbarOpen } from '../../store/slices/uiSlice'

import { SwitchMode } from '../SwitchMode/SwitchMode'
import { Container } from '../../components/Container/Container'
import { BurgerButton } from '../../components/BurgerButton/BurgerButton'

import styles from './Header.module.sass'

interface HeaderProps {
	className?: string
	backButton?: boolean
}

export const Header: FC<HeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<motion.div
			className={clsx(styles.wrapper)}
			animate={{ y: isVisible ? '0%' : '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<Container className={styles.container}>
				<header className={clsx(styles.header, className)}>
					<a href='/' className={styles.logo}>
						<img src='./logo.svg' alt='logo' />
					</a>
					<SwitchMode className={styles.desktopMode} />
					<div className={styles.actions}>
						<button className={styles.signin}>Войти</button>
						<BurgerButton onClick={() => dispatch(setIsSiderbarOpen(true))} />
					</div>
				</header>
			</Container>
		</motion.div>
	)
}
