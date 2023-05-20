import { CustomRouter, navHistory } from 'shared'

export const WithRouter = (component: FC) => (props) => {
	return <CustomRouter history={navHistory}>{component(props)}</CustomRouter>
}
