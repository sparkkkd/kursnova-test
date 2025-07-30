import emoji_1 from '../../../../assets/parents/cards/emoji-1.png'
import emoji_2 from '../../../../assets/parents/cards/emoji-2.png'
import emoji_3 from '../../../../assets/parents/cards/emoji-3.png'
import emoji_4 from '../../../../assets/parents/cards/emoji-4.png'
import emoji_5 from '../../../../assets/parents/cards/emoji-5.png'
import emoji_6 from '../../../../assets/parents/cards/emoji-6.png'
import emoji_7 from '../../../../assets/parents/cards/emoji-7.png'
import emoji_8 from '../../../../assets/parents/cards/emoji-8.png'
import emoji_9 from '../../../../assets/parents/cards/emoji-9.png'

/*
frontTitle
backTitle
text
emoji
*/

export interface ICard {
	frontTitle: string
	frontText: string
	backTitle: string
	backText: string
	emoji: string
	rotate: number
	background: string
	color: string
	isPresent?: boolean
}

export const CARDS_DATA: ICard[] = [
	{
		frontTitle:
			'Ребёнок просит объяснить тему, которую я давно забыл или никогда не знал',
		frontText:
			'Какие митохондриальные АТФ? Мне бы вспомнить, где лежат ключи от дома',
		backTitle:
			'У нас есть решение получше, чем совместное перечитывание учебника',
		backText: '59% родителей тоже благополучно забыли школьную программу',
		emoji: emoji_1,
		rotate: -3,
		background: 'linear-gradient(227deg, #fdbcff 0%, #e38ee5 100%)',
		color: '#4b264d',
	},
	{
		frontTitle: 'Хотелось отдохнуть после работы, но пришлось делать домашку',
		frontText: 'Хорошо хоть, что не в полночь попросили...',
		backTitle: 'Тоже считаем, что все свои домашки вы уже сделали',
		backText:
			'80% родителей других детей тоже хотели бы бокал вина вместо решения уравнений ',
		emoji: emoji_2,
		rotate: 5,
		background: 'linear-gradient(26deg, #25252b 0%, #4b4b55 100%)',
		color: '#fff',
		isPresent: true,
	},
	{
		frontTitle:
			'Раздражаюсь, когда ребёнок не понимает моих объяснений. А потом стыдно',
		frontText: 'Не могу сдержать себя. Я, наверное, плохой родитель...',
		backTitle:
			'Уметь объяснять — целая профессия. Не стоит себя винить, вы не педагог',
		backText: 'Ещё у 65% родителей уроки — причина напряжения в семье',
		emoji: emoji_3,
		rotate: -5,
		background: '#cdfe9c',
		color: '#2a4311',
	},
	{
		frontTitle:
			'В школе нормально не учат, предметы объясняют непонятно и скучно',
		frontText: 'По себе помню, как на некоторых уроках клонило в сон',
		backTitle: 'Увы, правда: не везде можно найти должный уровень образования',
		backText:
			'Каждый четвёртый родитель недоволен современным школьным образованием',
		emoji: emoji_4,
		rotate: 2,
		background: '#dcdcf2',
		color: '#14141a',
	},
	{
		frontTitle: 'За репетиторов надо выложить целое состояние',
		frontText: 'А можно было на семейный отпуск потратить',
		backTitle:
			'А ещё их надо выбрать, договориться о времени и месте... Cлишком сложно!',
		backText: 'Для ещё 40% родителей это тоже головная боль',
		emoji: emoji_5,
		rotate: -3,
		background: '#bbadff',
		color: '#0e0056',
	},
	{
		frontTitle: 'Всё, что интересует ребёнка — глупые ролики в тикток',
		frontText: 'Так можно весь мозг в унитаз слить!',
		backTitle:
			'Не можешь победить — возглавь. Мы знаем, как превратить уроки в тиктоки и наоборот',
		backText: 'Абсолютное большинство детей тоже предпочитает весёлые видяшки',
		emoji: emoji_6,
		rotate: 6,
		background: 'linear-gradient(227deg, #fdbcff 0%, #e38ee5 100%)',
		color: '#4b264d',
	},
	{
		frontTitle: 'Учителя махнули на ребёнка рукой и еле «дотягивают» до троек',
		backTitle: 'Нет неспособных детей, есть дети, к которым не нашли подход',
		frontText: 'Не пойму: это с ребёнком что-то не так или с учителями?',
		backText:
			'Около 10% родителей беспокоит, что их ребёнка записали в категорию глупых и/или ленивых',
		emoji: emoji_7,
		rotate: -5,
		background: 'linear-gradient(26deg, #25252b 0%, #4b4b55 100%)',
		color: '#fff',
	},
	{
		frontTitle: 'У ребёнка ноль концентрации, какое-то клиповое мышление...',
		frontText: 'Боюсь подумать, что же с ним дальше будет?',
		backTitle:
			'Поколение альфа — не такие, как мы, их родители, и это нормально. Им просто нужен другой подход',
		backText: 'В среднем 70% родителей разделяют вашу боль',
		emoji: emoji_8,
		rotate: 7,
		background: '#cdfe9c',
		color: '#2a4311',
	},
	{
		frontTitle: 'Не знаю, как заинтересовать ребёнка учёбой, и надо ли',
		frontText: 'Всё равно забудет минимум половину, когда вырастет',
		backTitle:
			'Не сомневайтесь: надо. С kursnova привить любовь к знаниям просто',
		backText:
			'100% родителей тоже хотят вырастить ребёнка любознательным и активным',
		emoji: emoji_9,
		rotate: -3,
		background: '#dcdcf2',
		color: '#14141a',
	},
]
