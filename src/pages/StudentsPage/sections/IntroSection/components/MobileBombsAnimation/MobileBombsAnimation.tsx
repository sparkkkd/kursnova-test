import { useEffect, useRef, type FC } from 'react'
import clsx from 'clsx'
import lottie, {
	type AnimationItem,
	type AnimationConfigWithData,
} from 'lottie-web'

import mobileBombAnimation from './bombs-animation.json'

import styles from './MobileBombsAnimation.module.sass'

interface MobileBombsAnimationProps {
	className?: string
}

export const MobileBombsAnimation: FC<MobileBombsAnimationProps> = ({
	className,
}) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const animationRef = useRef<AnimationItem | null>(null)

	const basePath = import.meta.env.PROD
		? `${import.meta.env.BASE_URL}lottie/intro/`
		: 'public/lottie/intro/'

	useEffect(() => {
		if (!containerRef.current) return

		const config: AnimationConfigWithData = {
			container: containerRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: mobileBombAnimation,
			assetsPath: basePath,
			rendererSettings: {
				progressiveLoad: true,
				hideOnTransparent: true,
			},
		}

		animationRef.current = lottie.loadAnimation(config)
		animationRef.current.setSpeed(1)

		return () => {
			animationRef.current?.destroy()
			animationRef.current = null
		}
	}, [])

	return (
		<div
			className={clsx(styles.wrapper, className)}
			ref={containerRef}
			role='animation'
		></div>
	)
}
