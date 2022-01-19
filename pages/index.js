import Head from 'next/head'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>| Home Page |</title>
        <link rel='icon' type='image/x-icon' href='../public/favicon.ico' />
      </Head>
      <div className='container'>
        <Navbar />
        <ul>
          <li>items</li>
          <li>go</li>
          <li>here</li>
        </ul>
        <Footer />
      </div>
    </>
  )
}
