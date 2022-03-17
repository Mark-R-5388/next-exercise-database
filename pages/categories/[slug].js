import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
	const res = await client.getEntries({ content_type: 'exercise' });

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'exercise',
		'fields.slug': params.slug,
	});

	return {
		props: { exercise: items[0] },
	};
}

const ExerciseCategories = ({ exercise }) => {
	const { category, listImage, fullDescription, exercises } = exercise.fields;
	return (
		<main className='exercise_page_main'>
			<h1 className='title'>{category}</h1>

			<div className='exercise_page_container'>
				<Image
					className='exercise_page_container_image'
					src={'https:' + listImage.fields.file.url}
					alt={category}
					width={listImage.fields.file.details.image.width}
					height={listImage.fields.file.details.image.height}
				/>

				<div className='exercise_information'>
					<div className='exercise_information_container'>
						{documentToReactComponents(fullDescription)}
					</div>
				</div>
				<h3>{category} Examples</h3>
				{exercises.map((exercise) => (
					<p key={exercise}>{exercise}</p>
				))}
			</div>
		</main>
	);
};

export default ExerciseCategories;
