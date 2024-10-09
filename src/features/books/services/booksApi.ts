import { BASE_URL, SearchResponse, api } from '../../../services/api'

export const booksQuery = async (
	query: string,
	page: number,
	limit: number = 10
): Promise<SearchResponse> => {
	try {
		const response = await api.get<SearchResponse>(BASE_URL, {
			params: {
				q: query.replace(' ', '_'), // Query string
				page, // Page number
				limit, // Number of results per page
				fields: 'key,title,author_name,first_publish_year,edition_count', // Fields to return
			},
		})
		return response.data
		// next line is a workaround to avoid a TypeScript error. not the best solution
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		throw new Error(
			error.response?.status === 503
				? 'The service is temporarily unavailable. Please try again later.'
				: 'Failed to fetch books. Please check your connection or try again later.'
		)
	}
}
