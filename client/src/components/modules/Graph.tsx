import React, { useState } from "react"
import "./Graph.scss"
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, PointElement, CategoryScale, LinearScale, Filler} from 'chart.js'
import { Line } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

function Graph() {
const [data, setData] = useState({
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            data: [1,3,5,2,9,6,4],
            tension: 0.2,
            fill: true,

            //orange
            backgroundColor: '#F4A460',
            borderColor: '#CD5C5C'

            //gren
            // backgroundColor: '#97C070',
            // borderColor: '#006D5B'

            //blue
            // backgroundColor: '#95C8D8',
            // borderColor: '#4682B4'
        }
    ]
})
return (
    <div className="chart-container" style = {{width: '800px', height: '400px'}}>
        <div className="chart-wrapper">
            <Line data={data} options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
                        },
                    },
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Days of the Week',
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Stock',
                        },
                    },
                },
            }} />
        </div>
    </div>
);
}
export default Graph;