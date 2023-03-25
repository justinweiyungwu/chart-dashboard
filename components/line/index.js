import React from 'react';
import { useState, useEffect } from "react"
import styles from "./line.module.css"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export default function Linechart () {

  const [chartData, setChartData] = useState({
      datasets: []
  })

  
  const [chartOptions, setChartOptions] = useState ({})
  useEffect(() => {
  setChartData({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July",],
  datasets: [
      {
          label: "$ Average",
  data: [93.4, 93.8, 94.5, 95.1, 97.2, 95.9, 94.3],
  borderColor: "rgb(255, 0, 255)",
  backgroundColor: "rgb(255, 0, 244, 0.4)"
      }
  ]
  })
  setChartOptions({
      plugins: {
          legend: {
              position: 'top'
          },
          title: {
              display: true,
              text: "Monthly Frequency"
          }
      },
      maintainAspectRatio: false,
      responsive: true
  })
  }, [])
  
      return (
          <>
          <div className={styles.container}>
            <h2>Consumer Price Index of Clothing/Footwear in Canada (2022)</h2>
  <Line data={chartData} options={chartOptions}/>
          </div>
          </>
      )
  }

  