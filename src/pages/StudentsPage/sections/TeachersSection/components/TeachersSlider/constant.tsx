import teacher1 from '../../../../../../assets/students/teachers/teacher-1.jpg'
import teacher2 from '../../../../../../assets/students/teachers/teacher-2.jpg'
import teacher3 from '../../../../../../assets/students/teachers/teacher-3.jpg'
import teacher4 from '../../../../../../assets/students/teachers/teacher-4.jpg'
import teacher5 from '../../../../../../assets/students/teachers/teacher-5.jpg'

export const TEACHERS = [
	{
		img: teacher1,
		name: 'Арман Костанян',
		tags: ['Математика', '7 лет опыта'],
		description:
			'Директор лицея, призёр конкурса «Учитель года». Преподаватель математики',
		info: [
			{
				count: '83',
				text: 'средний балл ЕГЭ по математике',
			},
			{
				count: '4,9',
				text: 'средний балл ОГЭ по математике',
			},
		],
	},
	{
		img: teacher2,
		name: 'Елизавета Романова',
		tags: ['Химия', '7 лет опыта'],
		description: 'Учитель, автор курсов по подготовке к ОГЭ и ЕГЭ по химии',
		info: [
			{
				count: '86,4',
				text: 'средний балл ЕГЭ у учеников',
			},
			{
				count: '1 000+',
				text: 'учеников подготовлено к ЕГЭ',
			},
		],
	},
	{
		img: teacher3,
		name: 'Даниил Гурнович',
		tags: ['Биология', '11 лет опыта'],
		description: 'Репетитор по биологии. Преподаватель довуза Казанского ГМУ',
		info: [
			{
				count: '98',
				text: 'максимальный балл ЕГЭ по биологии',
			},
			{
				count: '250',
				text: 'учеников подготовлено к ЕГЭ и ОГЭ',
			},
		],
	},
	{
		img: teacher4,
		name: 'Динар Габидуллин',
		subject: 'Управление',
		exp: '11 лет опыта',
		tags: ['Управление', '11 лет опыта'],
		description:
			'Руководитель проектов kursnova. Создатель одной из ведущих инженерно-технических школ России СУНЦ КНИТУ-КАИ',
		info: [],
	},
	{
		img: teacher5,
		name: 'Максим Булатов',
		description:
			'Основатель kursnova и офлайн-школы Skillbox в Казани. Сооснователь популярных YouTube-каналов («Секреты», «Космос Просто»)',
		tags: ['Управление', '15+ лет опыта'],
		info: [],
	},
]
