import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = () => {
  const date = new Date();
  return {
    props: {
      date: date.toISOString(),
    },
  }
}

export default function Home(props: {date: string}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1>{props.date}</h1>
      </main>
    </>
  )
}
