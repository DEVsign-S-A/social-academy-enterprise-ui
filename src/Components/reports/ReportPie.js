import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { cantidadtotal } from "../../Helpers/intershipsDataNumber";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ReportPie = (dataset) => {
	const { interships } = useSelector((state) => state.interships);

	let cantidad = cantidadtotal(interships);
	// console.log(cantidad);

	const { dataset: labels } = dataset;
	const data = {
		labels,
		datasets: [
			{
				label: "# of Votes",
				data: [0, 11, 7],
				backgroundColor: [
					"rgba(63, 197, 239, 0.2)",
					"rgba(11, 118, 244, 0.2)",
					"rgba(37, 193, 150, 0.2)",
				],
				borderColor: [
					"rgba(63, 197, 239, 1)",
					"rgba(11, 118, 244, 1)",
					"rgba(37, 193, 150, 1)",
				],
				borderWidth: 2,
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

	return (
		<div className="font-Poppins font-medium rounded-lg m-5 bg-white shadow-lg ring-1 ring-gray-200">
			<Pie data={data} height={400} width={400} options={options} />
		</div>
	);
};
