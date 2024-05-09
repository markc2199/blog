import Link from "next/link"
import styles from "./nav.module.css"

export default function Nav() {
    return (
        <nav className="font-mono">
           <ul className="flex flex-col md:space-x-4 md:flex-row">
            <li><Link className={styles.link} href="/">Home</Link></li>
            <li><Link className={styles.link} href="/about">About</Link></li>
            <li><Link className={styles.link} href="/about/projects">Projects</Link></li>
            <li><Link className={styles.link} href="/photos">Photos</Link></li>
            <li><Link className={styles.link} href="/blog">Blog</Link></li>
          </ul> 
        </nav>
    )
}