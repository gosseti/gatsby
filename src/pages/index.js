import React from "react"

const BlogIndex = ({ data }) => (
  <div>
    <p>Some test content</p>
  </div>  
)

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`
