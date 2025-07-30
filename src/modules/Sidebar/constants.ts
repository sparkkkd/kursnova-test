interface ISidebarLink {
	title: string
	path: string
}

export const STUDENTS_SIDEBAR_LINKS: ISidebarLink[] = [
	{ title: 'Как всё устроено', path: '#how' },
	{ title: 'Учителя', path: '#teachers' },
	{ title: 'Цены', path: '#price' },
	{ title: 'Частые вопросы', path: '#faq' },
]

export const PARENT_SIDEBAR_LINKS: ISidebarLink[] = [
	{ title: 'Родительское бинго', path: '#bingo' },
	{ title: 'О нас', path: '#about' },
	{ title: 'Как проходит обучение', path: '#education' },
	{ title: 'Цены', path: '#price' },
	{ title: 'Частые вопросы', path: '#faq' },
]
