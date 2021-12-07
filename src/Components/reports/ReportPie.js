import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { cantidadtotal } from "../../Helpers/intershipsDataNumber";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ReportPie = (dataset) => {

	const { interships } = useSelector((state) => state.interships);

	let cantidad =	cantidadtotal(interships);
	console.log(cantidad);

	const { dataset: labels } = dataset;
	const data = {
		labels,
		datasets: [
			{
				label: "# of Votes",
				data: [0, 11, 7],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return <Pie data={data} />;
};
