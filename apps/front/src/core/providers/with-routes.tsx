import { IonReactRouter } from '@ionic/react-router'

export const WithRoutes = (component: FC) => (props) => {
	return <IonReactRouter>{component(props)}</IonReactRouter>
}
