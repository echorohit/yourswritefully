import React from "react"
import Layout from "@rennehir/gatsby-theme-personal-site/src/components/layout"
import NotFound from "../../content/assets/undraw_page_not_found_su7k.svg"

const NotFoundPage = () => {
  return (
    <Layout>
      <img
        src={NotFound}
        alt="Page not found"
        style={{ maxWidth: "80%", display: "inherit", margin: "auto" }}
      />
    </Layout>
  )
}

export default NotFoundPage
