import { useEffect, useMemo, useState } from 'react'
import { Book } from '../../services/api'
import { useDebounce } from '../../hooks/useDebounce'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import BooksList from '../Books/BooksList'
import SearchBar from './SearchBar'
import Pagination from '../UI/Pagination'
import Button from '../UI/Button'

import style from './SearchPage.module.scss'

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

	// Render the page content based on the loading state
	const PageContent = () => {
		if (error)
			return (
				<>
					<p>Something went wrong</p>
					<p>{error.message}</p>
					<Button onClick={() => window.location.reload()}>Reload</Button>
				</>
			)

		if (isLoading) return <div>Loading</div>

		return (
			<>
				<BooksList books={books} />
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</>
		)
	}

	return (
		<div className={style.home}>
			<SearchBar onQueryChange={setQuery} query={query} />
			{total > 0 && (
				<p className={style.totalBook}>Total books found: {total.toLocaleString('en')}</p>
			)}
			{PageContent()}
		</div>
	)
}
