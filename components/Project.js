import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'

export default function Project({ name, color, linkName, link, img, content, position }) {
	// useEffect(() => {
	// 	let e = Array.from(document.getElementById('projectList'))
	// 	console.log(e)
	// }, [])

	return (
		<>
			<div className={styles.fullSection} id={position}>
				<div className={styles.right}>
					<div className={styles.pictureFrame}></div>
				</div>
				<div className={styles.left}>
					<div className={styles.project}>
						<h3 className={styles.altText}>PROJECT {position}</h3>
						<div className={styles.projectSub}>
							<h2 className={styles.projectTitle}>{name}</h2>
							<section className={styles.description}>{content}</section>
							<a className={styles.link} href={link}>
								{linkName}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
