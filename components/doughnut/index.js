import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from "./doughnut.module.css"


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Newfoundland and Labrador', 'PEI', 'Nova Scotia', 'New Brunswick', 'Quebec', 'Ontario', 'Manitoba', 'Saskatchewan', 'Alberta', 
  'British Columbia', 'Yukon', 'Northwest Terriories', 'Nunavut'],
  datasets: [
    {
      label: '% of Persons per Province (Q1 2022)',
      data: [1.35, 0.43, 2.60, 2.07, 22.4, 38.8, 3.6, 3.1, 11.6, 13.6, 0.11, 0.12, 0.10,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(12, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 160, 53, 0.2)',
        'rgba(220, 100, 1, 0.2)',
        'rgba(150, 2, 255, 0.2)',
        'rgba(225, 60, 100, 0.2)',
        'rgba(166, 126, 5, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(12, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 160, 53, 1)',
        'rgba(220, 100, 1, 1)',
        'rgba(150, 2, 255, 1)',
        'rgba(225, 60, 100, 1)',
        'rgba(166, 126, 5, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return (
    <div className={styles.container}>
        <h2>Canadian Quarterly Population Estimates</h2>
  <Doughnut data={data}/>
  </div>
  );
}

