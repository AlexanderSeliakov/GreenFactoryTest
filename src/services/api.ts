import axios from 'axios'

export interface Book {
	key: string
	title: string
	author_name?: string[]
	edition_count?: number
	first_publish_year?: number
}

export interface SearchResponse {
	numFound: number
	start: number
	docs: Book[]
}

const BASE_URL = 'https://openlibrary.org/search.json'

export const api = axios.create({
	baseURL: BASE_URL,
})

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
			fields: 'key,title,author_name', // Fields to return
		},
	})

	return response.data
}
