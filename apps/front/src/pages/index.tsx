import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { TabsLayout } from '~/pages/tabs'
import { AuthPages, NoAuthPages } from '~/shared/constant/pages'

export const Pages: FC = () => {
	// const { isAuth } = useAuth()
	const isAuth = true

	if (isAuth) {
		return (
			<TabsLayout>
				<Routes>
					{AuthPages.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
				</Routes>
			</TabsLayout>
		)
	}

	return (
		<TabsLayout>
			<Routes>
				{NoAuthPages.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</TabsLayout>
	)
}
