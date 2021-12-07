import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export const data = {
	labels: [
		"Diciembre",
		"Octubre",
		"Noviembre",
		"Septiembre",
		"Agosto",
		"Julio",
		"Junio",
	],
	datasets: [
		{
			label: "# of Votes",
			data: [2, 9, 3, 5, 2, 3],
			backgroundColor: "rgba(63, 197, 239, 0.2)",
			borderColor: "rgba(17, 118, 244, 1)",
			borderWidth: 1,
		},
	],
};

const options = {
	scales: {
		y: {
			ticks: {
				color: "#383874",
				font: {
					size: 15,
				},
			},
		},
		x: {
			ticks: {
				color: "#383874",
				font: {
					size: 15,
				},
			},
		},
	},
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Conteo de Pasantes por Publicación",
		},
	},
};
export const ReportRadar = () => {
	return (
		<div className="font-Poppins font-medium rounded-lg m-5 bg-white shadow-lg ring-1 ring-gray-200">
			<Radar data={data} height={500} width={500} options={options} />
		</div>
	);
};
