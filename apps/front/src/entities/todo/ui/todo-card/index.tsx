import { FC } from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
interface TodoCardProps {}

export const TodoCard: FC<TodoCardProps> = ({}) => {
	return (
		<IonCard className={'col p-2'}>
			<IonCardHeader className={'col'}>
				<IonCardTitle>Card Title</IonCardTitle>
				<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
			</IonCardHeader>

			<IonCardContent>
				Heres a small text description for the card content. Nothing more, nothing less.
			</IonCardContent>
		</IonCard>
	)
}
