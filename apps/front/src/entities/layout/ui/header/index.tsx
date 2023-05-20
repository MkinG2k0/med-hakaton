// import { MenuItems } from 'entities/layout/config/menu'

import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'

import { SiderBtn } from '../sider-btn'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot={'start'}>
					<IonMenuButton></IonMenuButton>
				</IonButtons>
				<IonTitle>Menu</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}

export const HeaderLoad = () => {
	return (
		<div className={'flex bg-gray-700 h-12 '}>
			<div
				className={'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'}
			></div>
			{/* <Skeleton />*/}
		</div>
	)
}

// export const Header2: FC = () => {
// 	const path = usePathname()
// 	console.log(path)
//
// 	return (
// 		<div className={'flex bg-gray-700 h-16'}>
// 			<div
// 				className={
// 					'flex justify-center items-center h-full p-2 gap-2 cursor-pointer hover:text-brand-500 transition min-w-[5rem] bg-gray-800'
// 				}
// 			>
// 				<MenuUnfoldOutlined />
// 			</div>
//
// 			{MenuItems.map((item) => (
// 				<div
// 					key={item.key}
// 					className={`flex justify-center items-center h-full px-4 gap-1.5 cursor-pointer hover:text-white transition text-gray-300 ${
// 						item.key === path ? 'bg-brand-500' : 'a'
// 					}`}
// 				>
// 					<div>{item.icon}</div>
// 					<div>{item.label}</div>
// 				</div>
// 			))}
// 		</div>
// 	)
// }
