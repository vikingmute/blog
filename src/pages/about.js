import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import weChat from '../../static/weChat.jpg'
import gzh from '../../static/gzh.jpg'
const AboutPage = (props) =>  {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const centerStyle = { textAlign: 'center', marginBottom: '15px' }
  const imageCenterStyle = { display: 'block', margin: '40px auto'}
  const disqusConfig = {
    shortname: 'vikingz',
    config: { identifier: 'the-about-me-page', title: 'About me' },
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About me 关于我" />
       <div style={{ marginTop: "100px", fontSize: '1.25rem', lineHeight: 2,}}>
          <h2 style={centerStyle}>关于我</h2>
          <p>我叫张轩，ID 是 Viking，我是一名前端开发工程师，同时也是一名独立开发者，目前生活在上海。我有一系列的作品： </p>
          <h3 style={centerStyle}>简单简历</h3>

          <p>
            我在 2022年8月19日 发布了独立开发的作品：<a href="https://easycv.cn" target="_blank">简单简历</a>，我从教学过程中发现学生们关于简历的痛点，开发一年完成的基于 Web 的应用，专注于 5 分钟快速创建程序员的金牌简历。它有如下特点：
          </p>
          <ul>
            <li>多个美观的基于 Tailwind.css 的响应式模版</li>
            <li>支持 URL 分享及 PDF 下载</li>
            <li>真实的不同技术栈的简历范本</li>
            <li>完全免费的技术简历书写指南 <a href="https://easycv.cn" target="_blank">https://docs.easycv.cn/guide</a></li>
            <li>强大易用的可视化编辑器</li>
          </ul>
          <p>同时它也是我独立开发生涯重要的里程碑，它会是一个<b>公开盈利，长期维护，不断迭代</b>的项目，如果你想了解更多幕后的故事，请看：</p>
          <ul>
            <li>项目的缘起以及诞生的故事 <a href="https://docs.easycv.cn/pages/about.html" target="_blank">https://docs.easycv.cn/pages/about.html</a></li>
            <li>项目的路线图以及更新 <a href="https://docs.easycv.cn/pages/updates.html" target="_blank">https://docs.easycv.cn/pages/updates.html</a></li>
            <li>(build in public) 公开记录发展的 <a href="https://twitter.com/vikingmute/status/1560447512561033217" target="_blank">Twitter thread</a></li>
          </ul>
          


          <h3 style={centerStyle}>我出品的课程 - 收费</h3>
          <p>我水平一般，但是在教学上有一点天赋，我在 2016 年和哥们出过一本书，从18年下半年到现在，在慕课网出品了 <b>7</b> 套课程，它们是我目前的主要收入来源。</p>
          <ul>
            <li><a href="https://class.imooc.com/sale/fearchitect" target="_blank" rel="noopener noreferrer">Web前端架构师2022版</a></li>
            <li><a href="https://coding.imooc.com/class/449.html" target="_blank" rel="noopener noreferrer">2022全面升级！Vue3 + TS 仿知乎专栏企业级项目</a></li>
            <li><a href="https://coding.imooc.com/class/428.html" target="_blank" rel="noopener noreferrer">2022升级 React18+TS高仿AntD从零到一打造组件库</a></li>
            <li><a href="https://coding.imooc.com/class/384.html" target="_blank" rel="noopener noreferrer">Electron+React+七牛云 实战跨平台桌面应用</a></li>
            <li><a href="https://coding.imooc.com/class/302.html" target="_blank" rel="noopener noreferrer">React16组件化+测试+全流程实战“在线账本”项目</a></li>
          </ul>
          <h3 style={centerStyle}>我出品的课程 - 免费</h3>
          <ul>
            <li><a href="https://www.imooc.com/learn/1198" target="_blank" rel="noopener noreferrer">Electron开发仿网易云音乐播放器</a></li>
            <li><a href="https://www.imooc.com/learn/1045" target="_blank" rel="noopener noreferrer">基于实例的 React16 傻瓜课程</a></li>
          </ul>
          <h3 style={centerStyle}>Opensale 计划</h3>
          <p>
            <s> 目前是自由职业的我，开启了一项 Opensale 计划，我所有的课程销售大体金额现在都以图表的方式公布在<a href="/opensale">这里</a>。
            意在帮助自己或者任何对自由职业感兴趣的人，追踪每个月的收入。</s>
            计划暂停，因为现在课比较多，数据会比较混乱，我在未来会公布更多关于独立开发者的计划。
          </p>
          <hr/>
          <h3 style={centerStyle}>我和 <a href="https://nighca.me/" target="_blank" rel="noopener noreferrer"> 杨寒星</a>一起出版的书</h3>
          <p>
            机缘巧合，我关于 Webpack 的一篇文章在知乎上火了起来，电子工业出版社编辑找到我，希望我写一本书，我现在的水平也不够写书，更别说当时。
            但是我当时正好处在 gap month，用写一本书的机遇来提高自己，我自己认为是不错的机会，所以我找来了我认为比较牛的一个同事，互相督促和校对，所以也就开始合作。
            书的名字很长：《React全栈：Redux+Flux+webpack+Babel整合开发》，这是编辑的意思，把当时所有 trending 的技术词汇都扔到一个标题里面去。下面的链接，是以比较客观的评价来排序的，你可以自行选择。
          </p>
          <ul>
            <li><a href="https://book.douban.com/subject/26901067/" target="_blank" rel="noopener noreferrer">本书在豆瓣</a></li>
            <li><a href="https://www.amazon.cn/dp/B06Y2MY6Z8/" target="_blank" rel="noopener noreferrer">本书在亚马逊</a></li>
            <li><a href="https://item.jd.com/12052766.html" target="_blank" rel="noopener noreferrer">本书在京东</a></li>
          </ul>
          <h3 style={centerStyle}>和我聊聊</h3>
          <p>
            如果你对本网站的文章感兴趣，想接受推送，你可以关注下图这个微信公众号。
            <br/>
            <img src={gzh} width="160px" style={imageCenterStyle} alt="程序员乌托邦 微信公众号"/>

            如果你想和我约饭或者随便聊聊，可以通过下图这个微信加我。
            <br/>
            <img src={weChat} width="150px" style={imageCenterStyle} alt="vikingmute 微信二维码"/>
            更多的联系方式，请看页面最底部 Footer 中的列表。
          </p>
          <div style={{maxWidth: '680px', margin: '2rem auto'}}>
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
