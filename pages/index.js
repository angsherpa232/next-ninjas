import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>This is para one</p>
      <p className={styles.text}>This is para two</p>
      <p className={styles.text}>This is para three</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas</a>
      </Link>
    </div>
    </>
  )
}
