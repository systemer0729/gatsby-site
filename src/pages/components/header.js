import React from "react"
import { Link } from "gatsby"

const Header = () => {
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

export default Header