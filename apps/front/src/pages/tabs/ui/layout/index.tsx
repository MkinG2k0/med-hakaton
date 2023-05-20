import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { Map } from 'react-easy-map'

import style from './tabs.module.scss'

import { tabBtns } from 'pages/tabs/config/tab-btns'
import { TabBtn } from 'pages/tabs/ui/tab-btn'


interface TabsProps {}

export const TabsLayout: FC<TabsProps> = ({ children }) => {
	return (
		<div className={style.wrap}>
			<IonHeader>
				<IonToolbar className={'px-2'}>
					<IonTitle>Listen now</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div className={'flex-auto p-2 overflow-auto'}>{children}</div>
			<div className={style.tabs}>
				<Map data={tabBtns()} item={TabBtn} />
			</div>
		</div>
	)
}
