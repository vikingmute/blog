import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import { DiscussionEmbed } from "disqus-react"

const ChartPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const centerStyle = { textAlign: 'center', marginBottom: '15px' }
  const rawData = [
    {
      name: '2019/09',
      sales: 222
    },
    {
      name: '2019/10',
      sales: 93
    },
    {
      name: '2019/11',
      sales: 119
    },
    {
      name: '2019/12',
      sales: 38
    },                    
  ]
  const salesData = rawData.map(item => {
    return {
      ...item,
      total: Math.round(item.sales *  248 * 0.97 * 0.4)
    }
  })
  const rawData2 = [
    {
      name: '2018/12',
      sales: 40
    },
    {
      name: '2019/01',
      sales: 74
    },
    {
      name: '2019/02',
      sales: 48
    },
    {
      name: '2019/03',
      sales: 42
    },
    {
      name: '2019/04',
      sales: 28
    },
    {
      name: '2019/05',
      sales: 18
    },
    {
      name: '2019/06',
      sales: 39
    },
    {
      name: '2019/07',
      sales: 28
    },
    {
      name: '2019/08',
      sales: 22
    },
    {
      name: '2019/09',
      sales: 18
    },
    {
      name: '2019/10',
      sales: 18
    },
    {
      name: '2019/11',
      sales: 25
    },
    {
      name: '2019/12',
      sales: 16
    }
  ]
  const salesData2 = rawData2.map(item => {
    return {
      ...item,
      total: Math.round(item.sales *  266 * 0.97 * 0.4) 
    }
  })
  const disqusConfig = {
    shortname: 'vikingz',
    config: { identifier: 'the-open-sale-page', title: 'Opensale Project' },
  }
  const toolTipStyle = {
    background: '#fff',
    border: '2px solid #ccc',
    padding: '10px',
    lineHeight: 1,
    fontSize: '1rem'
  }
  const labelStyle = {
    marginBottom: '5px',
  }
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const item = payload[0] && payload[0].payload
      return (
        <div className="custom-tooltip" style={toolTipStyle}>
          <b style={centerStyle}>{label}</b>
          <p style={labelStyle}>{`销售数 ${item.sales}`}</p>
          <p style={labelStyle}>{`销售金额 ${item.total} 元`}</p>
        </div>
      )
    }
    return null
  };
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Project Opensale 公开收入计划" />
      <section>
        <div style={{ marginTop: "100px", fontSize: '1.25rem', lineHeight: 2, }}>
          <h2 style={centerStyle}>Project Opensale 公开收入计划</h2>
          <p>
            目前是自由职业的我，开启了一项 Opensale 计划，我所有的课程销售大体金额现在都已图表的方式公布如下。
            意在帮助自己或者任何对自由职业感兴趣的人，追踪每个月的收入。
          </p>
          <h3 style={centerStyle}><a href="https://coding.imooc.com/class/384.html" target="_blank">Electron+React+七牛云 实战跨平台桌面应用</a></h3>
          <p>
            该课程于 2019年9月2日 上线，是我开始自由职业以后在家里两个月的成果，有了第一门课的经验以后，我已经大体知道慕课网整套流程的运作方式，
            还有什么样的课和怎样宣传会比较抓人。
          </p>
          <BarChart
            width={800}
            height={300}
            data={salesData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
            style={
              { margin: '10px auto'}
            }
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
          <h3 style={centerStyle}><a href="https://coding.imooc.com/class/302.html" target="_blank">React16组件化+测试+全流程实战“在线账本”项目</a></h3>
          <p>
            该课程于 2018年12月15日 上线，是我做的第一门收费课程，由于当时自己还在工作，前后共用时四个月，我做的非常用心，销售量很一般，但是鉴于我当时完全是一个新老师，
            课程标题和内容比较平淡之外，（大家都喜欢全家桶，no one gives a shit about testing），我也算是比较满意了。而且后期也收到了非常多的好评。
          </p>
          <BarChart
            width={800}
            height={300}
            data={salesData2}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
            style={
              { margin: '10px auto'}
            }
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
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
