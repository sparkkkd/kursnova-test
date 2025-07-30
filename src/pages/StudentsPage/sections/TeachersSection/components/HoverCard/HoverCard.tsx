import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import type { ICountHover } from '../../../../../../types/sliderHoverTypes'

import { Tag } from '../../../../../../components/Tag/Tag'
import { ScoreInfo } from '../ScoreInfo/ScoreInfo'

import styles from './HoverCard.module.sass'

interface HoverCardProps {
	className?: string
	name: string
	tags: string[]
	description: string
	info: ICountHover[]
}

export const HoverCard: FC<HoverCardProps> = ({
	description,
	info,
	tags,
	name,
	className,
}) => {
	return (
		<motion.div
			className={clsx(styles.wrapper, className)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={styles.name}>{name}</div>
			<div className={styles.tags}>
				{tags.map((tag, index) => (
					<Tag key={index}>{tag}</Tag>
				))}
			</div>
			<div className={styles.description}>{description}</div>

			<div className={styles.scoreInfo}>
				{info.map((item, index) => (
					<ScoreInfo
						key={index}
						className={styles.scoreInfoItem}
						scoreCount={item.count}
						scoreText={item.text}
					/>
				))}
			</div>
		</motion.div>
	)
}
