import { BASE_URL, SearchResponse, api } from '../../../services/api'

export const booksQuery = async (
	query: string,
	page: number,
	limit: number = 10
): Promise<SearchResponse> => {
	const response = await api.get<SearchResponse>(BASE_URL, {
		params: {
			q: query.replace(' ', '_'), // Query string
			page, // Page number
			limit, // Number of results per page
			fields: 'key,title,author_name,first_publish_year,edition_count', // Fields to return
		},
	})

	return response.data
}
