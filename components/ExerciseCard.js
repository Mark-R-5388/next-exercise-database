import Image from 'next/image'
import Link from 'next/link'

const ExerciseCard = ({ exercise }) => {
  const { category, slug, mainDescription, mainImage } = exercise.fields
  return (
    <div className='exercise_card'>
      <div className='exercise_card_image'>
        <Image
          src={'https:' + mainImage.fields.file.url}
          alt={category}
          width={mainImage.fields.file.details.image.width}
          height={mainImage.fields.file.details.image.height}
        />
      </div>
      <div className='exercise_card_content'>
        <h2>{category}</h2>
      </div>
      <div className='actions'>
        <Link href={'/categories/' + slug}>
          <a>Get Details</a>
        </Link>
      </div>
    </div>
  )
}

export default ExerciseCard
