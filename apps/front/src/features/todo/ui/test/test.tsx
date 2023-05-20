import { useState } from 'react'
import { IonItem, IonLabel, IonList, IonTitle } from '@ionic/react'

import style from './test.module.scss'

interface Iquestions {
	title: string
	variants: string[]
	correct: number
}

const questions: Iquestions[] = [
	{
		title: 'скольок хромосом у здорового человека?',
		variants: ['20', '25', '46'],
		correct: 0,
	},
	{
		title: 'Что значит днк?',
		variants: ['х', 'вып', 'выап'],
		correct: 0,
	},
]

const Test = () => {
	const [step, setStep] = useState<number>(0)
	const question = questions[step]
	return (
		<>
			<div>
				<div></div>
			</div>
			<IonTitle></IonTitle>
			<IonList>
				{questions.variants(() => (
					<IonItem>
						<IonLabel>{}</IonLabel>
					</IonItem>
				))}
			</IonList>
		</>
	)
}
