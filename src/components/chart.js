import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, Label
} from 'recharts'
import { center, tooltip, label as labelStyle } from '../css/utils.module.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const item = payload[0] && payload[0].payload
    return (
      <div className={tooltip}>
        <b className={center}>{label}</b>
        <p className={labelStyle}>{`销售数 ${item.sales}`}</p>
        <p className={labelStyle}>{`销售金额 ${item.total} 元`}</p>
      </div>
    )
  }
  return null
}
const Chart = (props) => {
  return (
  <BarChart
    width={800}
    height={300}
    data={props.sales}
    margin={{
      top: 20, right: 30, left: 30, bottom: 5,
    }}
    style={
      { margin: '10px auto'}
    }
  >
    <XAxis dataKey="name" >
      <Label value="月份" offset={0} position="insideBottom" />
    </XAxis>
    <YAxis />
    <Tooltip content={<CustomTooltip />}/>
    <Bar dataKey="total" fill="#8884d8">
      <LabelList dataKey="total" position="top" />
    </Bar>
  </BarChart>
  )
}

export default Chart