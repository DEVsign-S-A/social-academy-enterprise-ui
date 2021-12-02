import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	plugins: {
		title: {
			display: true,
			text: "Chart.js Bar Chart - Stacked",
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [1, 2, 3, 4, 5, 6, 7],
			backgroundColor: "rgb(255, 99, 132)",
		},
		{
			label: "Dataset 2",
			data: [1, 2, 3, 4, 5, 6, 7],

			backgroundColor: "rgb(75, 192, 192)",
		},
		{
			label: "Dataset 3",
			data: [1, 2, 3, 4, 5, 6, 7],

			backgroundColor: "rgb(53, 162, 235)",
		},
	],
};

export const ReportBar = (cantidadPasantias) => {
	return <Bar options={options} data={data} />;
};

// export const ReportBar = () => {
// 	const data = {
// 		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
// 		datasets: [
// 			{
// 				label: "# of Votes",
// 				data: [12, 19, 3, 5, 2, 3],
// 				backgroundColor: [
// 					"rgba(255, 99, 132, 0.2)",
// 					"rgba(54, 162, 235, 0.2)",
// 					"rgba(255, 206, 86, 0.2)",
// 					"rgba(75, 192, 192, 0.2)",
// 					"rgba(153, 102, 255, 0.2)",
// 					"rgba(255, 159, 64, 0.2)",
// 				],
// 				borderColor: [
// 					"rgba(255, 99, 132, 1)",
// 					"rgba(54, 162, 235, 1)",
// 					"rgba(255, 206, 86, 1)",
// 					"rgba(75, 192, 192, 1)",
// 					"rgba(153, 102, 255, 1)",
// 					"rgba(255, 159, 64, 1)",
// 				],
// 				borderWidth: 1,
// 			},
// 		],
// 	};

// 	// const options = {
// 	// 	scales: {
// 	// 		y: {
// 	// 			ticks: {
// 	// 				color: "white",
// 	// 				font: {
// 	// 					size: 18,
// 	// 				},
// 	// 			},
// 	// 			grid: {
// 	// 				color: "#243240",
// 	// 			},
// 	// 		},
// 	// 		x: {
// 	// 			ticks: {
// 	// 				color: "white",
// 	// 				font: {
// 	// 					size: 18,
// 	// 				},
// 	// 			},
// 	// 		},
// 	// 	},
// 	// };

// 	return (
// 		<Bar
// 			data={data}
// 			width={500}
// 			height={500}
// 			options={{ maintainAspectRatio: false }}
// 		/>
// 	);
// };
