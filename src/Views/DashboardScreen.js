import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { Header } from "../Components/Header/Header";
import { ReportBar } from "../Components/reports/ReportBar";
import { ReportLine } from "../Components/reports/ReportLine";
import { ReportPie } from "../Components/reports/ReportPie";
import { ReportRadar } from "../Components/reports/ReportRadar";
import { Sidebar } from "../Components/sidebar/Sidebar";
import {
	cantidadTotalPasantiaNombre,
} from "../Helpers/intershipsDataNumber";
import { startLoadingInterships } from "../Redux/Actions/intershipsActions";

const DashboardScreen = () => {
	const { showSidebar } = useSelector((state) => state.ui);
	const { nombreEmpresa } = useSelector((state) => state.auth);
	const { interships } = useSelector((state) => state.interships);

	// console.log("data respuestas", cantidadtotal(interships));
	let dataset = cantidadTotalPasantiaNombre(interships);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingInterships());
	}, [dispatch]);

	/**** posible */

	const handleClick = () => {
		const body = document.querySelector("#captura");
		// // console.log("body", body);
		html2canvas(body).then(function (canvas) {
			let enlace = document.createElement("a");
			enlace.download = `${nombreEmpresa} - Dashboard.png`;
			// Convertir la imagen a Base64
			enlace.href = canvas.toDataURL();
			// Hacer click en él
			enlace.click();
		});
	};

	/****************** */
	return (
		<>
			<div className={`home-section ${!showSidebar && "home-sectionOpen"}`}>
				{
					// Barra lateral
					<Sidebar />
				}
				<div className="pb-8">
					<div className="flex justiy-between">
						{
							// nav
							<Header />
						}
					</div>

					<button
						onClick={handleClick}
						className="p-3 bg-gray-200 m-3 font-Poppins font-semibold rounded-xl shadow-lg flex justify-center items-center text-gray-700"
					>
						Descargar como imagen
						
						<img src="data:image/png;base64,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"
							alt="Data icon"
							className='w-9'
						/>
					</button>
					<div
						id="captura"
						className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-lg ring-1 ring-gray-200"
					>
						<div className="flex justify-center items-center">
							<div className="w-2/4">
								<ReportLine dataset={dataset} />
							</div>
							<div className="w-2/4">
								<ReportBar dataset={dataset} />
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="w-2/4">
								<ReportRadar />
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardScreen;
