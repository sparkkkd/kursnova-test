import type { FC } from 'react'
import clsx from 'clsx'

import { AnimatedText } from '../../../../modules/AnimatedText/AnimatedText'

import styles from './WeUnderstand.module.sass'

interface WeUnderstandProps {
	className?: string
}

export const WeUnderstand: FC<WeUnderstandProps> = ({ className }) => {
	const text =
		'Мы понимаем вас. Поэтому разработали kursnova в команде с опытными учителями и методологами'

	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.wrapper}>
				<AnimatedText className={styles.title} text={text} />
			</div>
		</section>
	)
}
