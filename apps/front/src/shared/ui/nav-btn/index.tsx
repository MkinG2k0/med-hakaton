import { IonButton } from '@ionic/react'
import { RouteParams } from 'atomic-router'
import { Link, LinkProps } from 'atomic-router-react'

export type IonButtonProps = Parameters<typeof IonButton>[number]

export interface NavBtnProps<Params extends RouteParams>
	extends IonButtonProps,
		Pick<LinkProps<Params>, 'to' | 'params'> {
	classNameBtn?: string
}

export const NavBtn = <T extends RouteParams>({
	children,
	to,
	params,
	className,
	classNameBtn,
	...props
}: NavBtnProps<T>) => {
	return (
		<Link to={to} params={params} className={className}>
			<IonButton {...props} className={classNameBtn}>
				{children}
			</IonButton>
		</Link>
	)
}
