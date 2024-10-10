import { Book } from '../../../../services/api'
import BooksItem from '../BookItem/BookItem'
import style from './BooksList.module.scss'

interface BooksListProps {
	books: Book[]
}

export default function BooksList(props: BooksListProps) {
	const { books } = props
	return (
		<div className={style.BooksList}>
			{books.map((book, i) => (
				<BooksItem book={book} key={i} />
			))}
		</div>
	)
}
