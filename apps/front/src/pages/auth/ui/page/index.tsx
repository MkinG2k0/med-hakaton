import { IonInput, IonItem, IonTitle } from '@ionic/react'
import { FC } from 'react'

import { tabsRoute } from 'pages/tabs'
import { NavBtn } from 'shared'

interface authProps {}

const Auth: FC<authProps> = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center '}>
			<div className={'col justify-center items-center w-80'}>
				<IonTitle className={'text-center'}>Auth</IonTitle>
				<IonItem className={'w-full'}>
					<IonInput placeholder={'Enter login'}></IonInput>
				</IonItem>
				<IonItem className={'w-full'}>
					<IonInput placeholder={'Enter password'} type={'password'}></IonInput>
				</IonItem>
				<div className={'row  w-full'}>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={tabsRoute} fill={'outline'}>
						Register
					</NavBtn>
					<NavBtn className={'flex-auto'} classNameBtn={'w-full'} to={tabsRoute}>
						Login
					</NavBtn>
				</div>
			</div>
		</div>
	)
}

export default Auth
