import type { FC } from 'react'
import clsx from 'clsx'

import { Helmet } from 'react-helmet'

import { Header } from '../../../modules/Header/Header'
import { Container } from '../../../components/Container/Container'
import { BackButton } from '../../../components/BackButton/BackButton'

import { TABLE_DATA } from './constant'

import '../policy.sass'
import { useWindowSize } from 'usehooks-ts'

interface PersonalDataProps {
	className?: string
}

export const PersonalData: FC<PersonalDataProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<>
			<Helmet>
				<title>Kursnova | Согласие на обработку персональных данных</title>
			</Helmet>

			<section className={clsx('policy-section', className)}>
				<Header />
				<Container>
					<BackButton />
					<div className='policy-wrapper'>
						<h3 className='pageTitle'>
							Согласие на обработку персональных данных
						</h3>
						<div className='container'>
							<p className='policy-p'>
								Настоящим я — полностью дееспособный гражданин, действуя
								свободно, своей волей и в своем интересе (далее — «Субъект»),
								даю согласие на обработку моих персональных данных, а также
								персональных данных моего несовершеннолетнего ребенка (если
								применимо) Обществу с ограниченной ответственностью «Курснова»,
								ИНН: 1683023468, ОГРН: 1241600045015, адрес: 420015, Республика
								Татарстан, г Казань, ул Карла Маркса, д. 51/14, помещ. 73
								(именуется по тексту — «Оператор»,) на следующих условиях:
							</p>

							<h5 className='subtitle' style={{ marginTop: '32px' }}>
								Цель и объем обрабатываемых персональных данных:
							</h5>
						</div>

						<div className='table'>
							{width > 700 && (
								<div className='table-row'>
									<div className='bolder table-left table-title'>Цель</div>
									<div className='bolder table-right table-title'>
										Объем обрабатываемых персональных данных
									</div>
								</div>
							)}

							{TABLE_DATA.map(({ left, right }) => (
								<div className='table-row' key={left}>
									<div className='table-left'>{left}</div>
									<div className='table-right'>{right}</div>
								</div>
							))}
						</div>

						<div className='container'>
							<h5 className='subtitle' style={{ marginTop: '64px' }}>
								Действия, совершаемые с персональными данными:
							</h5>

							<p className='policy-p'>
								Сбор, запись, систематизация, накопление, хранение, уточнение
								(обновление, изменение), извлечение, использование, передача
								(распространение, предоставление, доступ), обезличивание,
								блокирование, удаление, уничтожение персональных данных
								с использованием средств автоматизации и без использования таких
								средств.
							</p>

							<p className='policy-p'>
								Сбор персональных данных осуществляется путем их получения
								Оператором на сайте{' '}
								<a className='link' href='https://kursnova.ru'>
									https://kursnova.ru/
								</a>
								от Субъекта в соответствующих формах сбора данных.
							</p>

							<h5 className='subtitle'>Срок действия согласия:</h5>

							<p className='policy-p'>
								Согласие может быть отозвано Субъектом путем направления
								письменного заявления Оператору или его представителю по адресу,
								указанному в начале данного Согласия либо по электронному адресу
								<a className='link' href='https://hello@kursnova.ru'>
									hello@kursnova.ru
								</a>
								.
							</p>

							<p className='policy-p'>
								Оператор прекращает обработку персональных данных и уничтожает
								их в срок, не превышающий 30 дней с даты поступления отзыва.
							</p>

							<h5 className='subtitle'>Заключительные положения:</h5>

							<p className='policy-p'>
								Я полностью ознакомился с текстом настоящего согласия, включая
								все ссылки, и согласен с его условиями. Подробные условия
								обработки персональных данных содержатся в Политике
								конфиденциальности.
							</p>

							<p className='policy-p'>
								Все термины, которые не указаны в настоящем согласии, трактуются
								в соответствии с Политикой конфиденциальности и Пользовательском
								соглашении.
							</p>

							<p className='policy-p'>
								Согласие считается предоставленным с момента совершения одного
								из следующих действий:
							</p>

							<ul className='dottedList'>
								<li>
									продолжения регистрации или аутентификации на Сайте любым из
									доступных способов;
								</li>
								<li>
									продолжения регистрации или аутентификации на Сайте любым из
									доступных способов;
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
