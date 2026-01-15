import { useState, useEffect, useLayoutEffect, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Project from '../components/Project'
import SVG from '../components/SVG'
import useInterval from '../hooks/useInterval'
import useIntersect from '../hooks/useIntersect'

import VideoLoad from '../images/v2_VideoLoad.png'
import AntonioStraw from '../images/AntonioStraw.png'
import AntonioElf from '../images/AntonioElf.png'
import AntonioOcean from '../images/AntonioOcean.png'
import AntonioFerris from '../images/AntonioFerris.png'
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
import Experience from '../components/Experience'

export default function Home() {
  const [changingTextNum, setChangingTextNum] = useState(0)

  const checkToSeeIfPlay = () => {
    if (initialVideoLoad === 1) {
      document.getElementById('backgroundVideo').play()
    }
  }

  const [initialVideoLoad, setInitialVideoLoad] = useState(0)

  const InitialPlayLoad = () => {
    if (initialVideoLoad === 0) {
      setInitialVideoLoad(1)
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
        document.getElementById('backgroundVideo').currentTime = 3
      } else if (changingTextNum === 3) {
        document.getElementById('backgroundVideo').currentTime = 9
      }
    }
  }, [changingTextNum])

  const [blue, setBlue] = useState()
  const [yellow, setYellow] = useState()
  const [purple, setPurple] = useState()
  useEffect(() => {
    setBlue(getComputedStyle(document.documentElement).getPropertyValue('--blue-color'))
    setYellow(
      getComputedStyle(document.documentElement).getPropertyValue('--yellow-color')
    )
    setPurple(
      getComputedStyle(document.documentElement).getPropertyValue('--purple-color')
    )
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
        setBgColor('#bdd9b2')
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

  // This function takes in two elements, a parent and a child, and sets the scale of the child dynamically relative to the parent.
  const Scale = (wrapper, content) => {
    if (window.innerWidth <= 800) {
      content.style.transform = 'scale(1)'
      let { width: cw, height: ch } = content.getBoundingClientRect()
      let { width: wrw, height: wrh } = wrapper.getBoundingClientRect()
      let scale = Math.min(wrw / cw, wrh / ch)

      // This sets the border thickness to become thicker when the collage scales down to keep the thickness apearing the same size.
      let collage = document.getElementById('collage').childNodes
      if (scale <= 0.82) {
        for (let i = 0; i < Math.max(collage.length, signs.length); i++) {
          if (collage[i].nodeName == 'DIV') {
            collage[i].style.borderWidth = '3px'
          }
        }
      } else {
        for (let i = 0; i < Math.max(collage.length, signs.length); i++) {
          if (collage[i].nodeName == 'DIV') {
            collage[i].style.borderWidth = '2px'
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
        e.target.parentElement.firstElementChild.focus()
        break
      case 'End':
        e.target.parentElement.lastElementChild.focus()
        break
    }
  }

  return (
    <div className="rootDiv">
      <Head>
        <title>Antonio Zamora</title>
      </Head>
      <header>
        <nav className={styles.header}>
          <div>
            <a href="#main-content" id="navSkip">
              Skip Navigation
            </a>
            <div className={styles.navItems}>
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
          </div>
          <div className={styles.header2}>
            <span>
              ANTONIO <b className="white">ZAMORA</b>
            </span>
            <div className={styles.navItems + ' white'}>
              <a href="#contact">Contact</a>
              <a href="https://github.com/TheDemonOn">GitHub</a>
            </div>
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
            <a
              href="https://github.com/TheDemonOn"
              role="menuitem"
              onKeyDown={handleMobileNavMenu}
            >
              GitHub
            </a>
          </nav>
        </button>
        <div className={styles.mobileHeaderLine}></div>
      </header>
      <main className={styles.main} id="main-content">
        <section className={styles.section}>
          <div className={styles.splitLeft}>
            <div className={styles.firstText}>
              <p>I am Antonio,</p>
              <ul className={styles.changing}>
                <li className={styles.active}>
                  <span>developer of the front-end.</span>
                </li>
                <li>
                  <span>manipulator of TypeScript.</span>
                </li>
                <li>
                  <span>champion of accessibility.</span>
                </li>
                <li>
                  <span>experimenter of the culinary arts.</span>
                </li>
                <li>
                  <span>pursuer of health.</span>
                </li>
                <li>
                  <span>tipper of cows.</span>
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
              <source src="/v2_2025_Code_Antonio_Video.mp4" type="video/mp4"></source>
            </video>
          </div>
        </section>
        <div className={styles.profileArea}>
          <article className={styles.profileWindow}>
            <div className={styles.windowInside}>
              <section className={styles.section2} id="about-me">
                <div className={styles.aboutMe} ref={wrapper}>
                  <h1 style={{ 'margin-bottom': '2rem' }}>
                    Antonio Zamora, front-end developer.
                  </h1>
                  <div
                    className={styles.collage}
                    ref={content}
                    id="collage"
                    aria-hidden="true"
                  >
                    <div className={styles.illustration}>
                      <Image src={AntonioStraw} layout="fill" />
                    </div>
                    <div className={styles.photo}>
                      <Image src={AntonioElf} layout="fill" />
                    </div>
                    <div className={styles.me}>
                      <Image src={AntonioOcean} layout="fill" />
                    </div>
                    <div className={styles.ferris} id="signs">
                      <Image src={AntonioFerris} layout="fill" />
                    </div>
                  </div>
                  <div>
                    <p className={styles.aboutMeParagraph}>
                      I am a front-end developer with a focus on accessibility. I love
                      working on UI because of the fun problem solving that is required to
                      make everything beautiful, accessible, and fast in every possible
                      window dimension.
                    </p>
                    <p className={styles.aboutMeParagraph2}>
                      I do not use AI in my work, not because it can't be a great tool,
                      but because I want to further develop my skills internally.
                    </p>
                    <div>
                      <div className={styles.iconTextContainer}>
                        <div className={styles.SVGcontainer}>
                          <SVG name="origin" />
                        </div>
                        <p>Born and raised in the Bay Area, California</p>
                      </div>
                      <div className={styles.iconTextContainer}>
                        <div className={styles.SVGcontainer}>
                          <SVG name="house" />
                        </div>
                        <p>Now living near Bloomington, IN; EST timezone</p>
                      </div>
                      <div className={styles.iconTextContainer}>
                        <div className={styles.SVGcontainer}>
                          <SVG name="likes" />
                        </div>
                        <p>
                          Cats, cooking, video games, working out, nutrition, TTRPGs, and
                          learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                  <h1>Experience</h1>
                  <div className={styles.iconWithTextDesktop}>
                    <div className={styles.SVGcontainer}>
                      <SVG name="resume" />
                    </div>
                    <a
                      className={'hoverEffect + hoverEffectItem + underline'}
                      href="Antonio-Zamora_Resume_2026.pdf"
                    >
                      View my full resume
                    </a>
                  </div>
                </div>
                <Experience
                  src={'/images/ctrliq_logo.jpg'}
                  title={'Software Engineer - UI'}
                  years={['2023', '2024']}
                  company={'CIQ, Inc.'}
                  text={[
                    'Developed and maintained a variety of web apps and user interfaces, ensuring robust performance and user-centric design supported by researched based UX principles.',
                    'Created a React-based component library, significantly accelerating product development and facilitating scalability across our technology stack.',
                    'Developed and improved accessibility of components and apps by learning and implementing latest accessibility standards.',
                  ]}
                />
                <Experience
                  src={'/images/ctrliq_logo.jpg'}
                  title={'Engineering Apprentice'}
                  years={['2022', '2023']}
                  company={'CIQ, Inc.'}
                  text={[
                    'Learned how to operate within a small UI team, utilizing a Scrum framework to advance tickets using Jira.',
                    'Collaborated with a graphic designer to iterate and implement designs. Used TypeScript, Next.js, React-Router, and TanStack-Table.',
                  ]}
                />
                <div className={styles.iconWithTextMobile}>
                  <div className={styles.SVGcontainer}>
                    <SVG name="resume" />
                  </div>
                  <a
                    className={'hoverEffect + hoverEffectItem + underline'}
                    href="Antonio-Zamora_Resume_2026.pdf"
                  >
                    View my full resume
                  </a>
                </div>
              </section>
            </div>
          </article>
        </div>
        <section id="project-list" className={styles.projectSection} ref={refColorChange}>
          <div className={styles.sideNavContainer}>
            <nav id="side-nav">
              <a href="#1" aria-label="Project 1" className={styles.activeSideNav}></a>
              <a href="#2" aria-label="Project 2"></a>
              <a href="#3" aria-label="Project 3"></a>
              <a href="#4" aria-label="Project 4"></a>
              <a href="#5" aria-label="Project 5"></a>
            </nav>
          </div>

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
          />
          <Project
            title="First Portfolio"
            src={OldPortfolioA}
            srcHover={OldPortfolioB}
            alt="My first portfolio site!"
            position="5"
            link="https://oldportfolio1.netlify.app/"
            linkName="Gaze into the past."
            content="The first version of my portfolio, a labor of love, a gimmick, and a more in-depth explanation of my projects and their development."
          />
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <h3>CONTACT</h3>
              <h2>Get in touch</h2>
            </div>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/codeantonio/">
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
        </section>
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
    </div>
  )
}
