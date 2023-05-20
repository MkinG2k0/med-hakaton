import { BrowserHistory } from 'history'
import { FC, useLayoutEffect, useState } from 'react'
import { BrowserRouterProps, Router } from 'react-router-dom'
import { navHistory } from 'shared/config'

interface RouterProps extends BrowserRouterProps {
	history: BrowserHistory
}

export const CustomRouter: FC<RouterProps> = ({ basename, history, children }) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	})
	useLayoutEffect(() => history.listen(setState), [history])

	return (
		<Router
			navigator={navHistory}
			location={state.location}
			navigationType={state.action}
			basename={basename}
		>
			{children}
		</Router>
	)
}
