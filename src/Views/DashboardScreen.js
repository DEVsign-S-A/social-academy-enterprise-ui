import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { ReportBar } from "../Components/reports/ReportBar";
import { ReportLine } from "../Components/reports/ReportLine";
import { ReportPie } from "../Components/reports/ReportPie";
import { ReportRadar } from "../Components/reports/ReportRadar";
import { Sidebar } from "../Components/sidebar/Sidebar";
import {
	cantidadPasantias,
	cantidadtotal,
	cantidadTotalPasantiaNombre,
} from "../Helpers/intershipsDataNumber";

const DashboardScreen = () => {
	const { showSidebar } = useSelector((state) => state.ui);
	const { interships } = useSelector((state) => state.interships);

	console.log("data respuestas", cantidadtotal(interships));
	let dataset = cantidadTotalPasantiaNombre(interships);

	

	return (
		<>
			<div className={`home-section ${!showSidebar && "home-sectionOpen"}`}>
				{
					// Barra lateral
					<Sidebar />
				}
				<div className="pb-8">
					<div className="flex justify-between">
						{
							// nav
							<Header />
						}
					</div>

					<div className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-lg ring-1 ring-gray-200">
						<div className="flex justify-center items-center">
							<div className="w-2/4">
								<ReportLine dataset={dataset}/>
							</div>
							<div className="w-2/4">
								<ReportBar dataset={dataset} />
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="w-2/4">
								<ReportRadar />
							</div>
							<div className="w-2/4">
								<ReportPie dataset={dataset}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardScreen;
