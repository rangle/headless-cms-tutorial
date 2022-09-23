import { getStaticPage, queries } from '../data'
import { buildPageProps } from '../utils/buildPage'

const Index = ({data}) => {
  const page = buildPageProps(data.page)
  const { modules } = page
  
  return (
    <div>
      <p>Hello world!</p>
      <>{ modules }</>
    </div>
  )
}

export async function getStaticProps({ preview }) {
  const pageData = await getStaticPage(
    queries.getFormattedTypeQuery(
      'homePage',
      `{
        "id": _id,
        modules[],
        title,
      }`
    )
  )

  return {
    props: {
      data: pageData,
      isPreviewMode: preview || false
    }
  }
}

export default Index;