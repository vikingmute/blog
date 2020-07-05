import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chart from "../components/chart"
import { center } from "../css/utils.module.css"
import { calculateSalesData, course119, course120, course219, course220, course320, caculateWholeSales } from '../data/data' 
import { DiscussionEmbed } from "disqus-react"

const ChartPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const disqusConfig = {
    shortname: 'vikingz',
    config: { identifier: 'the-open-sale-page', title: 'Opensale Project' },
  }
  const wholeSalesArr = caculateWholeSales()
  const totalNumber = wholeSalesArr.reduce((prev, current) => {
    return prev + current.total
  }, 0)
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Project Opensale 公开收入计划" />
      <section>
        <div style={{ marginTop: "100px", fontSize: '1.25rem', lineHeight: 2, }}>
          <h2 className={center}>Project Opensale 公开收入计划</h2>
          <p>
            目前是自由职业的我，开启了一项 Opensale 计划，我所有的课程销售大体金额现在都已图表的方式公布如下。
            意在帮助自己或者任何对自由职业感兴趣的人，追踪每个月的收入。
          </p>
          <h3 className={center}>这是我去年一年的收入（2019/07 - 2020/07）</h3>
          <Chart 
            sales={wholeSalesArr}
          /> 
          <p>最后的税后收入（和上班最大不同，现在收入都是税后的）是 <b>{totalNumber}</b> 元，减去一些损耗（慕课网的活动折扣，新上线折扣，个人独资企业成本）大约 3 万元，最后大约是 <b>20 万</b> 多点左右。 </p>
          <p>下面是每一门课分年份的具体明细：</p>

          <h3 className={center}><a href="https://coding.imooc.com/class/428.html" target="_blank">React+TypeScript高仿AntDesign开发企业级UI组件库</a></h3>
          <p>
            该课程于 2020年3月15日 上线，是我在家工作半年以后的成果，因为前前后后花的时间比较长，做的也很用心，加上这个题材也比较吸引学生，算是卖的最好的一节课，
            而且收到了很多好评，帮助到了不少同学，也让我非常开心。
          </p>
          <h3 className={center}>2020年销售数据</h3>
          <Chart 
            sales={calculateSalesData(course320, 448)}
          />       
          <h3 className={center}><a href="https://coding.imooc.com/class/384.html" target="_blank">Electron+React+七牛云 实战跨平台桌面应用</a></h3>
          <p>
            该课程于 2019年9月2日 上线，是我开始自由职业以后在家里两个月的成果，有了第一门课的经验以后，我已经大体知道慕课网整套流程的运作方式，
            还有什么样的课和怎样宣传会比较抓人。
          </p>
          <h3 className={center}>2020年销售数据</h3>
          <Chart 
            sales={calculateSalesData(course220, 248)}
          />
          <h3 className={center}>2019年销售数据</h3>
          <Chart 
            sales={calculateSalesData(course219, 248)}
          />
          <h3 className={center}><a href="https://coding.imooc.com/class/302.html" target="_blank">React16组件化+测试+全流程实战“在线账本”项目</a></h3>
          <p>
            该课程于 2018年12月15日 上线，是我做的第一门收费课程，由于当时自己还在工作，前后共用时四个月，我做的非常用心，销售量很一般，但是鉴于我当时完全是一个新老师，
            课程标题和内容比较平淡之外，（大家都喜欢全家桶，no one gives a shit about testing），我也算是比较满意了。而且后期也收到了非常多的好评。
          </p>
          <h3 className={center}>2020年销售数据</h3>
          <Chart 
            sales={calculateSalesData(course120, 266)}
          />
          <h3 className={center}>2019年销售数据</h3>
          <Chart 
            sales={calculateSalesData(course119, 266)}
          />
        <div style={{maxWidth: '680px', margin: '2rem auto'}}>
          <DiscussionEmbed {...disqusConfig} />
        </div>
        </div>
      </section>
    </Layout>
  );
}

export default ChartPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
