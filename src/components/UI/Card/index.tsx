import { ReactNode } from 'react'

import style from './Card.module.scss'

interface CardProps {
	children?: ReactNode
}

export default function Card(props: CardProps) {
	const { children } = props
	return <div className={`${style.Card} ${style.absolute}`}>{children}</div>
}
