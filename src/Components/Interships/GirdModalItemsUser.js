import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
	getUserInfo,
	startDeleteResponseInterships,
} from "../../Redux/Actions/intershipsActions";
import { DivModal } from "./Modal";
import { Grid } from "./Grid";
// images
import log from "../../Assets/UI_Intership/Show.svg";
import edit from "../../Assets/UI_Intership/Delete.svg";
import { P } from "./P";

export const GirdModalItemsUser = ({ ItemModal, setItemModal, uid, id }) => {
	// 	aqui unicamente se usan Link de React-Router-DOM ya que no se requiere petecion al servidor extra
	// y todo se controla con el store de Redux
	const history = useHistory();
	const dispatch = useDispatch();

	const { interships } = useSelector((state) => state.interships);
	const loadInter = interships.find((inter) => inter.id === id);
	const { solictudesRespustas } = loadInter;
	const uidValidate = solictudesRespustas.find((idUser) => idUser.uid === uid);
	const indexArray = solictudesRespustas.indexOf(uidValidate);

	const HandleRemove = () => {
		dispatch(startDeleteResponseInterships(id, loadInter, indexArray));
	};

	const handleViewUser = () => {
		dispatch(getUserInfo(uid));
		setTimeout(() => {
			history.push(`/Profile/${uid}`);
		}, 200);
	};

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
							<button
								className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200"
								onClick={HandleRemove}
							>
								<P $grid_modal_title>Eliminar Solicitud</P>
								<img src={edit} alt="log out" className="w-5 mx-2" />
							</button>
							<button
								className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200"
								onClick={handleViewUser}
							>
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
