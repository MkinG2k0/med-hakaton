import { FC } from 'react'

import { dispatch } from 'core/store'
import { LayoutSlice } from 'entities/layout/model'

interface sideBtnProps {}

export const SiderBtn: FC<sideBtnProps> = ({}) => {
	const { sideCollapsed } = LayoutSlice.useGet()

	const onCollapse = () => {
		dispatch(LayoutSlice.setSideCollapsed())
	}

	return (
		<div className={'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'}>
			sadas
		</div>
	)
}
