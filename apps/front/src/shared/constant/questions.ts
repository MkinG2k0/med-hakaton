interface Iquestions {
	title: string
	variants: string[]
	correct: number
}

export const questions: Iquestions[] = [
	{
		title: 'скольок хромосом у здорового человека?',
		variants: ['20', '25', '46', '33'],
		correct: 2,
	},
	{
		title: 'Что значит днк?',
		variants: ['х', 'вып', 'выап', '324'],
		correct: 1,
	},
]
