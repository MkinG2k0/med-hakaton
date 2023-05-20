// @/app/routing
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { authRoute } from 'pages/auth/config'
import { mainRoute } from 'pages/main'
import { todoRoute } from 'pages/tab-todos'
import { tabsRoute } from 'pages/tabs'
import { registerRoute } from 'workbox-routing'

import { allEmployeeRoute } from '~/pages/all-employee/config'
import { aboutCompanyRoute } from '~/pages/about-company/config'
import { adminRoute } from '~/pages/admin/config'
import { createEducationMaterialRoute } from '~/pages/create-education-material/config'
import { createLibsRoute } from '~/pages/create-libs/config'
import { createTestRoute } from '~/pages/create-test/config'
import { employeeInfoRoute } from '~/pages/employee-info/config'
import { listCompanyRoute } from '~/pages/list-company/config'
import { listLibsCompanyRoute } from '~/pages/list-libs-company/config'
import { listSpecialityRoute } from '~/pages/list-speciality/config'
import { listTestRoute } from '~/pages/list-test/config'
import { pasedTestRoute } from '~/pages/pased-tests/config'
import { pasEdMaterialRoute } from '~/pages/passing-education-material/config'
import { passTestRoute } from '~/pages/passing-test/config'
import { profileRoute } from '~/pages/profile/config'
import { rateUsersRoute } from '~/pages/rate-users/config'
import { registrationRoute } from '~/pages/registration/config'
import { resultPassTestRoute } from '~/pages/result-passing-test/config'
import { unfailesTestsRoute } from '~/pages/unfailed-tests/config'
import { userEmployeeRoute } from '~/pages/user-employee/config'

// 1. Define routes
const routes = [
	{ path: '/', route: mainRoute },
	{ path: '/auth', route: authRoute },
	{ path: '/tabs', route: tabsRoute },
	{ path: '/tabs/todos', route: todoRoute },
	{ path: '/admin/all-employee', route: allEmployeeRoute },
	{ path: '/about-company', route: aboutCompanyRoute },
	{ path: '/admin', route: adminRoute },
	{ path: '/admin/create-education-material', route: createEducationMaterialRoute },
	{ path: '/admin/create-libs', route: createLibsRoute },
	{ path: '/admin/create-test', route: createTestRoute },
	{ path: '/admin/employee-info', route: employeeInfoRoute },
	{ path: '/list-company', route: listCompanyRoute },
	{ path: '/list-libs-company', route: listLibsCompanyRoute },
	{ path: '/list-speciality', route: listSpecialityRoute },
	{ path: '/list-test', route: listTestRoute },
	{ path: '/pased-tests', route: pasedTestRoute },
	{ path: '/pas-ed-material', route: pasEdMaterialRoute },
	{ path: '/pass-test', route: passTestRoute },
	{ path: '/admin/create-libs', route: createLibsRoute },
	{ path: '/profile', route: profileRoute },
	{ path: '/rate-users', route: rateUsersRoute },
	{ path: '/registration', route: registrationRoute },
	{ path: '/result-passing', route: resultPassTestRoute },
	{ path: '/unfailed-test', route: unfailesTestsRoute },
	{ path: '/user-employee', route: userEmployeeRoute },
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
