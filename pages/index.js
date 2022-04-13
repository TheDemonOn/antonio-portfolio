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

	const [blue, setBlue] = useState()
	const [yellow, setYellow] = useState()
	const [purple, setPurple] = useState()
	const [green, setGreen] = useState()
	useEffect(() => {
		setBlue(getComputedStyle(document.documentElement).getPropertyValue('--blue-color'))
		setYellow(getComputedStyle(document.documentElement).getPropertyValue('--yellow-color'))
		setPurple(getComputedStyle(document.documentElement).getPropertyValue('--purple-color'))
		setGreen(getComputedStyle(document.documentElement).getPropertyValue('--green-color'))
	}, [])

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
		let bg = document.getElementById('project-list')
		bg.setAttribute('style', `background-color: ${bgColor};`)
	}, [bgColor])

	// This custom hook is the result of a lot of headache and misunderstanding about how to use the original implementation I got the design from.
	// This version is my modified version which uses the Intersection Observer Api.
	// Because the area I am trying to measure the progress of scrolling through is larger than the viewport I have the rootMargin set to be X00% since the area I am trying to measure is X times the viewport height.
	const thresholdArr = [0.29, 0.49, 0.69, 0.89]
	const [refColorChange] = useIntersect({
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
				setBgColor(green)
				updateSideNav(2)
			} else if (ratio >= thresholdArr[0]) {
				// Rhyming Word Generator
				setBgColor(blue)
				updateSideNav(1)
			} else {
				// Autojack
				setBgColor(purple)
				updateSideNav(0)
			}
		},
	})

	const [sideNavClass, setSideNavClass] = useState(styles.sideNavStatic)

	const [refSideNavSticky] = useIntersect({
		threshold: [0.98, 0.99, 1],
		func: (e) => {
			if (sideNavClass !== styles.sideNav) {
				if (e[0].intersectionRatio >= 0.98) {
					setSideNavClass(styles.sideNav)
				}
			}
		},
	})

	const [refMissedSticky] = useIntersect({
		threshold: [0.1],
		func: (e) => {
			if (sideNavClass !== styles.sideNav) {
				if (e[0].intersectionRatio >= 0.1) {
					setSideNavClass(styles.sideNav)
				}
			}
		},
	})

	const [refSideNavStatic] = useIntersect({
		threshold: [0.02],
		func: (e) => {
			if (sideNavClass !== styles.sideNavStatic) {
				if (e[0].intersectionRatio >= 0.02) {
					setSideNavClass(styles.sideNavStatic)
				}
			}
		},
	})

	const [refEndSticky] = useIntersect({
		threshold: [0.01],
		rootMargin: '1.1%',
		func: (e) => {
			// console.log(e[0].intersectionRatio)
			if (e[0].intersectionRatio > 0 && sideNavClass !== styles.sideNav) {
				setSideNavClass(styles.sideNav)
			}
		},
	})

	const [refEndStatic] = useIntersect({
		threshold: [0.01],
		func: (e) => {
			if (e[0].intersectionRatio > 0 && sideNavClass !== styles.sideNavStaticBottom) {
				console.log('first')
				setSideNavClass(styles.sideNavStaticBottom)
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
					<a href="#project-list">Projects</a>
					<a>About</a>
				</div>
				<span className={styles.antonio}>ANTONIO ZAMORA</span>
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
				<div id="project-list" ref={refColorChange}>
					<nav id="side-nav" className={sideNavClass}>
						<a href="#1" className={styles.activeSideNav}></a>
						<a href="#2"></a>
						<a href="#3"></a>
						<a href="#4"></a>
						<a href="#5"></a>
					</nav>
					<Project
						title="Autojack"
						position="1"
						linkName="Get Jacked."
						link="https://autojack.netlify.app/"
						content="An awe-inspiring display of my radical skills. Autojack is designed to do play
								Blackjack so the user doesn't have to. But they totally can. And that's the beauty
								of it. Ask yourself, where would we be without Autojack?"
						ref={refSideNavSticky}
					/>
					<Project
						title="Rhyming Word Generator"
						position="2"
						linkName="Generate Nonsense."
						link="https://wordgenerator.netlify.app/"
						content="My first project, an exploration of Javascript, turned into a deep dive on the structure 
						of English words. This generator produces words unknown to man, and makes them mostly rhyme. Instant poetry."
						ref={refMissedSticky}
					/>
					<Project
						title="Shop Antonio"
						position="3"
						linkName="Browse my fake store."
						content="Feeling that I hadn't demonstrated enough practical real-world examples, I set out to create an e-commerce site with all the features you'd expect. Welcome to Shop Antonio."
					/>
					<Project
						title="Random Test"
						position="4"
						linkName="Be Random."
						content="The project where I first learned how to use an API, react context, and chart.js for some visualization. It shows the difference between two methods of generating values, and their distribution of 0's or 1's in a row."
						ref={refEndSticky}
					/>
					<Project
						title="First Portfolio"
						position="5"
						linkName="A blast to the not-so-distant past."
						content="The first version of my portfolio, a labor of love, and an interesting gimmick, but ultimately not the representation of myself I desired."
					/>
				</div>
				<div className={styles.section} ref={refEndStatic}>
					<div className={styles.aboutMe}>
						<div className={styles.collage}>
							{/* 7 Images */}
							{/* Picsssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
							<div className={styles.illustration}>illustration</div>
							<div className={styles.photo}>photo</div>
							<div className={styles.me}>me</div>
							<div className={styles.signs}>
								<div className={styles.sign1}>sign 1</div>
								<div className={styles.sign2}>sign 2</div>
								<div className={styles.sign3}>sign 3</div>
								<div className={styles.sign4}>sign 4</div>
							</div>
						</div>
						<div className={styles.aboutText}>
							<h3>Who I am</h3>
							<h4>Antonio Zamora, front-end developer.</h4>
							<p>
								I found my love for programming when I decided to take a closer look at code and
								found that solving problems was fun.
							</p>
							<p>
								I primarily focus on heavy use of Javascript using React, and more recently Next.js.
							</p>
							<p>I have experience taking web designs and turning them into reality.</p>
							<h4>Some Text, those are words.</h4>
							<p>
								I enjoy playing Dungeons and Dragons every Monday. I also love cats, cooking, and
								video games.
							</p>
							<p>
								I was born and raised in the Bay Area, CA. I currently reside near Bloomington, IN.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.contact}>
					<div className={styles.contactText}>
						<h3>CONTACT</h3>
						<h2>Get in touch</h2>
					</div>
					<div className={styles.links}>
						<a>
							<div
								style={{
									backgroundColor: blue,
								}}
							></div>
							<p>linkedin</p>
						</a>
						<a>
							<div
								style={{
									backgroundColor: yellow,
								}}
							></div>
							<p>me@codeantonio.com</p>
						</a>
						<a>
							<div
								style={{
									backgroundColor: purple,
								}}
							></div>
							<p>937 782 9060</p>
						</a>
					</div>
				</div>
				<footer>
					<span className={styles.antonioFooter}>ANTONIO ZAMORA</span>
					<p className={styles.credits}>
						Design by <span>Jess Simons.</span> Code by me.
					</p>
					<a className={styles.githubFooter}>GitHub</a>
				</footer>
			</main>
		</>
	)
}
