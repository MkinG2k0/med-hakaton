import { FC } from 'react'
import { NAV, NavBtn } from 'shared'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<NavBtn to={NAV.AUTH}>NEXT</NavBtn>
		</div>
	)
}

export default Main
