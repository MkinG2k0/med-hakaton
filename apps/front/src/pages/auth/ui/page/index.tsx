import { IonInput, IonItem, IonTitle } from '@ionic/react'
import { FC } from 'react'
import { tabsRoute } from 'pages/tabs'
import { NAV, NavBtn } from 'shared'

import { activeRoute } from '~/pages/active/config'

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
					<NavBtn className={'flex-auto'} to={NAV.TAB_TEST} fill={'outline'}>
						Register
					</NavBtn>
					<NavBtn className={'flex-auto'} to={NAV.TAB_TEST}>
						Login
					</NavBtn>
				</div>
			</div>
		</div>
	)
}

export default Auth
