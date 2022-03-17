import Link from 'next/link';

import { IoIosFitness } from 'react-icons/io';

const Navbar = () => {
	return (
		<nav>
			<div className='nav_container'>
				<IoIosFitness className='nav_logo' />

				<div className='nav_links_container'>
					<Link href='/'>
						<a className='nav_link'>Home</a>
					</Link>

					<Link href='/categories/exercises'>
						<a className='nav_link'>Exercises</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
