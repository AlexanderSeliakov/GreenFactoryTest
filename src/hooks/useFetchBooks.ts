import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { booksQuery, SearchResponse } from '../services/api'
import { useQuery } from '@tanstack/react-query'

export interface UseFetchBooksProps {
	query: string
	page: number
}

export const useFetchBooks = (props: UseFetchBooksProps) => {
	const { query, page } = props
	const { setAverageDuration } = useContext(SearchContext)
	return useQuery<SearchResponse, Error>({
		queryFn: async () => {
			const startTime = performance.now()
			const data = await booksQuery(query, page)
			const endTime = performance.now()
			const duration = endTime - startTime
			setAverageDuration(duration)
			return data
		},

		queryKey: ['books', query, page],
		enabled: query.trim().length > 0,
	})
}
