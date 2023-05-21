import { IonTitle } from '@ionic/react'

import { ListEmployee } from '~/features/todo/ui/list-employee'

const listSpeciality: FC = () => {
	return (
		<div>
			<IonTitle>Специальности</IonTitle>
			<ListEmployee />
		</div>
	)
}

export default listSpeciality
