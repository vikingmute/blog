import React, { useState } from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styles from '../css/header.module.css'
const Logo = () => {
  return (
    <svg width="45px" height="45px" viewBox="0 0 94.049 94.049">
      <path d="M67.911,0.064L0.032,0v67.941v26.107h93.984V26.171C94.017,11.752,82.329,0.064,67.911,0.064z M67.128,82.34H60.22
		L47.024,42.102h7.557l9.34,30.25l7.84-23.557h-6.062v-6.693h15.818L67.128,82.34z"/>
    </svg>
  );
}
const Header = () => {
  const [ toggle, setToggle ] = useState(false)
  const updateToggle = () => {
    setToggle(!toggle)
  }
  return (
  <>
    <nav className={styles.header} style={{backgroundColor: 'var(--headerBg)'}}>
      <Link to="/" title="viking zhang"><Logo /></Link>
      <div className="hamburger" onClick={updateToggle}>
        <div className="container">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <ul className='nav-list'>
        <li><Link to="/" >首页</Link></li> 
        <li><Link to="/about">关于我</Link></li> 
        <li><Link to="/posts">所有文章</Link></li>
        <li><a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS 订阅</a></li>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                className="theme-toggler"
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              暗黑模式
            </label>
          )}
        </ThemeToggler>
      </ul>
    </nav>
    <div className={`mobile-holder ${toggle ? 'open' : ''}`}>
    <ul className='mobile-list'>
      <li><Link to="/" >首页</Link></li> 
      <li><Link to="/about">关于我</Link></li> 
      <li><Link to="/posts">所有文章</Link></li>
      <li><a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS 订阅</a></li>
      <li><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              className="theme-toggler"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            暗黑模式
          </label>
        )}
      </ThemeToggler>
      </li>
    </ul>
    </div>
  </>
  )
}

export default Header