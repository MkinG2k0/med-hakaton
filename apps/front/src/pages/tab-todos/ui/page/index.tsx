import { TodoView } from 'features/todo/ui/todo-view'
import { TabsLayout } from 'pages/tabs'

const Todo: FC = ({}) => {
	return (
		<TabsLayout>
			<TodoView />
		</TabsLayout>
	)
}
export default Todo
