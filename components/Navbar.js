import Link from 'next/link'
import Image from 'next/image'
import navLogo from '../public/nav_logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='nav_container'>
        <div className='nav_logo'>
          <Image
            src={navLogo}
            alt='heart and weight logo'
            width='50px'
            height='50px'
          />
        </div>

        <div className='nav_links_container'>
          <Link href='/'>
            <a className='nav_link'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='nav_link'>About</a>
          </Link>
          <Link href='/exercises'>
            <a className='nav_link'>Exercises</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
