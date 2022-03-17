import { createClient } from 'contentful';
import ExerciseCard from '../../components/ExerciseCard.js';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({ content_type: 'exercise' });

	return {
		props: {
			exercises: res.items,
		},
	};
}

const Exercises = ({ exercises }) => {
	console.log(exercises);
	return (
		<>
			<h1 className='exercise_page_title'>Exercise Page</h1>
			<main className='category_container'>
				<div className='exercises_container'>
					{exercises.map((exercise) => (
						<ExerciseCard key={exercise.sys.id} exercise={exercise} />
					))}
				</div>
			</main>
		</>
	);
};

export default Exercises;
