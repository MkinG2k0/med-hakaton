import { FC } from 'react'
import { NAV, NavBtn } from 'shared'

import { ListEmployee } from '~/features/todo/ui/list-employee/index'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<NavBtn to={NAV.AUTH}>NEXT</NavBtn>
		</div>
	)
}

export default Main
