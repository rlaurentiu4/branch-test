import React from "react"
import { Link } from "gatsby"
import layoutStyle from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layoutStyle.nav}>
      <Link to={`/`}>
        <h3>hello</h3>
      </Link>
      <Link to={`/`}>
        <h3>Hello 2</h3>
      </Link>
      {children}
    </div>
  )
}
