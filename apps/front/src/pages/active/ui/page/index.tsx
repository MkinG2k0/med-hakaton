import style from './active.module.scss'

import { TabsLayout } from '~/pages/tabs'
import { ListEmployee } from '~/features/todo/ui/list-employee'

const active: FC = () => {
	return (
		<div>
			<ListEmployee />
			active
		</div>
	)
}

export default active
