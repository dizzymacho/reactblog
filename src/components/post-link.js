import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const PostLink = ({ post }) => (
  <div
    css={css`
      margin-bottom: ${rhythm(.1)};
    `}
    >
    <Link to={post.frontmatter.path}>
      <h3>{post.frontmatter.title}</h3>
    </Link>
    {post.frontmatter.date}
  </div>
)

export default PostLink
