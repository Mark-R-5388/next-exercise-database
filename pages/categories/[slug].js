import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'exercise' })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'exercise',
    'fields.slug': params.slug,
  })

  return {
    props: { exercise: items[0] },
  }
}

const ExerciseCategories = ({ exercise }) => {
  console.log(exercise.fields.category)
  return (
    <div>
      Exercise Categories
      <h2>what to see</h2>
    </div>
  )
}

export default ExerciseCategories
