import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { CardsIntership } from "../Components/Interships/CardsIntership";
import { SearchBar } from "../Components/Interships/searchBar";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { dataIntership } from "../data/dataInternship";
import { startLoadingInterships } from "../Redux/Actions/intershipsActions";

const CreatesInterships = () => {
	const { showSidebar } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingInterships());
	}, [dispatch]);


	const {interships} = useSelector(state => state.interships);

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
					{
						//Main Principal de la Vista
					}
					<div className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-lg ring-1 ring-gray-200">
						<SearchBar />

						<div className="w-11/12 flex flex-row flex-wrap">
							{interships.map((intership) => (
								<CardsIntership key={intership.IdIntership} {...intership} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreatesInterships;
