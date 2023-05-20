import { IonButton } from '@ionic/react'
import { useNavigate } from 'react-router-dom'

export type IonButtonProps = Parameters<typeof IonButton>[number]

interface NavBtnProps extends IonButtonProps {
	to: string
}
export const NavBtn: FC<NavBtnProps> = ({ children, to, onClick, ...props }) => {
	const navigate = useNavigate()

	const onNavigate = (e) => {
		onClick?.(e)
		navigate(to)
	}

	return (
		<IonButton {...props} onClick={onNavigate}>
			{children}
		</IonButton>
	)
}
