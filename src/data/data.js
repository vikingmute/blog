export const course320 =  [
  {
    name: '2020/03',
    sales: 307
  },
  {
    name: '2020/04',
    sales: 259
  },
  {
    name: '2020/05',
    sales: 83
  },
  {
    name: '2020/06',
    sales: 168
  },                    
]

export const course219 = [
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

export const course220 = [
  {
    name: '2020/01',
    sales: 35
  },
  {
    name: '2020/02',
    sales: 39
  },
  {
    name: '2020/03',
    sales: 44
  },
  {
    name: '2020/04',
    sales: 40
  },
  {
    name: '2020/05',
    sales: 31
  },
  {
    name: '2020/06',
    sales: 38
  },                      
]
export const course120 = [
  {
    name: '2020/01',
    sales: 11
  },
  {
    name: '2020/02',
    sales: 18
  },
  {
    name: '2020/03',
    sales: 21
  },
  {
    name: '2020/04',
    sales: 15
  },
  {
    name: '2020/05',
    sales: 22
  },
  {
    name: '2020/06',
    sales: 19
  },                      
]
export const course119 = [
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

export const calculateSalesData = (data, base) => {
  return data.map(item => {
    return {
      ...item,
      total: Math.round(item.sales *  base * 0.385) 
    }
  })
}

export const mapArrayToObj = (arr) => {
  return arr.reduce((prev, item) => {
    prev[item.name] = item
    return prev
  }, {})
}

export const mapObjToArray = (obj) => {
  return Object.keys(obj).map(index => obj[index]) 
}
export const mergeObj = (...objArr) => {
  return objArr.reduce((prev, itemsObj) => {
    Object.keys(itemsObj).forEach(index => {
      const item = itemsObj[index]
      if (prev[item.name]) {
        prev[item.name].sales = prev[item.name].sales + item.sales
        prev[item.name].total = prev[item.name].total + item.total
      } else {
        prev[item.name] = item
      }
    })
    return prev
  }, {})
}
export const caculateWholeSales = () => {
  const course1 = mapArrayToObj(calculateSalesData([...course119.slice(7), ...course120], 266))
  const course2 = mapArrayToObj(calculateSalesData([...course219, ...course220], 248))
  const course3 = mapArrayToObj(calculateSalesData(course320, 466))
  return mapObjToArray(mergeObj(course1, course2, course3))
}
