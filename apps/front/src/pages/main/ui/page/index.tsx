import { FC } from 'react'

import { authRoute } from 'pages/auth/config'
import { tabsRoute } from 'pages/tabs'
import { NavBtn } from 'shared'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<NavBtn to={authRoute}>NEXT</NavBtn>
		</div>
	)
}

export default Main
