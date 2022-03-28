import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="pl">
        <DocumentHead />

        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="#kryzysegzystencjalny - pierwsza strona która mówi prawdę"
          />
          <title>#kryzysegzystencjalny</title>
        </head>

        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
