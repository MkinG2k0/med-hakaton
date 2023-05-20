import { readerOutline, personCircle, receiptOutline, podiumOutline } from 'ionicons/icons'

import { NAV } from '~/shared'

export const tabBtns = (): { icon: any; text: string; to: string }[] => [
	{ icon: receiptOutline, text: '', to: NAV.TAB_SPEC }, //Специальность
	{ icon: podiumOutline, text: '', to: NAV.TAB_ACTIVE }, //Активность
	{ icon: readerOutline, text: '', to: NAV.TAB_TEST }, //Тесты
	{ icon: personCircle, text: '', to: NAV.TAB_PROFILE }, //Профиль
]
