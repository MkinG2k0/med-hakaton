import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonList,
} from '@ionic/react'

import { listEmployee } from '~/shared/constant/list-employee'

export const ListEmployee = () => {
	return (
		<div className={'col'}>
			{listEmployee.map(({ id, name, icon }) => (
				<IonCard key={id} className={'p-4 cursor-pointer border'}>
					<IonCardHeader>
						<IonCardTitle>
							<div className={'row items-center'}>
								{icon}
								{name}
							</div>
						</IonCardTitle>
					</IonCardHeader>
				</IonCard>
			))}
		</div>
	)
}
