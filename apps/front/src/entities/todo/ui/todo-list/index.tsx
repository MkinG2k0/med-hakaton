import { FC } from 'react'
import { Map } from 'react-easy-map'

import { TodoCard } from 'entities/todo'

interface TodoListProps {
	data: any[]
}

export const TodoList: FC<TodoListProps> = ({ data }) => {
	return <Map item={TodoCard} data={data} className={'col'} />
}
