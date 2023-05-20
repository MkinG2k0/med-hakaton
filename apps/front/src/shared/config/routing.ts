// @/app/routing
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { authRoute } from 'pages/auth/config'
import { mainRoute } from 'pages/main'
import { todoRoute } from 'pages/tab-todos'
import { tabsRoute } from 'pages/tabs'

// 1. Define routes
const routes = [
	{ path: '/', route: mainRoute },
	{ path: '/auth', route: authRoute },
	{ path: '/tabs', route: tabsRoute },
	{ path: '/tabs/todos', route: todoRoute },
]

// 2. Create router
export const router = createHistoryRouter({
	routes,
})

const isSsr = true
// 3. Create history
const history = isSsr ? createMemoryHistory() : createBrowserHistory()

// 4. Attach it to router
router.setHistory(history)
