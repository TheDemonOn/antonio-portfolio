import { useState, useEffect, useLayoutEffect } from 'react'

import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Project from '../components/Project'
import useInterval from '../hooks/useInterval'
import useIntersect from '../hooks/useIntersect'

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

	const [bgColor, setBgColor] = useState('#e3ddf3')

	useEffect(() => {
		let bg = document.getElementById('projectList')
		bg.setAttribute('style', `background-color: ${bgColor};`)
	}, [bgColor])

	// This custom hook is the result of a lot of headache and misunderstanding about how to use the original implementation I got the design from.
	// This version is my modified version which uses the Intersection Observer Api.
	// Because the area I am trying to measure the progress of scrolling through is larger than the viewport I have the rootMargin set to be 400% since the area I am trying to measure is 4 times the viewport height.
	const [ref] = useIntersect({
		threshold: [0.36, 0.62, 0.87],
		rootMargin: '400% 0px 0px 0px',
		func: (e) => {
			let ratio = e[0].intersectionRatio
			if (ratio > 0.87) {
				// First portfolio
				setBgColor('#A4BFCB')
			} else if (ratio >= 0.62) {
				// Random Test
				setBgColor('#D6C3AE')
			} else if (ratio >= 0.36) {
				// Rhyming Word Generator
				setBgColor('#c2dab8')
			} else {
				// Autojack
				setBgColor('#e3ddf3')
			}
		},
	})

	return (
		<>
			<Head>
				<title>Antonio Zamora</title>
			</Head>
			<header>
				<a href="#projectList">Projects</a>
				<span>Code Antonio</span>
			</header>
			<main className={styles.main}>
				<div className={styles.firstSection}>
					<div className={styles.splitLeft}>
						<div className={styles.firstText}>
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
									<span>enthusiast of VR.</span>
								</li>
							</ul>
						</div>
					</div>
					<div id="video" className={styles.splitRight}>
						Video here
					</div>
				</div>
				<div id="projectList" ref={ref}>
					<Project
						name="Autojack"
						color="#e3ddf3"
						position="1"
						linkName="Get Jacked."
						link="https://autojack.netlify.app/"
						content="An awe-inspiring display of my radical skills. Autojack is designed to do play
								Blackjack so the user doesn't have to. But they totally can. And that's the beauty
								of it. Ask yourself, where would we be without Autojack?"
					/>
					<Project
						name="Rhyming Word Generator"
						color="#8db9d0"
						position="2"
						linkName="Generate Nonsense."
						link="https://wordgenerator.netlify.app/"
						content="My first project, an exploration of Javascript, turned into a deep dive on the structure 
						of English words. This generator produces words unknown to man, and makes them mostly rhyme. Instant poetry."
					/>
					<Project
						name="Random Test"
						color="#c2dab8"
						position="3"
						linkName="Be Random."
						content="Some words."
					/>
					<Project
						name="First Portfolio"
						color="#B7B6CE"
						position="4"
						linkName="Be Random."
						content="Some words."
					/>
				</div>
			</main>
		</>
	)
}
