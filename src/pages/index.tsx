import Head from 'next/head';
import { GetServerSideProps } from 'next';

export default function Home() {
  console.log('Home');

  return (
    <>
      <Head>
        <title>Next.js Request Lifecycle</title>
        <meta name="description" content="Example project that shows the lifecycle of a request and the routing chain in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js Request Lifecycle</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('Home.getServerSideProps');

  return {
    props: {
      home: 'home'
    }
  }
}
