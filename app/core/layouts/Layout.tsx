import { BlitzLayout, Head } from "blitz"
import Header from "app/components/Header"
import Footer from "app/components/Footer"

const Layout: BlitzLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="#kryzysegzystencjalny - pierwsza strona która mówi prawdę"
        />
        <title>#kryzysegzystencjalny</title>
      </Head>

      <div className="container">
        <header>
          <Header />
        </header>

        <main>
          <div className="content">{children}</div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
