import clsx from 'clsx'
import type { ICountHover } from '../../../../../../types/sliderHoverTypes'
import { useState, type FC } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { AnimatePresence, motion } from 'framer-motion'

import { Tag } from '../../../../../../components/Tag/Tag'
import { HoverCard } from '../HoverCard/HoverCard'

import styles from './TeacherCard.module.sass'

interface TeacherCardProps {
	className?: string
	img: string
	tags: string[]
	name: string
	description: string
	info: ICountHover[]
}

export const TeacherCard: FC<TeacherCardProps> = ({
	className,
	tags,
	img,
	name,
	description,
	info,
}) => {
	const { width } = useWindowSize()
	const [isHover, setIsHover] = useState<boolean>(false)

	const [firstName, lastName] = name.split(' ')

	return (
		<>
			{width <= 600 && (
				<div className={styles.mobileInfo}>
					<div className={styles.mobileName}>{name}</div>
					<div className={styles.mobileTags}>
						{tags.map((tag, index) => (
							<Tag key={index}>{tag}</Tag>
						))}
					</div>
					<div className={styles.mobileDescription}>{description}</div>
				</div>
			)}

			<motion.div
				className={clsx(styles.card, className)}
				onHoverStart={() => setIsHover(true)}
				onHoverEnd={() => setIsHover(false)}
				onTapStart={() => setIsHover(true)}
				onTapCancel={() => setIsHover(false)}
			>
				<div
					className={styles.img}
					style={{ backgroundImage: `url(${img})` }}
				></div>
				<AnimatePresence>
					{isHover && width > 600 && (
						<HoverCard
							name={name}
							description={description}
							info={info}
							tags={tags}
						/>
					)}
				</AnimatePresence>
				<div className={styles.wrapper}>
					{width > 600 && (
						<div className={styles.name}>
							{firstName} <br /> {lastName}
						</div>
					)}

					{width > 600 && (
						<div className={styles.tags}>
							{tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</div>
					)}

					{width <= 600 && (
						<div className={styles.scoreWrapper}>
							{info.map((item, index) => (
								<div className={styles.score} key={index}>
									<div className={styles.scoreCount}>{item.count}</div>
									<div className={styles.scoreText}>{item.text}</div>
								</div>
							))}
						</div>
					)}
				</div>
			</motion.div>
		</>
	)
}
