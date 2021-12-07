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
import { useSelector } from "react-redux";
import { cantidadtotal } from "../../Helpers/intershipsDataNumber";

export const ReportLine = (dataset) => {
	
	const { interships } = useSelector((state) => state.interships);

	let cantidad =	cantidadtotal(interships);
	// console.log(cantidad);

	const { dataset: labels } = dataset;

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);
	const data = {
		labels,
		datasets: [
			{
				label: "# de Respuetas",
				data: [1, 5, 2, 3],
				backgroundColor: [
					"rgba(65, 102, 146, 0.2)",
					"rgba(17, 118, 244, 0.2)",
				],
				borderColor: [
					"rgba(65, 102, 146, 1)",
					"rgba(17, 118, 244, 1)",
				],
				borderWidth: 2,
			},
			{
				label: "# de Respuetas",
				data: [5, 3, 2, 1],


				backgroundColor: [
					"rgba(65, 102, 146, 0.2)",
					"rgba(17, 118, 244, 0.2)",
				],
				borderColor: [
					"rgba(65, 102, 146, 1)",
					"rgba(17, 118, 244, 1)",
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
		<div className='font-Poppins font rounded-lg m-5 bg-white shadow-lg ring-1 ring-gray-200'>
			<Line data={data}  options={options} />
		</div>
	);
};
