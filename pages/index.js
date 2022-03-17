import Image from 'next/image';
import homeImage from '../public/home_image_ps.jpg';

export default function Home() {
	return (
		<main className='home_container'>
			<div className='home_image_container'>
				<Image
					className='home_image'
					src={homeImage}
					alt='person lifting babrbell'
					objectFit='fill'
				/>
			</div>

			<div className='home_content_container'>
				<h1 className='title'>Find Your Exercises here!</h1>
				<p>
					This website offers some sample listings of exercises you can use in
					your own programs.
				</p>
				<p>
					Clicking into the exercises link at the top you will be guided to a
					page with different categories.
				</p>
				<p>
					My personal preference is breaking exercises into movement patterns as
					apposed to just body parts. Click on a category and a description of
					the movement patter with exercise examples and rep ranges will be
					provided.
				</p>
				<p>Ill be updating this periodically so check back every week or so!</p>
				<p>
					I want to say thank you for visiting this site and I hope it helps you
					on your health and fitness journey
				</p>
			</div>
		</main>
	);
}
