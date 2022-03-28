import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Features: BlitzPage = () => {
  return (
    <span>wszyscy umrą i wszystko się skończy. ostatecznie nasze funkcje nie mają znaczenia.</span>
  )
}

Features.suppressFirstRenderFlicker = true
Features.getLayout = (page) => <Layout>{page}</Layout>

export default Features
