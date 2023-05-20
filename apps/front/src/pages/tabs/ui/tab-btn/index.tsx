import { IonIcon, IonLabel, IonTabButton } from '@ionic/react'
import { RouteInstance, RouteParams } from 'atomic-router'
import { Link, LinkProps } from 'atomic-router-react'
import React from 'react'

export interface TabBtnProps<Params extends RouteParams> extends LinkProps<Params> {
	icon: string
	text: string
}

export const TabBtn = <Params extends RouteParams>({ icon, text, to }: TabBtnProps<Params>) => {
	return (
		<Link to={to} className={'select-none mx-5 w-20 '}>
			<IonTabButton>
				<IonIcon icon={icon} size={'large'} />
				<IonLabel>{text}</IonLabel>
			</IonTabButton>
		</Link>
	)
}
