import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Pricing: BlitzPage = () => {
  return <span>jaki jest sens ustalania cen czegokolwiek?</span>
}

Pricing.suppressFirstRenderFlicker = true
Pricing.getLayout = (page) => <Layout>{page}</Layout>

export default Pricing
