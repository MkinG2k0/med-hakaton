import { RouterProvider, Route } from 'atomic-router-react'

import { authRoute } from 'pages/auth/config'
import Auth from 'pages/auth/ui/page'
import { mainRoute } from 'pages/main'
import Main from 'pages/main/ui/page'
import { todoRoute } from 'pages/tab-todos'
import Todo from 'pages/tab-todos/ui/page'
import { tabsRoute } from 'pages/tabs'
import Tabs from 'pages/tabs/ui/page'
import { router } from 'shared/config/routing'

export const Pages: FC = () => {
	return (
		<RouterProvider router={router}>
			<Route route={mainRoute} view={Main} />
			<Route route={authRoute} view={Auth} />
			<Route route={todoRoute} view={Todo} />
			<Route route={tabsRoute} view={Tabs} />
		</RouterProvider>
	)
}
