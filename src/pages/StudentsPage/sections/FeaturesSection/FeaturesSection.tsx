import clsx from 'clsx'
import { type FC } from 'react'

import { FeaturesText } from './components/FeaturesText/FeaturesText'
import { FeaturesVideo } from './components/FeaturesVideo/FeaturesVideo'
import { FeaturesTask } from './components/FeaturesTask/FeaturesTask'

import styles from './FeaturesSection.module.sass'

interface FeturesSectionProps {
	className?: string
}

export const FeaturesSection: FC<FeturesSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.features, className)}>
			<FeaturesText />
			<FeaturesVideo />
			<FeaturesTask />
		</section>
	)
}
