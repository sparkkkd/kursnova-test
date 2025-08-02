interface ILicenseItem {
	title: string
	path: string
}

export const LICENSE_ITEMS: ILicenseItem[] = [
	{
		title: 'Политика конфиденциальности',
		path: '/privacy-policy',
	},
	{
		title: 'Пользовательское соглашение',
		path: '/terms-consent',
	},
	{
		title: 'Согласие на обработку персональных данных',
		path: '/personal-data',
	},
	{
		title: 'Лицензия на образовательную деятельность',
		path: '/',
	},
	{
		title: 'Согласие на получение информационных сообщений',
		path: '/ads-consent',
	},
	{
		title: 'Условия использования файлов cookie',
		path: '/cookie-consent',
	},
]
