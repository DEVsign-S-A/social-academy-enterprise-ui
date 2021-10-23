import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

// images
import log from "../../Assets/UI_Login/logout.png";
import edit from "../../Assets/UI_Login/editar.png";
import { startLogout } from "../../Redux/Actions/authAction";
import { Grid } from "./Grid";
import { DivModal } from "./Modal";
import { P } from "./P";

export const GirdModalItems = ({ ItemModal, setItemModal }) => {
	const dispatch = useDispatch();
	// 	aqui unicamente se usan Link de React-Router-DOM ya que no se requiere petecion al servidor extra
	// y todo se controla con el store de Redux
const history = useHistory();
	const handleLogout = () => {
		dispatch(startLogout());
	};

	const handleEditProfile = () => {
		setTimeout(() => {
			history.push('/Edit/Profile');
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
								onClick={handleLogout}
							>
								<P $grid_modal_title>Cerrar Sesión</P>
								<img src={log} alt="log out" className="w-5 mx-2" />
							</button>
							<button
								className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200"
								onClick={handleEditProfile}
							>
								<P $grid_modal_title>Editar Perfil</P>
								<img src={edit} alt="Editar Perfil" className="w-5 mx-2" />
							</button>
						</Grid>
					</DivModal>
				</OutsideClickHandler>
			)}
		</>
	);
};
