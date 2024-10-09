import { Book } from '../../services/api'
import Card from '../UI/Card'

interface BooksItemProps {
	book: Book
}

export default function BooksItem(props: BooksItemProps) {
	const { book } = props
	console.log({ book })

	return (
		<Card>
			<p>
				<h3>Title: {book.title}</h3>
			</p>
			<p>
				<b>Author</b>: {book.author_name?.join(', ')}
			</p>
			<p>First publish year: {book.first_publish_year}</p>
			<p>Edition Count: {book.edition_count}</p>
		</Card>
	)
}
