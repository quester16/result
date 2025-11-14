import { useEffect, useState } from 'react'

export const useFetch = (url) => {
	
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)
	
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			setError(null)
			
			try {
				const request = await fetch(url)
				const data = await request.json()
				setData(data)
				
				if (!request.ok) {
					throw new Error('Request failed with status ' + request.status)
				}
			} catch (e) {
				setError(e)
				setData(null)
			} finally {
				setIsLoading(false)
			}
		}
		
		fetchData()
	}, [url])
	
	
	async function refetch({ params }) {
		setIsLoading(true)
		setError(null)
		
		try {
			const request = await fetch(url + '?' + new URLSearchParams(params))
			const data = await request.json()
			setData(data)
			
			if (!request.ok) {
				throw new Error('Request failed with status ' + request.status)
			}
		} catch (e) {
			setIsLoading(false)
			setError(e)
			setData(null)
			console.error(e.message)
		} finally {
			setIsLoading(false)
		}
	}
	
	return {
		data: error ? null : data,
		isLoading,
		error,
		refetch
	}
	
}