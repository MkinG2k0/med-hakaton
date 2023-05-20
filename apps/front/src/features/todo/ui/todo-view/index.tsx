import style from './style.module.scss'

import { TodoList } from 'entities/todo'


interface TodoViewProps {}

export const TodoView: FC<TodoViewProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<TodoList data={[{}, {}, {}, {}, {}]} />
		</div>
	)
}
