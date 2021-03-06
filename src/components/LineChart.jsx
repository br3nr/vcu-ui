import React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: 
  {
    legend: 
    {
      position: 'top',
    },
    title: 
    {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  animations: 
  {
    animation:false
  }
}

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


const datawow = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      //map the numbers 1 - 10 to the labels, but make sure to add a random number to the end of the array
      data: [
        faker.random.number({ min: 1, max: 10 }),
        faker.random.number({ min: 1, max: 10 }),
        faker.random.number({ min: 1, max: 10 }),
        faker.random.number({ min: 1, max: 10 }),
        faker.random.number({ min: 1, max: 10 }),
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


export function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Use effect will poll SerialPort every delay in ms 
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay != null) {
      const id = setInterval(tick, delay)
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay])
}

export function LineChart() 
{
  
  const [thedata, setData] = useState(datawow);

  useInterval(async () => {
    console.log("weee procs");

    var datasetty = thedata.datasets[0].data
    // if the length of datasetty is less than 12, add a new number to the end of the array
    if (datasetty.length < 11) {
      console.log("condition met")
      datasetty.push(faker.random.number({ min: 1, max: 10 }))
      console.log(datasetty)
    }
    else 
    {
      datasetty.shift()
      datasetty.push(faker.random.number({ min: 1, max: 10 }))
    }

    const datalist = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: datasetty,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    setData(datalist);
  }, 100)

  return <Line options={options} data={thedata} />;

}

