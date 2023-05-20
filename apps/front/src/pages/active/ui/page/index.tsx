import React, { useEffect, useState } from 'react'
import { Axis, Chart, Interval, LineAdvance, Point, Slider, Tooltip } from 'bizcharts'

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const Active: FC = () => {
	const [state, setState] = useState<any[]>([])

	useEffect(() => {
		setState([])
		new Array(90).fill('').map((month, index) => {
			projects.map((project) => {
				const currTime = state[state.length - projects.length]?.time || 1
				const min = Math.max(random(currTime, currTime - 3), 0)
				const max = random(currTime, currTime + 2)
				setState((prevState) => [
					...prevState,
					{
						month: index + 1,
						project,
						time: random(min + 2, max + 2),
					},
				])
			})
		})
	}, [])

	return (
		<div className={'col'}>
			<div className={'text-xl mb-4'}>Активность за последний месяц</div>
			<Chart autoFit height={300} data={state}>
				<LineAdvance
					shape={'smooth'}
					point
					area
					position={'month*time'}
					color={'rgb(59 130 246 / 0.5)'}
				/>
				<Slider />
			</Chart>
			<div className={'text-xl '}>ТОП сотрудников</div>
			<Chart data={data} padding={[60, 20, 40, 60]} scale={scale} autoFit height={300}>
				<Axis name={'vote'} title={null} line={null} tickLine={null} />
				<Interval
					position={'name*vote'}
					color={['name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd']]}
				/>
				<Tooltip />
				<Point
					position={'name*vote'}
					size={60}
					shape={[
						'name',
						(name) => {
							return ['image', imageMap[name]]
						},
					]}
				/>
			</Chart>
		</div>
	)
}
const month = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

const projects = ['activity']

const data = [
	{
		name: 'Анатолий',
		vote: 35654,
	},
	{
		name: 'Шамиль',
		vote: 65456,
	},
	{
		name: 'Мадина',
		vote: 45724,
	},
	{
		name: 'Мага',
		vote: 13654,
	},
]

const imageMap = {
	Анатолий: 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
	Шамиль: 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
	Мадина: 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png',
	Мага: 'https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png',
}

const scale = {
	vote: {
		min: 0,
	},
}

export default Active
