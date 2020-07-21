import React, { useState } from "react"
import styles from '../css/footer.module.css'
import gzh from '../../static/gzh.jpg'
const Footer = () => {
  const [ show, setShow ] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  const showText = show ? '点击隐藏' : '点击显示'
  const picStyles = {
    width: '160px',
    display: show ? 'block' : 'none'
  }
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          © {new Date().getFullYear()}, 由
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> 创建
        </p>
        <ul style={{ display: 'flex'}}>
          <li>友情链接：</li>
          <li><a href="https://kalasearch.cn/" target="_blank" rel="noopener noreferrer">卡拉搜索</a></li>
        </ul>
      </div>
      <div>
        <p>我除了写文章，还拍关于独立开发者的视频，欢迎关注</p>
        <div className={styles.cols}>
          <ul style={{ position: 'relative'}}>
            <img src={gzh} style={picStyles} className={styles.gzh} alt="程序员乌托邦 微信公众号"/>
            <li><button onClick={handleClick}>微信公众号，{showText}</button></li>
            <li><a href="https://www.zhihu.com/people/vikingmute" target="_blank" rel="noopener noreferrer">知乎专栏：程序员的乌托邦</a></li>
            <li><a href="https://space.bilibili.com/480241067" target="_blank" rel="noopener noreferrer">B站：独立开发者 Viking</a></li>
          </ul>
          <ul>
          <li><a href="https://www.youtube.com/channel/UCm5Z1WsCPhxl_NznRK0tvEw" target="_blank" rel="noopener noreferrer">Youtube： 程序员的乌托邦</a></li>
          <li><a href="https://www.github.com/vikingmute/" target="_blank" rel="noopener noreferrer">Github：vikingmute</a></li>
          <li><a href="https://twitter.com/vikingmute" target="_blank" rel="noopener noreferrer">Twitter：Viking</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer