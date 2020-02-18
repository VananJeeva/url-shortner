import React, { useState, useEffect } from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import { urlAnalytics } from '../utils/api'
import { useParams } from 'react-router-dom'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

export function UrlAnalytics () {
  const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json'
  }

  const dataSource = {
    'chart': {
      'caption': 'Number of Hits per date',
      'xAxisName': 'Date',
      'yAxisName': 'Number of Hits',
      'numberSuffix': 'hits',
      'theme': 'fusion',
      'updateAnimDuration': '0.4'
    }
  }
  const { _id } = useParams()
  const [analytics, setAnalytics] = useState(null)
  useEffect(() => {
    urlAnalytics(_id).then(response => {
      setAnalytics(response.analytics)
    })
  }, [])

  if (!analytics) {
    return (
      'Loading...'
    )
  }
  return (
    <ReactFC
      {...chartConfigs}
      dataSource={{
        ...dataSource,
        data: analytics
      }}
    />
  )
}
