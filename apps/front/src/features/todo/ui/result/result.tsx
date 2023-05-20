import { IonItem, IonTitle } from '@ionic/react'

import { questions } from '~/shared/constant/questions'

export const Result = ({ correct }) => {
	return (
		<IonItem>
			<IonTitle>
				Спасибо за прохождение теста вы ответили на {correct} из {questions.length}
			</IonTitle>
		</IonItem>
	)
}
