import Head from 'next/head'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>| Home Page |</title>
        <link rel='icon' type='image/x-icon' href='../public/favicon.ico' />
      </Head>
      <Navbar />

      <div className='page-content'>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
