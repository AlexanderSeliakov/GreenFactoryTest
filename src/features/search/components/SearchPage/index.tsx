import { useEffect, useMemo, useState } from 'react'

import { Book } from '../../../../services/api'
import { useFetchBooks } from '../../../books/hooks/useFetchBooks'

import { useDebounce } from '../../hooks/useDebounce'
import SearchBar from '../SearchBar'

import style from './SearchPage.module.scss'
import SearchResults from '../SearchResults'

export default function SearchPage() {
	const [query, setQuery] = useState<string>('')
	const [currentPage, setCurrentPage] = useState<number>(3)
	const debouncedQuery = useDebounce<string>(query, 500)

	const { data, isLoading, error } = useFetchBooks({
		query: debouncedQuery,
		page: currentPage,
	})

	useEffect(() => {
		setCurrentPage(1)
	}, [debouncedQuery])

	const books: Book[] = data?.docs || []
	const total: number = data?.numFound || 0

	// Hardcoded 10 books per page. must be set to default or global var
	const totalPages = useMemo(() => Math.ceil(total / 10), [total])

	return (
		<div className={style.home}>
			<SearchBar onQueryChange={setQuery} query={query} />
			{total > 0 && (
				<p className={style.totalBook}>Total books found: {total.toLocaleString('en')}</p>
			)}
			<SearchResults
				books={books}
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={setCurrentPage}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	)
}
