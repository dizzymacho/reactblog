import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Hi, my name is David Israel Machovec.</h1>
    <p>I'm a Product Developer, Web Developer, Yoga Instructor, Video Game Streamer, Meme Maker, Sports Gambler and Writer.</p>
    <Link to={`/blog`}>
    <p>Read Blog</p>
    </Link>
    <p></p>
    <p></p>
  </Layout>
)
