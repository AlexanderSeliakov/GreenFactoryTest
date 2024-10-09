import style from './Input.module.scss'

//  Here, the label is also used as the name attr for simplicity
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export default function Input(props: InputProps) {
	const { label } = props
	return (
		<div className={style.inputWrapper}>
			<label className={style.label} htmlFor={label}>
				{label}
			</label>
			<input className={style.input} {...props} />
		</div>
	)
}
