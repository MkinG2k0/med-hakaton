import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import { FC } from 'react'

import { LayoutSlice } from 'entities/layout'

// import { MenuItems } from 'entities/layout/config/menu'

interface SiderProps {}

export const Sider: FC<SiderProps> = ({}) => {
	const { sideCollapsed } = LayoutSlice.useGet()

	return (
		<IonMenu contentId={'main-content'}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Menu Content</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className={'ion-padding'}>This is the menu content.</IonContent>
		</IonMenu>
	)
}

export const SiderLoad: FC = () => {
	return <div className={'bg-gray-900 w-20'}></div>
}
