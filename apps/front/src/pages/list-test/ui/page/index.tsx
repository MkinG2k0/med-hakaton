import { IonCard, IonChip } from '@ionic/react'

const listTest: FC = () => {
	return (
		<div className={'col gap-4'}>
			{data.map(({ max, color, current, title }) => (
				<IonCard key={current} className={' flex flex-col'}>
					<div className={'row justify-between items-center p-4'}>
						<div>{title}</div>
						<IonChip className={'min-w-[5rem]'}>
							<div className={'text-center flex-auto'}>
								{current} / {max}
							</div>
						</IonChip>
					</div>
					<div style={{ background: color }} className={'h-10'}></div>
				</IonCard>
			))}
		</div>
	)
}

const data = [
	{ title: 'title', current: 12, max: 30, color: '#FF7A33' },
	{ title: 'title', current: 3, max: 20, color: '#466CFF' },
	{ title: 'title', current: 15, max: 15, color: '#E81F74' },
	{ title: 'title', current: 3, max: 10, color: '#444089' },
	{ title: 'title', current: 5, max: 25, color: '#FACFE1' },
	{ title: 'title', current: 6, max: 23, color: '#FFC700' },
]

export default listTest
