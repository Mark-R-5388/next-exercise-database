import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ExerciseCard = ({ exercise }) => {
	const { category, slug, mainDescription, mainImage } = exercise.fields;

	return (
		<div className='exercise_card'>
			<div className='exercise_card_image'>
				<Image
					src={'https:' + mainImage.fields.file.url}
					alt={category}
					layout='fill'
				/>
			</div>
			<div className='exercise_card_content'>
				<h2>{category}</h2>
			</div>
			<div className='actions'>
				<Link href={'/categories/' + slug}>
					<a className='exercise_card_link'>Get Details</a>
				</Link>
			</div>
		</div>
	);
};

export default ExerciseCard;
