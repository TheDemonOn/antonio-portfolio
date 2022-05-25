import { useState, useEffect, useLayoutEffect, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Project from '../components/Project'
import SVG from '../components/SVG'
import useInterval from '../hooks/useInterval'
import useIntersect from '../hooks/useIntersect'

import VideoLoad from '../images/VideoLoad.jpg'
import me from '../images/The_Boyz.jpg'
import Antonio from '../images/Ton_Headshot_2.jpg'
import AutojackA from '../images/AutojackA.jpg'
import AutojackB from '../images/AutojackB.jpg'
import WordGeneratorA from '../images/RWGA.jpg'
import WordGeneratorB from '../images/RWGB.jpg'
import OldPortfolioA from '../images/OldPortfolioA.jpg'
import OldPortfolioB from '../images/OldPortfolioB.jpg'
import ShopA from '../images/ShopA.jpg'
import ShopB from '../images/ShopB.jpg'
import RandomA from '../images/RandomA.jpg'
import RandomB from '../images/RandomB.jpg'

export default function Home() {
	const [changingTextNum, setChangingTextNum] = useState(0)

	const checkToSeeIfPlay = () => {
		if (initialVideoLoad === 1) {
			document.getElementById('backgroundVideo').play()
		}
	}

	// This is a custom hook.
	useInterval(
		() => {
			setChangingTextNum(changingTextNum + 1)
		},
		3000,
		checkToSeeIfPlay
	)

	const [initialVideoLoad, setInitialVideoLoad] = useState(0)

	const InitialPlayLoad = () => {
		if (initialVideoLoad === 0) {
			setInitialVideoLoad(1)
		}
	}

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
			if (changingTextNum === 1) {
				document.getElementById('backgroundVideo').currentTime = 2.7
			} else if (changingTextNum === 3) {
				document.getElementById('backgroundVideo').currentTime = 8.7
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
				setBgColor('#b2bada')
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
				setBgColor('#8db9d0')
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
					if (window.innerWidth > 800) {
						setSideNavClass(styles.sideNav)
					}
				}
			}
		},
	})

	const [refMissedSticky] = useIntersect({
		threshold: [0.1],
		func: (e) => {
			if (sideNavClass !== styles.sideNav) {
				if (e[0].intersectionRatio >= 0.1) {
					if (window.innerWidth > 800) {
						setSideNavClass(styles.sideNav)
					}
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
			if (e[0].intersectionRatio > 0 && sideNavClass !== styles.sideNav) {
				if (window.innerWidth > 800) {
					setSideNavClass(styles.sideNav)
				}
			}
		},
	})

	const [refEndStatic] = useIntersect({
		threshold: [0.01],
		func: (e) => {
			if (e[0].intersectionRatio > 0 && sideNavClass !== styles.sideNavStaticBottom) {
				setSideNavClass(styles.sideNavStaticBottom)
			}
		},
	})

	// This function takes in two elements, a parent and a child, and sets the scale of the child dynamically relative to the parent.
	const Scale = (wrapper, content) => {
		if (window.innerWidth <= 800) {
			content.style.transform = 'scale(1)'
			let { width: cw, height: ch } = content.getBoundingClientRect()
			let { width: wrw, height: wrh } = wrapper.getBoundingClientRect()
			let scale = Math.min(wrw / cw, wrh / ch)

			// This sets the border thickness to become thicker when the collage scales down to keep the thickness apearing the same size.
			let collage = document.getElementById('collage').childNodes
			let signs = document.getElementById('signs').childNodes
			if (scale <= 0.82) {
				for (let i = 0; i < Math.max(collage.length, signs.length); i++) {
					if (collage[i].nodeName == 'DIV') {
						collage[i].style.borderWidth = '3px'
					}
					if (signs[i].nodeName == 'DIV') {
						signs[i].style.borderWidth = '3px'
					}
				}
			} else {
				for (let i = 0; i < Math.max(collage.length, signs.length); i++) {
					if (collage[i].nodeName == 'DIV') {
						collage[i].style.borderWidth = '2px'
					}
					if (signs[i].nodeName == 'DIV') {
						signs[i].style.borderWidth = '2px'
					}
				}
			}
			// This actually scales the collage
			if (scale - 0.08 < 1 && scale !== 1) {
				content.style.transform = `scale(${scale - 0.08})`
				content.style.margin = `-${(1 - scale) * 18}rem 0`
			} else {
				content.removeAttribute('style')
			}
		} else {
			content.removeAttribute('style')
		}
	}

	const [screenWidth, setScreenWidth] = useState()
	useEffect(() => {
		const widthChange = () => {
			setScreenWidth(window.innerWidth)
		}
		window.addEventListener('resize', widthChange)
	}, [])

	const wrapper = useRef()
	const content = useRef()
	// This useEffect will trigger the scaling function when the screen size changes and onload.
	useEffect(() => {
		if (wrapper.current && content.current) {
			Scale(wrapper.current, content.current)
		}
	}, [wrapper.current, content.current, screenWidth])

	useEffect(() => {
		let video = document.getElementById('collageVideo')
		video.playbackRate = 0.5
		video.play()
	}, [])

	const [mobileNavStyle, setMobileNavStyle] = useState(styles.mobileNavHidden)

	const mobileNavToggle = (request) => {
		if (request === 'open' || request === 'close') {
			if (request === 'open') {
				setMobileNavStyle(styles.mobileNavVisible)
				setMobileNavExpanded('true')
			} else {
				setMobileNavStyle(styles.mobileNavHidden)
				setMobileNavExpanded('false')
			}
		} else {
			if (mobileNavStyle === styles.mobileNavHidden) {
				setMobileNavStyle(styles.mobileNavVisible)
				setMobileNavExpanded('true')
			} else {
				setMobileNavStyle(styles.mobileNavHidden)
				setMobileNavExpanded('false')
			}
		}
	}

	const jumpToAboutSpecific = () => {
		document.getElementById('about-me').scrollIntoView({ block: 'center' })
		history.pushState({}, '', '#about-me')
	}

	const keyboard = (e, func) => {
		if (e.key === 'Enter') {
			func()
		}
	}

	const handleDropdownClose = (e) => {
		let menu = document.getElementById('mobileNav')
		if (
			typeof menu !== 'undefined' &&
			menu !== null &&
			window.getComputedStyle(menu).visibility === 'visible'
		) {
			// If the sort menu is currently open
			if (!menu.contains(e.target)) {
				// if the area clicked is not within the menu, close it
				mobileNavToggle('close')
			}
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleDropdownClose)
		return () => {
			window.removeEventListener('click', handleDropdownClose)
		}
	}, [])

	const [mobileNavExpanded, setMobileNavExpanded] = useState('false')

	const handleMobileNavButton = (e) => {
		// KeyDown
		switch (e.key) {
			case 'ArrowDown':
			case ' ':
			case 'Enter':
				e.preventDefault()
				mobileNavToggle('open')
				setTimeout(() => {
					if (typeof e.target.attributes['aria-controls'] !== 'undefined') {
						let target = e.target.attributes['aria-controls'].value
						e.target.children[`${target}`].firstChild.focus()
					}
				}, 1)
				break
			case 'ArrowUp':
				e.preventDefault()
				mobileNavToggle('open')
				setTimeout(() => {
					if (typeof e.target.attributes['aria-controls'] !== 'undefined') {
						let target = e.target.attributes['aria-controls'].value
						e.target.children[`${target}`].lastChild.focus()
					}
				}, 1)
				break
		}
	}

	const handleMobileNavMenu = (e) => {
		e.stopPropagation()
		e.preventDefault()
		switch (e.key) {
			case ' ':
			case 'Enter':
				let x = e.target.attributes.href.value
				if (x.slice(0, 1) === '#') {
					setTimeout(() => {
						let element = document.getElementById(x.substring(1))
						console.log(element)
						element.focus()
						element.scrollIntoView()
					}, 1)
				} else {
					// Github link
					window.location.href = x
				}
				mobileNavToggle('close')
				break
			case 'Escape':
				mobileNavToggle('close')
				setTimeout(() => {
					e.target.parentElement.parentElement.focus()
				}, 1)
				break
			case 'ArrowUp':
				if (e.target.previousElementSibling === null) {
					// Go to last
					e.target.parentElement.lastElementChild.focus()
				} else {
					e.target.previousElementSibling.focus()
				}
				break
			case 'ArrowDown':
				if (e.target.nextElementSibling === null) {
					// Go to first
					e.target.parentElement.firstElementChild.focus()
				} else {
					e.target.nextElementSibling.focus()
				}
				break
			case 'Home':
				console.log(e.target.parentElement.firstElementChild)
				e.target.parentElement.firstElementChild.focus()
				break
			case 'End':
				e.target.parentElement.lastElementChild.focus()
				break
		}
	}

	return (
		<>
			<Head>
				<title>Antonio Zamora</title>
			</Head>
			<header>
				<nav className={styles.header}>
					<a href="#main-content" id="navSkip">
						Skip Navigation
					</a>
					<div>
						<a href="#project-list">Projects</a>
						<a
							tabIndex="0"
							onClick={jumpToAboutSpecific}
							onKeyDown={(e) => {
								keyboard(e, jumpToAboutSpecific)
							}}
						>
							About
						</a>
					</div>
					<span className={styles.antonio}>
						ANTONIO <b className="white">ZAMORA</b>
					</span>
					<div className="white">
						<a href="#contact">Contact</a>
						<a href="https://github.com/TheDemonOn">GitHub</a>
					</div>
				</nav>
				<button
					className={styles.headerMobile}
					onClick={(e) => {
						e.stopPropagation(), mobileNavToggle()
					}}
					onKeyDown={handleMobileNavButton}
					aria-haspopup="true"
					aria-controls="mobileNav"
					aria-expanded={mobileNavExpanded}
					aria-label="Navigation Menu"
					id="mobileNavButton"
				>
					<SVG name="hamburger" />
					<nav
						className={mobileNavStyle}
						id="mobileNav"
						onClick={(e) => {
							e.stopPropagation(), mobileNavToggle()
						}}
					>
						<a href="#project-list" role="menuitem" onKeyDown={handleMobileNavMenu}>
							Projects
						</a>
						<a href="#about-me" role="menuitem" onKeyDown={handleMobileNavMenu}>
							About
						</a>
						<a href="#contact" role="menuitem" onKeyDown={handleMobileNavMenu}>
							Contact
						</a>
						<a href="https://github.com/TheDemonOn" role="menuitem" onKeyDown={handleMobileNavMenu}>
							GitHub
						</a>
					</nav>
				</button>
			</header>
			<main className={styles.main} id="main-content">
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
								<li>
									<span>shredder of cheese.</span>
								</li>
							</ul>
						</div>
					</div>
					<div id="video" className={styles.splitRight} aria-hidden="true">
						<Image
							src={VideoLoad}
							layout="fill"
							objectFit="cover"
							placeholder="blur"
							priority
						></Image>
						<video
							id="backgroundVideo"
							preload="auto"
							tabIndex="-1"
							muted
							loop
							className={styles.video}
							onCanPlay={InitialPlayLoad()}
						>
							<source src="/CodeAntonio_Reel_Small.mp4" type="video/mp4"></source>
						</video>
					</div>
				</div>
				<div id="project-list" ref={refColorChange}>
					<nav id="side-nav" className={sideNavClass}>
						<a href="#1" aria-label="Project 1" className={styles.activeSideNav}></a>
						<a href="#2" aria-label="Project 2"></a>
						<a href="#3" aria-label="Project 3"></a>
						<a href="#4" aria-label="Project 4"></a>
						<a href="#5" aria-label="Project 5"></a>
					</nav>
					<Project
						title="Autojack"
						src={AutojackA}
						srcHover={AutojackB}
						alt="Autojack site!"
						position="1"
						linkName="Get Jacked."
						link="https://autojack.netlify.app/"
						content="An awe-inspiring display of my radical skills. Autojack is designed to play
								Blackjack so the user doesn't have to. But they totally can. And that's the beauty
								of it. Ask yourself, where would we be without Autojack?"
						ref={refSideNavSticky}
					/>
					<Project
						title="Rhyming Word Generator"
						src={WordGeneratorA}
						srcHover={WordGeneratorB}
						alt="Rhyming Word Generator site!"
						position="2"
						linkName="Generate Nonsense."
						link="https://wordgenerator.netlify.app/"
						content="My first project, an exploration of Javascript, turned into a deep dive on the structure 
						of English words. This generator produces words unknown to man, and makes them mostly rhyme. Instant poetry."
						ref={refMissedSticky}
					/>
					<Project
						title="Shop Antonio"
						src={ShopA}
						srcHover={ShopB}
						alt="Shop Antonio site!"
						position="3"
						linkName="Browse my fake store."
						link="https://shopantonio.netlify.app/"
						content="Feeling that I hadn't demonstrated enough practical real-world examples, I set out to create an e-commerce site with all the features you'd expect. Welcome to Shop Antonio."
					/>
					<Project
						title="Random Test"
						src={RandomA}
						srcHover={RandomB}
						alt="Random Test site!"
						position="4"
						linkName="Be Random."
						link="https://randomnesstest.netlify.app/"
						content="The project where I first learned how to use an API, react context, and chart.js for some visualization. Random Test shows the difference between two methods of generating values, and their distribution of 0's or 1's in a row."
						ref={refEndSticky}
					/>
					<Project
						title="First Portfolio"
						src={OldPortfolioA}
						srcHover={OldPortfolioB}
						alt="My first portfolio site!"
						position="5"
						link="https://oldportfolio1.netlify.app/"
						linkName="A blast to the not-so-distant past."
						content="The first version of my portfolio, a labor of love, gimmick, and a more in-depth explanation of the projects and their development."
					/>
				</div>
				<div className={styles.section2} ref={refEndStatic} id="about-me">
					<div className={styles.aboutMe} ref={wrapper}>
						<div className={styles.collage} ref={content} id="collage" aria-hidden="true">
							<div className={styles.illustration}>
								<Image src={Antonio} layout="fill" />
							</div>
							<div className={styles.photo}>
								<video id="collageVideo" tabIndex="-1" muted loop className={styles.video}>
									<source src="/Ton_Thoughtful.mp4" type="video/mp4"></source>
								</video>
							</div>
							<div className={styles.me}>
								<Image src={me} layout="fill" />
							</div>
							<div className={styles.signs} id="signs">
								<div className={styles.sign1}>
									<SVG name="sign1" />
								</div>
								<div className={styles.sign2}>
									<SVG name="sign2" />
								</div>
								<div className={styles.sign3}>
									<SVG name="sign3" />
								</div>
								<div className={styles.sign4}>
									<SVG name="sign4" />
								</div>
							</div>
						</div>
						<h3>Who I am</h3>
						<h4>Antonio Zamora, front-end developer.</h4>
						<p>
							I found my love for programming when I decided to take a closer look at code and found
							that solving problems was fun.
						</p>
						<p>
							I primarily focus on heavy use of Javascript using React, and more recently Next.js.
						</p>
						<p>I have experience taking web designs and turning them into reality.</p>

						<h4>Antonio Zamora, a real human.</h4>
						<p>
							I was born and raised in the Bay Area, CA. I currently reside near Bloomington, IN. I
							enjoy playing Dungeons and Dragons every Monday. I also love cats, cooking, and video
							games.
						</p>
						<div className={styles.aboutText} id="about-text">
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
							<h4>Antonio Zamora, a real human.</h4>
							<p>
								I was born and raised in the Bay Area, CA. I currently reside near Bloomington, IN.
							</p>
							<p>
								I enjoy playing Dungeons and Dragons every Monday. I also love cats, cooking, and
								video games.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.contact} id="contact">
					<div className={styles.contactContent}>
						<div className={styles.contactText}>
							<h3>CONTACT</h3>
							<h2>Get in touch</h2>
						</div>
						<div className={styles.links}>
							<a href="https://www.linkedin.com/in/antonio-zamora-developer/">
								<div
									style={{
										backgroundColor: blue,
									}}
									aria-hidden="true"
								>
									<SVG name="linkedin" />
								</div>
								<p className="hoverEffect">linkedin</p>
							</a>
							<a>
								<div
									style={{
										backgroundColor: yellow,
									}}
									aria-hidden="true"
								>
									<SVG name="email" />
								</div>
								<p className="hoverEffect">zamora88875@gmail.com</p>
							</a>
							<a>
								<div
									style={{
										backgroundColor: purple,
									}}
									aria-hidden="true"
								>
									<SVG name="phone" />
								</div>
								<p className="hoverEffect">937 782 9060</p>
							</a>
						</div>
					</div>
				</div>
				<footer>
					<span className={styles.antonioFooter}>ANTONIO ZAMORA</span>
					<p className={styles.credits}>
						Design by <a href="https://simonsjess.com/">Jess Simons.</a> Code by me.
					</p>
					<a className={styles.githubFooter} href="https://github.com/TheDemonOn">
						GitHub
					</a>
				</footer>
			</main>
		</>
	)
}
