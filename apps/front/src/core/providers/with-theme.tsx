import 'core/styles/theme.scss'
import 'core/styles/index.scss'

export const WithTheme = (component: FC) => (props) => {
	return (
		<div
			className={'col flex-auto'}
			style={{ background: 'var(--ion-background-color)', color: 'var(--ion-text-color)' }}
		>
			{component(props)}
		</div>
	)
}
