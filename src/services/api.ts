import axios from 'axios'

// Must be env var in a real project
export const BASE_URL = 'https://openlibrary.org/search.json'

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

export const api = axios.create({
	baseURL: BASE_URL,
})
