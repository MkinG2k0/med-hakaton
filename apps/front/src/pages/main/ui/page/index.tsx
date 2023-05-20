import { FC } from 'react'
import { authRoute } from 'pages/auth/config'
import { tabsRoute } from 'pages/tabs'
import { NavBtn } from 'shared'

import { Test } from '~/features/todo/ui/test/test'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<Test />
			<NavBtn to={authRoute}>NEXT</NavBtn>
		</div>
	)
}

export default Main
