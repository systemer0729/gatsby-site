import React from "react"
import { Link } from "gatsby"
import Header from "../pages/components/header.js"

const BlogPage = () => {
  return (
    <header>
      <div className="headerInner">
        <nav>
          <ul>
              <li><Link to="/">top</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      <h1>このサイトはReact のGatsby で作成されたサイト</h1>
      </div>
    </header>
  )
}

export default BlogPage