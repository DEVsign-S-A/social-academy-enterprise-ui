import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { ReportBar } from "../Components/reports/ReportBar";
import { ReportLine } from "../Components/reports/ReportLine";
import { ReportPie } from "../Components/reports/ReportPie";
import { ReportRadar } from "../Components/reports/ReportRadar";
import { Sidebar } from "../Components/sidebar/Sidebar";

const DashboardScreen = () => {
	const { showSidebar } = useSelector((state) => state.ui);
	const { interships } = useSelector((state) => state.interships);
    let cantidadPasantias = interships.length;


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
								<ReportPie 
                                cantidadPasantias={cantidadPasantias}
                                />
							</div>
							<div className="w-2/4">
								<ReportBar 
                                cantidadPasantias={cantidadPasantias}
                                />
							</div>
						</div>
						<div className="flex justify-center items-center">
							<div className="w-2/4">
								<ReportLine 
                                cantidadPasantias={cantidadPasantias}
                                />
							</div>
							<div className="w-2/4">
								<ReportRadar 
                                cantidadPasantias={cantidadPasantias}
                                />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardScreen;
