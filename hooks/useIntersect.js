import { useState, useEffect, useRef } from 'react'

// From Travis Waith-Mair at: https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

export default function useIntersect({ root = null, rootMargin = '0px', threshold = 0, func }) {
	const [node, setNode] = useState(null)

	const observer = useRef(null)

	useEffect(() => {
		if (observer.current) {
			observer.current.disconnect()
		}
		observer.current = new IntersectionObserver(func, { root, rootMargin, threshold })

		const { current: currentObserver } = observer

		if (node) {
			currentObserver.observe(node)
		}

		return () => {
			currentObserver.disconnect()
		}
	}, [node, root, rootMargin, threshold, func])

	return [setNode]
}
