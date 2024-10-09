import { useCallback } from 'react'
import Button from '../../UI/Button'
import style from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

export default function Pagination(props: PaginationProps) {
	const { currentPage, totalPages, onPageChange } = props

	const handlePrev = () => {
		if (currentPage > 1) onPageChange(currentPage - 1)
	}

	const handleNext = () => {
		if (currentPage < totalPages) onPageChange(currentPage + 1)
	}

	const handlePageClick = (page: number) => {
		onPageChange(page)
	}

	const getPageNumbers = useCallback(() => {
		const maxVisible = 5
		const half = Math.floor(maxVisible / 2)

		// Calculate start and end ensuring they stay within valid bounds
		const start = Math.max(1, Math.min(currentPage - half, totalPages - maxVisible + 1))
		const end = Math.min(totalPages, start + maxVisible - 1)

		// Generate the array of page numbers
		return Array.from({ length: end - start + 1 }, (_, i) => i + start)
	}, [currentPage, totalPages])

	if (totalPages === 0) return null

	return (
		<div className={style.pagination}>
			<Button onClick={handlePrev} disabled={currentPage === 1}>
				Prev
			</Button>

			{getPageNumbers().map((page) => (
				<Button
					key={page}
					onClick={() => handlePageClick(page)}
					className={page === currentPage ? style.active : ''}
				>
					{page}
				</Button>
			))}

			<Button onClick={handleNext} disabled={currentPage >= totalPages}>
				Next
			</Button>
		</div>
	)
}
