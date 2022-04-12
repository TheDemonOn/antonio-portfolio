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
	const [sideNavArr, setSideNavArr] = useState([0, 0, 0, 0, 0])

	const updateSideNav = (x) => {
		if (sideNavArr[x] !== 1) {
			sideNavArr.fill(0)
			sideNavArr[x] = 1
			setSideNavArr([...sideNavArr])
		}
	}

	useEffect(() => {
		let e = document.getElementById('side-nav')
		let arr = Array.from(e.children)
		let index = sideNavArr.findIndex((x) => x === 1)
		if (index !== -1) {
			arr.map((e) => {
				e.removeAttribute('class')
			})
			arr[index].setAttribute('class', styles.activeSideNav)
		}
	}, [sideNavArr])

	useEffect(() => {
		let bg = document.getElementById('projectList')
		bg.setAttribute('style', `background-color: ${bgColor};`)
	}, [bgColor])

	// This custom hook is the result of a lot of headache and misunderstanding about how to use the original implementation I got the design from.
	// This version is my modified version which uses the Intersection Observer Api.
	// Because the area I am trying to measure the progress of scrolling through is larger than the viewport I have the rootMargin set to be X00% since the area I am trying to measure is X times the viewport height.
	const thresholdArr = [0.29, 0.49, 0.69, 0.89]
	const [ref] = useIntersect({
		threshold: thresholdArr,
		rootMargin: '500% 0px 0px 0px',
		func: (e) => {
			let ratio = e[0].intersectionRatio
			if (ratio > thresholdArr[3]) {
				// First portfolio
				setBgColor('#A4BFCB')
				updateSideNav(4)
			} else if (ratio >= thresholdArr[2]) {
				// Random Test
				setBgColor('#D6C3AE')
				updateSideNav(3)
			} else if (ratio >= thresholdArr[1]) {
				// Shop Antonio
				setBgColor('#c2dab8')
				updateSideNav(2)
			} else if (ratio >= thresholdArr[0]) {
				// Rhyming Word Generator
				setBgColor('#8db9d0')
				updateSideNav(1)
			} else {
				// Autojack
				setBgColor('#e3ddf3')
				updateSideNav(0)
			}
		},
	})

	const [sideNavClass, setSideNavClass] = useState(styles.sideNavStatic)

	const [ref2] = useIntersect({
		threshold: [0.95, 0.96, 0.97, 0.98, 0.99, 1],
		func: (e) => {
			if (e[0].intersectionRatio >= 0.98) {
				console.log('Switch now')
				setSideNavClass(styles.sideNav)
			}
		},
	})

	const [ref3] = useIntersect({
		threshold: [0.1],
		func: (e) => {
			if (e[0].intersectionRatio >= 0.1) {
				setSideNavClass(styles.sideNav)
			}
		},
	})

	const [refSideNavStatic] = useIntersect({
		threshold: [0.02],
		func: (e) => {
			if (e[0].intersectionRatio >= 0.02) {
				setSideNavClass(styles.sideNavStatic)
			}
		},
	})

	return (
		<>
			<Head>
				<title>Antonio Zamora</title>
			</Head>
			<header className={styles.header}>
				<div>
					<a href="#projectList">Projects</a>
					<a>About</a>
				</div>
				<span>ANTONIO ZAMORA</span>
				<div>
					<a>Contact</a>
					<a>GitHub</a>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.section} ref={refSideNavStatic}>
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
					<nav id="side-nav" className={sideNavClass}>
						<a href="#1" className={styles.activeSideNav}></a>
						<a href="#2"></a>
						<a href="#3"></a>
						<a href="#4"></a>
						<a href="#5"></a>
					</nav>
					<Project
						title="Autojack"
						color="#e3ddf3"
						position="1"
						linkName="Get Jacked."
						link="https://autojack.netlify.app/"
						content="An awe-inspiring display of my radical skills. Autojack is designed to do play
								Blackjack so the user doesn't have to. But they totally can. And that's the beauty
								of it. Ask yourself, where would we be without Autojack?"
						ref={ref2}
					/>
					<Project
						title="Rhyming Word Generator"
						color="#8db9d0"
						position="2"
						linkName="Generate Nonsense."
						link="https://wordgenerator.netlify.app/"
						content="My first project, an exploration of Javascript, turned into a deep dive on the structure 
						of English words. This generator produces words unknown to man, and makes them mostly rhyme. Instant poetry."
						ref={ref3}
					/>
					<Project
						title="Shop Antonio"
						color="#B7B6CE"
						position="3"
						linkName="Browse my fake store."
						content="Feeling that I hadn't demonstrated enough practical real world examples, I set out to create an e-commerce site with all the features expected.."
					/>
					<Project
						title="Random Test"
						color="#c2dab8"
						position="4"
						linkName="Be Random."
						content="Some words."
					/>
					<Project
						title="First Portfolio"
						color="#B7B6CE"
						position="5"
						linkName="Be Random."
						content="Some words."
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.collage}>{/* 7 Images */}</div>
					<div>
						<h3>Who I am</h3>
						<h4>Antonio Zamora, front-end developer</h4>
						<p>
							I found my love for programming when I decided to take a closer look at code and found
							that solving problems was fun.
						</p>
						<p>
							I primarily focus on heavy use of Javascript using React, and more recently Next.js.
						</p>
						<p>I have experience taking web designs and turning them into reality.</p>
					</div>
				</div>
				<div className={styles.contact}></div>
			</main>
		</>
	)
}
