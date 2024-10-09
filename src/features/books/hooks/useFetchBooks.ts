import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import { SearchResponse } from '../../../services/api'
import { SearchContext } from '../../search/context/SearchContext'
import { booksQuery } from '../services/booksApi'

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
