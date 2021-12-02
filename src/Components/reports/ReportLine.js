import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const ReportLine = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);
	// const options = {
	// 	responsive: true,
	// 	interaction: {
	// 		intersect: false,
	// 	},
	// 	stacked: false,
	// 	plugins: {
	// 		title: {
	// 			display: true,
	// 			text: "Chart.js Line Chart - Multi Axis",
	// 		},
	// 	},
	// };

	// const labels = [
	// 	"January",
	// 	"February",
	// 	"March",
	// 	"April",
	// 	"May",
	// 	"June",
	// 	"July",
	// ];

	// const data = {
	// 	labels,
	// 	datasets: [
	// 		{
	// 			label: "Dataset 1",
				
	// 			borderColor: "rgb(255, 99, 132)",
	// 			backgroundColor: "rgba(255, 99, 132, 0.5)",
	// 			yAxisID: "y",
	// 		},
	// 		{
	// 			label: "Dataset 2",
				
	// 			borderColor: "rgb(53, 162, 235)",
	// 			backgroundColor: "rgba(53, 162, 235, 0.5)",
	// 			yAxisID: "y1",
	// 		},
	// 	],
	// };

	const data = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			y: {
				ticks: {
					color: "white",
					font: {
						size: 18,
					},
				},
				grid: {
					color: "#243240",
				},
			},
			x: {
				ticks: {
					color: "white",
					font: {
						size: 18,
					},
				},
			},
		},
    };

	return (
		<div>
			<Line
				data={data}
				width={300}
				height={300}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};
