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

	let cantidad =	cantidadtotal(interships);
	console.log(cantidad);

	const { dataset: labels } = dataset;
	// console.log(cantidad);

	const options = {
		responsive: true,
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
	// console.log(labels);

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: cantidad,
				backgroundColor: "rgb(255, 99, 132)",
			},
			{
				label: "Dataset 2",
				data: cantidad,
				backgroundColor: "rgb(75, 192, 192)",
			},
		],
	};

	return <Bar options={options} data={data} />;
};
