import { ChangeEvent } from 'react'

import Input from '../../UI/Input'

interface SearchBarProps {
	query: string
	onQueryChange: (query: string) => void
}

export default function SearchBar(props: SearchBarProps) {
	const { query, onQueryChange } = props

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)

	return <Input value={query} onChange={handleChange} placeholder='What you want to find?' />
}
