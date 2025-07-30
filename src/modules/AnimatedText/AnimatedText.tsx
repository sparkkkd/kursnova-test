import { useRef, type FC, type PropsWithChildren } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import styles from './AnimatedText.module.sass'
import clsx from 'clsx'

interface AnimatedTextProps {
	className?: string
	wordsClassName?: string
	text: string
	progress?: any
}

export const AnimatedText: FC<AnimatedTextProps> = ({
	className,
	text,
	progress,
}) => {
	const element = useRef(null)

	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start 0.9', 'start start'],
	})

	const effectiveProgress = progress ?? scrollYProgress

	const words = text.split(' ')

	return (
		<motion.h2 className={className} ref={element}>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length
				return (
					<Word key={i} range={[start, end]} progress={effectiveProgress}>
						{word}
					</Word>
				)
			})}
		</motion.h2>
	)
}

interface WordProps {
	wordsClassName?: string
	range: [start: number, end: number]
	progress: any
	children: string
}

const Word: FC<WordProps> = ({ wordsClassName, children, range, progress }) => {
	const characters = children.split('')
	const amount = range[1] - range[0]
	const step = amount / children.length

	return (
		<span className={clsx(styles.word, wordsClassName)}>
			{characters.map((char, i) => {
				const start = range[0] + step * i
				const end = range[0] + step * (i + 1)
				return (
					<Character key={i} range={[start, end]} progress={progress}>
						{char}
					</Character>
				)
			})}
		</span>
	)
}

interface CharacterProps extends PropsWithChildren {
	range: [start: number, end: number]
	progress: any
}

const Character: FC<CharacterProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1])

	return (
		<span>
			<span className={styles.shadow}>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	)
}
