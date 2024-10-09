import React from 'react'
import BooksList from '../../../books/components/Books/BooksList'
import Pagination from '../../../../components/UI/Pagination'
import Button from '../../../../components/UI/Button'
import { Book } from '../../../../services/api'

interface SearchResultsProps {
	books: Book[]
	totalPages: number
	currentPage: number
	onPageChange: (page: number) => void
	isLoading: boolean
	error: Error | null
}

const SearchResults: React.FC<SearchResultsProps> = ({
	books,
	totalPages,
	currentPage,
	onPageChange,
	isLoading,
	error,
}) => {
	if (error)
		return (
			<>
				<p>Something went wrong</p>
				<p>{error.message}</p>
				<Button onClick={() => window.location.reload()}>Reload</Button>
			</>
		)

	if (isLoading) return <div>Loading...</div>

	return (
		<>
			<BooksList books={books} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={onPageChange}
			/>
		</>
	)
}

export default SearchResults
