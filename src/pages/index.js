import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my personal site!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: 'auto' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
