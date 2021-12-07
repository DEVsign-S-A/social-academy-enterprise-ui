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
import { useSelector } from "react-redux";
import { cantidadtotal } from "../../Helpers/intershipsDataNumber";
// import { cantidadTotalPasantiaNombre } from "../../Helpers/intershipsDataNumber";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
export const ReportBar = (dataset) => {
	const { interships } = useSelector((state) => state.interships);

	let cantidad = cantidadtotal(interships);
	// console.log(cantidad);

	const { dataset: labels } = dataset;
	// // console.log(cantidad);

	const options = {
		scales: {
			y: {
				ticks: {
					color: "#383874",
					font: {
						size: 12,
					},
				},
			},
			x: {
				ticks: {
					color: "#383874",
					font: {
						size: 12,
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

	// const labels = [
	// 	"January",
	// 	"February",
	// 	"March",
	// 	"April",
	// 	"May",
	// 	"June",
	// 	"July",
	// ];
	// // console.log(labels);

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: cantidad,
				backgroundColor: "rgb(70, 166, 255)",
			},
			{
				label: "Dataset 2",
				data: cantidad,
				backgroundColor: "rgb(37, 193, 150)",
			},
		],
	};

	return (
		<div className="font-Poppins font-semibold rounded-lg m-5 bg-white shadow-lg ring-1 ring-gray-200">
			<Bar options={options} data={data} />
		</div>
	);
};
