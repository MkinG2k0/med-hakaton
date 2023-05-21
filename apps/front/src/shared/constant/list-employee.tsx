import { medkit, desktop, create, information, map, pricetag, settings } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'

export const listEmployee = [
	{
		id: '1',
		icon: <IonIcon icon={medkit} />,
		name: 'Медицина',
	},
	{
		id: '2',
		icon: <IonIcon icon={desktop} />,
		name: 'Дизайн',
	},
	{
		id: '3',
		icon: <IonIcon icon={create} />,
		name: 'Управление и экономика',
	},
	{
		id: '4',
		icon: <IonIcon icon={information} />,
		name: 'ИТ',
	},
	{
		id: '5',
		icon: <IonIcon icon={map} />,
		name: 'Искусство',
	},
	{
		id: '6',
		icon: <IonIcon icon={pricetag} />,
		name: 'Безопасность',
	},
	{
		id: '6',
		icon: <IonIcon icon={settings} />,
		name: 'Техника и технологии',
	},
]
