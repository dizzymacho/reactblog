import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 900px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(.1)};
    `}
  >
    <Link to={`/`}>
      <h2
      >
        @DIZZYMACHO
      </h2>
    </Link>
    {children}
  </div>
)
