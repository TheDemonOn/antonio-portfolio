import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'

export default function Project({ name, color, linkName, link, img, content, position }) {
	// useEffect(() => {
	// 	let e = Array.from(document.getElementById('projectList'))
	// 	console.log(e)
	// }, [])

	return (
		<>
			<div className={styles.fullSection}>
				<div className={styles.splitLeft}>
					<div className={styles.project}>
						<h3>Project {position}</h3>
						<div className={styles.projectSub}>
							<h2>{name}</h2>
							<section>{content}</section>
							<a className={styles.link} href={link}>
								{linkName}
							</a>
						</div>
					</div>
				</div>
				<div className={styles.splitRight}>
					<div className={styles.pictureFrame}></div>
				</div>
			</div>
		</>
	)
}
