import type { FC } from 'react'
import clsx from 'clsx'

import { Helmet } from 'react-helmet'

import { Container } from '../../../components/Container/Container'
import { Header } from '../../../modules/Header/Header'
import { BackButton } from '../../../components/BackButton/BackButton'

import { LIST_DATA } from './constant'

import styles from './AdsConsent.module.sass'
import '../policy.sass'

interface AdsConsentProps {
	className?: string
}

export const AdsConsent: FC<AdsConsentProps> = ({ className }) => {
	return (
		<>
			<Helmet>
				<title>
					Kursnova | Согласие на получение рекламных и информационных рассылок
				</title>
			</Helmet>

			<section className={clsx('policy-section', className)}>
				<Header />

				<Container>
					<BackButton />
					<div className='policy-wrapper'>
						<h3 className={clsx(styles.pageTitle, 'pageTitle')}>
							Согласие на получение рекламных и информационных рассылок
						</h3>

						<div className='container'>
							<p className='policy-p'>
								Проставляя отметку (символ «галочка») в поле слева от фразы «Я
								согласен на получение рекламных и информационных рассылок» на
								страницах сайта{' '}
								<a className='link tdn' href='https://kursnova.ru'>
									https://kursnova.ru/
								</a>{' '}
								(далее — Сайт), даю согласие на получение от ООО «Курснова»
								(ИНН: 1683023468, ОГРН: 1241600045015, адрес электронной почты:{' '}
								<a className='link tdn' href='mailto:hello@kursnova.com'>
									hello@kursnova.com
								</a>
								) рекламных и информационных рассылок, в том числе, но не
								ограничиваясь, содержащих информацию о товарах и услугах,
								наличии специальных предложений, акций, розыгрышей, иных
								стимулирующих мероприятий, условиях, связанных с приобретением и
								использованием указанных товаров и услуг, о проведении
								мероприятий, презентаций, предложениях партнеров, а также
								информационных рассылок, в том числе, но не ограничиваясь,
								гайдов, чек-листов, презентаций и иных материалов, путем:
							</p>

							<ul className='dottedList'>
								{LIST_DATA.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>

							<p className='policy-p'>
								Предоставляя согласие, подтверждаю, условия настоящего согласия
								мне ясны, действую по своей воле и в своем интересе, а также
								обязуюсь предоставить достоверные собственные данные. Также
								осознаю запрет на предоставление данных третьих лиц.
							</p>

							<p className='policy-p'>
								Осознаю, что настоящее согласие может быть мною отозвано в любой
								момент в течение всего срока действия настоящего согласия. Я
								вправе отозвать согласие и отписаться от получения рассылок
								путем перехода по соответствующей ссылке, указанной в рассылке,
								либо путем направления запроса на эл. почту:{' '}
								<a className='link tdn' href='mailto:hello@kursnova.ru'>
									hello@kursnova.ru
								</a>
								.
							</p>

							<p className='policy-p'>
								Мне известно, что при возникновении вопросов относительно отзыва
								согласия, а также отказа от рассылок я могу обратиться в ООО
								«Курснова» путем направления письма по адресу электронной почты:{' '}
								<a className='link tdn' href='mailto:hello@kursnova.ru'>
									hello@kursnova.ru
								</a>
								.
							</p>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
