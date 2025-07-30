import { v4 } from 'uuid'

export interface IPlan {
	id: string
	title: string
	price: string
	data: string[]
}

export interface IMobilePlan {
	title: string
	freeChecked: boolean
	premiumChecked: boolean
}

export const PLAN_DATA: IPlan[] = [
	{
		id: v4(),
		title: 'Free-тариф',
		price: '0 ₽',
		data: [
			'300+ видеороликов',
			'3 000+ упражнений',
			'Статистика прогресса ученика для родителей',
			'Поддержка kursnova',
		],
	},
	{
		id: v4(),
		title: 'Премиум',
		price: 'от 2 940 ₽/мес',
		data: [
			'Всё, что есть на Free-тарифе',
			'Возможность учиться в любом порядке',
			'Заморозка пропущенных дней',
			'Расширенная статистика и аналитика прогресса для родителей',
			'Расширенные игровые механики для учеников',
			'Персональный помощник',
			'Дополнительная помощь с заданиями',
		],
	},
]

export const MOBILE_PLAN_DATA: IMobilePlan[] = [
	{
		title: '300+ видеороликов',
		freeChecked: true,
		premiumChecked: true,
	},
	{
		title: '3 000+ упражнений',
		freeChecked: true,
		premiumChecked: true,
	},
	{
		title: 'Статистика прогресса ученика для родителей',
		freeChecked: true,
		premiumChecked: true,
	},
	{
		title: 'Поддержка kursnova',
		freeChecked: true,
		premiumChecked: true,
	},
	{
		title: 'Возможность учиться в любом порядке',
		freeChecked: false,
		premiumChecked: true,
	},
	{
		title: 'Заморозка пропущенных дней',
		freeChecked: false,
		premiumChecked: true,
	},
	{
		title: 'Расширенная статистика и аналитика прогресса для родителей',
		freeChecked: false,
		premiumChecked: true,
	},
	{
		title: 'Расширенные игровые механики для учеников',
		freeChecked: false,
		premiumChecked: true,
	},
	{
		title: 'Персональный помощник',
		freeChecked: false,
		premiumChecked: true,
	},
	{
		title: 'Дополнительная помощь с заданиями',
		freeChecked: false,
		premiumChecked: true,
	},
]
