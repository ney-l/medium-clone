import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/layout/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        Hello!
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/ney-l"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built By Neha Lanjewar
        </a>
      </footer>
    </div>
  )
}

export default Home
