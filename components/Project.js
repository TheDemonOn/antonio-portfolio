import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'

const Project = React.forwardRef(
	({ title, color, linkName, link, img, content, position }, ref) => {
		return (
			<>
				<div className={styles.fullSection} id={position} ref={ref}>
					<div className={styles.right}>
						<div className={styles.pictureFrame}></div>
					</div>
					<div className={styles.left}>
						<div className={styles.project}>
							<h3 className={styles.headingText}>PROJECT {position}</h3>
							<div className={styles.projectSub}>
								<h2 className={styles.projectTitle}>{title}</h2>
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
)
export default Project
