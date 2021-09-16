import Head from "next/head"
import Link from "next/link"
import { Button } from "react-bootstrap"
import styles from "../styles/Home.module.css"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kappa Books</title>
        <meta
          name="description"
          content="A library of interactive books for ESL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Interactive Books for ESL</h1>

        <p className={styles.description}>This is the landing page.</p>

        <Link href="/login" passHref>
          <Button variant="primary">Login</Button>
        </Link>
      </main>
    </div>
  )
}

export default HomePage
