import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { library, playCircle, radio, search } from 'ionicons/icons'
import { NavLink, Route } from 'react-router-dom'

const Comp = () => {
	return <div>Comp</div>
}

export const Tabs: FC = ({ children }) => {
	return (
		<IonTabs>
			{children}
			<IonTabBar slot={'bottom'}>
				<IonTabButton tab={'home'} href={'/tabs/todo'}>
					<IonIcon icon={playCircle} />
					<IonLabel>Listen now</IonLabel>
				</IonTabButton>

				<IonTabButton tab={'radio'} href={'/tabs/any'}>
					<IonIcon icon={radio} />
					<IonLabel>Radio</IonLabel>
				</IonTabButton>

				<IonTabButton tab={'library'}>
					<IonIcon icon={library} />
					<IonLabel>Library</IonLabel>
				</IonTabButton>

				<IonTabButton tab={'search'}>
					<IonIcon icon={search} />
					<IonLabel>Search</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}
