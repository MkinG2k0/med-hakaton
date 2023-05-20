import { lazy } from 'react'
import { NAV } from 'shared'

export const NoAuthPages = [
	{
		path: NAV.AUTH,
		Component: lazy(() => import('pages/auth/ui/page')),
	},
	{
		path: NAV.ANY,
		Component: lazy(() => import('pages/auth/ui/page')),
	},
]

export const AuthPages = [
	{
		path: NAV.TAB,
		Component: lazy(() => import('pages/tabs/ui/page')),
	},
	{
		path: NAV.TAB_TEST,
		Component: lazy(() => import('pages/list-test/ui/page')),
	},
	{
		path: NAV.TAB_PROFILE,
		Component: lazy(() => import('pages/profile/ui/page')),
	},
	{
		path: NAV.TAB_SPEC,
		Component: lazy(() => import('pages/list-speciality/ui/page')),
	},
	{
		path: NAV.TAB_ACTIVE,
		Component: lazy(() => import('~/pages/active/ui/page')),
	},
	...NoAuthPages,
]
