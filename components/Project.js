import React, { useEffect } from 'react'
import styles from '../styles/Project.module.css'
import Image from 'next/image'

const Project = React.forwardRef(
	({ title, linkName, link, content, position, src, srcHover, alt = 'No alt here.' }, ref) => {
		useEffect(() => {
			let picture = document.getElementById('picture' + position)
			let hover = document.getElementById('hover' + position)

			const swapPicture = () => {
				picture.style.display = 'none'
				hover.style.display = 'unset'
			}
			picture.addEventListener('mouseenter', swapPicture)

			const swapBack = () => {
				picture.style.display = 'unset'
				hover.style.display = 'none'
			}
			hover.addEventListener('mouseout', swapBack)
		}, [])

		return (
			<>
				<div className={styles.fullSection} id={position} ref={ref}>
					<div className={styles.right}>
						<div className={styles.pictureFrame} id={'picture' + position}>
							<Image src={src} alt={alt} />
						</div>

						<div className={styles.pictureFrameHover} id={'hover' + position}>
							<a href={link}>
								<Image src={srcHover} alt={alt} loading="eager" priority="true" />
							</a>
						</div>
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
