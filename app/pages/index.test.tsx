import { render } from "test/utils"

import Home from "./index"

test.skip("renders blitz page", () => {
  const { getByText } = render(<Home />)
  const el = getByText(/#kryzysegzystencjalny/i)
  expect(el).toBeInTheDocument()
})
