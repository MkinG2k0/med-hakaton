import { RouteParams } from 'atomic-router'
import { homeOutline, flashOutline, readerOutline } from 'ionicons/icons'

import { mainRoute } from 'pages/main'
import { todoRoute } from 'pages/tab-todos'
import { tabsRoute } from 'pages/tabs/config/route'
import { TabBtnProps } from 'pages/tabs/ui/tab-btn'

export const tabBtns = (): TabBtnProps<RouteParams>[] => [
	{ icon: readerOutline, text: 'todos', to: todoRoute },
	{ icon: homeOutline, text: 'main', to: tabsRoute },
	{ icon: flashOutline, text: 'welcome', to: mainRoute },
]
