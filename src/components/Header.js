import React from "react"
import Link from "gatsby-link"

const links = [{
  to: '/',
  children: 'Index'
}, {
  to: '/blog',
  children: 'Blog'
}]

export default () => (
  <header>
    <ul>
      {links.map(link => (
        <li>
          <Link {...link} />
        </li>
      ))}
    </ul>
  </header>
)