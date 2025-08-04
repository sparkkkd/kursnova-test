import type { FC } from 'react'
import clsx from 'clsx'

import { Helmet } from 'react-helmet'

import { Container } from '../../../components/Container/Container'
import { Header } from '../../../modules/Header/Header'
import { BackButton } from '../../../components/BackButton/BackButton'

import { LIST_DATA } from './constant'

import '../policy.sass'

interface CookieConsentProps {
	className?: string
}

export const CookieConsent: FC<CookieConsentProps> = ({ className }) => {
	return (
		<>
			<Helmet>
				<title>Kursnova | Условия использования файлов cookie</title>
			</Helmet>

			<section className={clsx('policy-section', className)}>
				<Header />

				<Container>
					<BackButton />
					<div className='policy-wrapper'>
						<h3 className='pageTitle'>Условия использования файлов cookie</h3>

						<div className='container'>
							<p className='policy-p' style={{ marginBottom: '40px' }}>
								Дата утверждения: 15.04.2025 г.
							</p>

							<p className='policy-p'>
								На всех сервисах сайта https://kursnova.ru/ и его поддоменах
								(далее — Сайт) используются файлы cookie.
							</p>

							<p className='policy-p'>
								Файлы cookie — это небольшие текстовые файлы, которые после
								просмотра Пользователем фрагментов Сайта сохраняются на его
								устройстве.
							</p>

							<p className='policy-p'>
								Использование файлов cookie позволяет ООО «Курснова» (далее –
								Оператор) контролировать доступность сервисов Сайта,
								анализировать данные, а также понимать, как развивать наши
								сервисы.
							</p>

							<p className='policy-p'>
								На сервисах Сайта используются следующие типы файлов cookie:
							</p>

							<ul className='numeric-list'>
								{LIST_DATA.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>

							<p className='policy-p'>
								Срок хранения файлов cookie зависит от конкретного типа, но в
								любом случае не превышает срока, необходимого для достижения
								целей обработки персональных данных.
							</p>

							<p className='policy-p'>
								При посещении Сайта Оператор запрашивает согласие Пользователя
								на использование файлов cookie.
							</p>

							<p className='policy-p'>
								Для прекращения обработки файлов cookie Пользователь может
								изменить настройки используемых браузеров на всех устройствах
								(компьютер, мобильные устройства).{' '}
							</p>

							<p className='policy-p'>
								ВАЖНО: при отказе от использования файлов cookie отдельные
								функции Сайта могут быть недоступными, что повлияет на
								возможность использования Сайта.
							</p>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
