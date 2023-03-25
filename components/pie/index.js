import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from "./pie.module.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['18 and Under', '18-64', '65 and Over', 'Economic Families', 'Elderly Economic Families', '18 and Under in Economic Families',  '18 and Under in Economic Families with Children'],
  datasets: [
    {
      label: 'Percentage of Low Income Persons',
      data: [16.3, 15.7, 7.1, 10.9, 3.3, 16.1, 13.2 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <div className={styles.container}>
        <h2>Low Income Families Based on Age, Sex, and Economic Family Type (2015, Annual)</h2>
  <Pie data={data}/>
  </div>
  );
}
