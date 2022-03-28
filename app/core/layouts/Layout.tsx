import { BlitzLayout } from "blitz"
import Header from "app/components/Header"
import Footer from "app/components/Footer"

const Layout: BlitzLayout = ({ children }) => {
  return (
    <>
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
