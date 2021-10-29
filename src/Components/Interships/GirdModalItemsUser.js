import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";

// images
import log from "../../Assets/UI_Intership/Show.svg";
import edit from "../../Assets/UI_Intership/Delete.svg";
import { Grid } from "./Grid";
import { DivModal } from "./Modal";
import { P } from "./P";

export const GirdModalItemsUser = ({ ItemModal, setItemModal }) => {
	// const dispatch = useDispatch();
	// 	aqui unicamente se usan Link de React-Router-DOM ya que no se requiere petecion al servidor extra
	// y todo se controla con el store de Redux
	// const history = useHistory();

	return (
		<>
			{ItemModal && (
				<OutsideClickHandler
					onOutsideClick={() => {
						setItemModal(false);
					}}
				>
					<DivModal $color_modal2>
						<Grid $grid_modal_items_container>
							<button className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200">
								<P $grid_modal_title>Eliminar Solicitud</P>
								<img src={edit} alt="log out" className="w-5 mx-2" />
							</button>
							<button className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200">
								<P $grid_modal_title>Ver perfil del pasante</P>
								<img src={log} alt="Editar Perfil" className="w-5 mx-2" />
							</button>
						</Grid>
					</DivModal>
				</OutsideClickHandler>
			)}
		</>
	);
};
