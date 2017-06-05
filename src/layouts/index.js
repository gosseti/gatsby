import React from "react"
import Link from "gatsby-link"
import Header from 'components/Header'

if (process.env.NODE_ENV === `development`) {
  require('css/main.css')
}

const Template = ({ children }) => (
  <div className='max-width-3 mx-auto'>
    <Header />
    {children()}
  </div>
)

export default Template
