// src/contexts/SearchContext.tsx
import React, { createContext, useState, ReactNode } from 'react'

interface SearchContextProps {
	averageDuration: number
	lastDuration: number
	setAverageDuration: (duration: number) => void
}

export const SearchContext = createContext<SearchContextProps>({
	averageDuration: 0,
	lastDuration: 0,
	setAverageDuration: () => {},
})

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [averageDuration, setAverageDurationState] = useState<number>(0)
	const [totalDuration, setTotalDuration] = useState<number>(0)
	const [fetchCount, setFetchCount] = useState<number>(0)
	const [lastDuration, setLastDuration] = useState<number>(0)

	// TODO remake
	const setAverageDuration = (duration: number) => {
		setLastDuration(Number(duration.toFixed(2)) / 1000)
		setTotalDuration((prev) => prev + duration)
		setFetchCount((prev) => prev + 1)
		setAverageDurationState(
			Number(((totalDuration + duration) / (fetchCount + 1)).toFixed(2)) / 1000
		)
	}

	return (
		<SearchContext.Provider value={{ averageDuration, setAverageDuration, lastDuration }}>
			{children}
		</SearchContext.Provider>
	)
}
