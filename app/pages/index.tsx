import { Suspense } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Main from "app/components/Main"

const Home: BlitzPage = () => {
  return (
    <Suspense fallback={"ładuje..."}>
      <Main />
    </Suspense>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
