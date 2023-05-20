import { IonIcon, IonLabel, IonTabButton } from '@ionic/react'
import React from 'react'
import { Link, NavLinkProps } from 'react-router-dom'

export interface TabBtnProps extends NavLinkProps {
	icon: string
	text: string
}

export const TabBtn = ({ icon, text, to }: TabBtnProps) => {
	return (
		<Link to={to} className={'select-none mx-5 w-20 '}>
			<IonTabButton>
				<IonIcon icon={icon} size={'large'} />
				<IonLabel>{text}</IonLabel>
			</IonTabButton>
		</Link>
	)
}
