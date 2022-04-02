import { useState, useEffect, useLayoutEffect } from 'react'

import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import useInterval from '../hooks/useInterval'

export default function Home() {
	const [changingTextNum, setChangingTextNum] = useState(0)
	const [changingText, setChangingText] = useState('developer of the front-end.')

	// This is a custom hook.
	useInterval(() => {
		setChangingTextNum(changingTextNum + 1)
	}, 3000)

	const [changingStyle, setChangingStyle] = useState(styles.changingTextIntro)
	const [rotatingElements, setRotatingElements] = useState()
	// This useEffect takes all the elements within the rotating text section and turns them into an array.
	useEffect(() => {
		let e = document.getElementsByClassName(styles.changing)[0]
		setRotatingElements(Array.from(e.children))
	}, [])

	// This useEffect controls the changing text.
	useLayoutEffect(() => {
		if (rotatingElements) {
			// changingTextNum is used to access the array of changing elements.
			// If it were to point to an index that doesn't exist it will reset
			if (changingTextNum > rotatingElements.length - 1) {
				setChangingTextNum(0)
				rotatingElements[rotatingElements.length - 1].removeAttribute('class')
			} else {
				// This sets the index element to be the active class.
				rotatingElements[changingTextNum].setAttribute('class', styles.active)
				// This removes the previous active class so only one exists.
				if (rotatingElements[changingTextNum - 1]) {
					rotatingElements[changingTextNum - 1].removeAttribute('class')
				}
			}
		}
	}, [changingTextNum])

	return (
		<>
			<Head>
				<title>Antonio Zamora</title>
			</Head>
			<header>Code Antonio</header>
			<main className={styles.main}>
				<div className={styles.firstSection}>
					<div className={styles.splitLeft}>
						<p>I am Antonio,</p>
						<ul className={styles.changing}>
							<li className={styles.active}>
								<span>developer of the front-end.</span>
							</li>
							<li>
								<span>manipulator of Javascript.</span>
							</li>
							<li>
								<span>solver of problems.</span>
							</li>
							<li>
								<span>lover of cats.</span>
							</li>
							<li>
								<span>VR enthusiast.</span>
							</li>
						</ul>
					</div>
					<div className={styles.splitRight}></div>
				</div>
			</main>
		</>
	)
}
