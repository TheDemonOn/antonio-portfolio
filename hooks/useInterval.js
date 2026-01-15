import { useEffect, useRef } from 'react'

// Thanks to Dan Abramov's explanation and implementation of setInterval in hooks: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export default function useInterval(callback, delay, callback2) {
  // First we create the ref which will store the function we want to pass into it.
  const ref = useRef()

  // As is usual with a useRef formula: the .current is set to the value we want to know the value of in between renders.
  useEffect(() => {
    ref.current = callback
  }, [callback])

  // This is where it gets more complicated. I need to understand the whys a bit better to explain it myself.
  useEffect(() => {
    // This function is used to access the previous callback, which is a placeholder for the contents of our setInterval.
    const tick = () => {
      ref.current()
    }
    callback2()
    let id = setInterval(tick, delay)

    return () => {
      clearInterval(id)
    }
  }, [delay])
}
