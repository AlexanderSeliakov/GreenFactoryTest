import { ButtonHTMLAttributes, ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	variant?: 'submit' | 'logout'
}

export default function Button(props: ButtonProps) {
	const { children, type } = props

	return (
		<button type={type} {...props} className={`${props.className} ${style.button}`}>
			{children}
		</button>
	)
}
