import Card from '../../../../components/UI/Card'
import { Book } from '../../../../services/api'

interface BooksItemProps {
	book: Book
}

export default function BooksItem(props: BooksItemProps) {
	const { book } = props
	return (
		<Card>
			<p>
				<b>Title: {book.title}</b>
			</p>
			<p>
				<b>Author</b>: {book.author_name?.join(', ')}
			</p>
			<p>First publish year: {book.first_publish_year}</p>
			<p>Edition Count: {book.edition_count}</p>
		</Card>
	)
}
