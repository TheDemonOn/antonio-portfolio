import Image from 'next/image'
import styles from '../styles/experience.module.css'
import { useState, useEffect } from 'react'
export default function Experience({
  src,
  alt = 'No alt here.',
  title,
  years,
  company,
  text,
  bulletPoint = true,
}) {
  const [bulletPoints, setBulletPoints] = useState()

  useEffect(() => {
    setBulletPoints(
      text.map((bulletPoint) => (
        <li className={styles.bulletPoint} key={bulletPoint}>
          {bulletPoint}
        </li>
      ))
    )
  }, [text])

  return (
    <div className={styles.container} key={text[0]}>
      <div className={styles.image}>
        <Image src={src} alt={alt} layout="fill" objectPosition={'relative'} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h4>
          {years[0]}-{years[1]}
        </h4>
        <h4 className={styles.company}>{company}</h4>
        {bulletPoint ? <ul> {bulletPoints} </ul> : <p>{text}</p>}
      </div>
    </div>
  )
}
