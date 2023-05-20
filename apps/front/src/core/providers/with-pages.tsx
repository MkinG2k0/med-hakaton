import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'

import { authPages } from 'shared/constant/pages'

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
