import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

export const WithPages = (component: FC) => (props) => {
	return (
		<IonReactRouter>
			<IonRouterOutlet id={'main'}>
				{/*{authPages.map(({ path, Component }) => (*/}
				{/*	<Route key={path} path={path} render={() => <Component />} />*/}
				{/*))}*/}
			</IonRouterOutlet>
		</IonReactRouter>
	)
}
