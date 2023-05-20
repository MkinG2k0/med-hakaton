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

import { questions } from '~/shared/constant/questions'
import { Result } from '~/features/todo/ui/result/result'

export const Test = () => {
	const [step, setStep] = useState<number>(0)
	const question = questions[step]
	const percentage = Math.round((step / questions.length) * 100)
	const [correct, setCorrect] = useState<number>(0)

	const onClickVariant = (index) => {
		setStep(step + 1)

		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	if (step === questions.length) {
		return <Result correct={correct} />
	}

	return (
		<div className={'col w-[30%]'}>
			<div className={style.prog}>
				<div
					style={{
						position: 'absolute',
						width: `${percentage}%`,
						height: '100%',
						background: '#000',
						transition: '.5s ease-in-out',
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
