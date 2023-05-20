import { useState } from 'react'
import {
	IonButton,
	IonItem,
	IonLabel,
	IonList,
	IonRadio,
	IonRadioGroup,
	IonTitle,
} from '@ionic/react'

import style from './test.module.scss'

interface Iquestions {
	title: string
	variants: string[]
	correct: number
}

const questions: Iquestions[] = [
	{
		title: 'скольок хромосом у здорового человека?',
		variants: ['20', '25', '46', '33'],
		correct: 0,
	},
	{
		title: 'Что значит днк?',
		variants: ['х', 'вып', 'выап', '324'],
		correct: 1,
	},
]

export const Test = () => {
	const [step, setStep] = useState<number>(0)
	const question = questions[step]
	const percentage = Math.round((step / questions.length) * 100)
	const [correct, setCorrect] = useState<number>(0)

	const onClickVariant = (index) => {
		console.log(step, index)
		setStep(step + 1)

		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	if (step === questions.length) {
		return <Result correct={correct} />
	}

	console.log(question)
	return (
		<div className={'col w-[30%]'}>
			<div className={style.prog}>
				<div
					style={{
						position: 'absolute',
						width: `${percentage}%`,
						height: '100%',
						background: '#000',
					}}
				></div>
			</div>
			<IonTitle>{question.title}</IonTitle>
			<IonList className={'cursor-pointer'}>
				<IonRadioGroup>
					{question.variants.map((data, index) => (
						<>
							<IonItem onClick={() => onClickVariant(index)} key={index}>
								<IonLabel>{data}</IonLabel>
								<IonRadio slot={'end'} value={index}></IonRadio>
							</IonItem>
						</>
					))}
				</IonRadioGroup>
			</IonList>
		</div>
	)
}

const Result = ({ correct }) => {
	return (
		<IonItem>
			<IonTitle>
				Спасибо за прохождение теста вы ответили на {correct} из {questions.length}
			</IonTitle>
		</IonItem>
	)
}
