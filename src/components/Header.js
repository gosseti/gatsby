import React from "react"
import Link from "gatsby-link"
import R from 'ramda'

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
      {R.map(link => (
        <li>
          <Link {...link} />
        </li>
      ), links)}
    </ul>
  </header>
)