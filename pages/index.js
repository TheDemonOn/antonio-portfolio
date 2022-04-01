import { useState, useEffect } from 'react'

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
		setTimeout(() => {
			setChangingStyle(styles.changingTextOutro)
		}, 2500)
	}, 3000)

	useEffect(() => {
		setTimeout(() => {
			setChangingStyle(styles.changingTextOutro)
		}, 2500)
	}, [])

	useEffect(() => {
		switch (changingTextNum) {
			case 0:
				setChangingText('developer of the front-end.')
				break
			case 1:
				setChangingText('manipluator of Javascript.')
				break
			case 2:
				setChangingText('solver of problems.')
				break
			case 3:
				setChangingText('lover of cats.')
				break
			case 4:
				setChangingText('VR enthusiast.')
				break
			default:
				setChangingTextNum(0)
		}
	}, [changingTextNum])

	const [changingStyle, setChangingStyle] = useState(styles.changingTextIntro)

	useEffect(() => {
		setChangingStyle(styles.changingTextIntro)
	}, [changingText])

	return (
		<>
			<Head>
				<title>Antonio Zamora</title>
			</Head>
			<header>Code Antonio</header>
			<main>
				<p>I am Antonio,</p>
				<h2 className={changingStyle}>{changingText}</h2>
			</main>
		</>
	)
}
