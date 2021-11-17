import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { AboutUser } from "../Components/UI_UserProfile/AboutUser";
import { UserExperience } from "../Components/UI_UserProfile/UserExperience";
import { UserInfo } from "../Components/UI_UserProfile/UserInfo";
import { getUserInfo } from "../Redux/Actions/intershipsActions";

const ProfileScreen = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getUserInfo(userId));
	}, [dispatch, userId]);

	const user = useSelector((state) => state.user);

	//console.log(user);

	const handleBack = () => {
		setTimeout(() => {
			history.push("/IntershipRequest");
		}, 200);
	};

	return (
		<>
			<button className="btn m-10 bg-primary font-semibold text-2xl text-white py-2 px-4 shadow-lg rounded-lg" onClick={handleBack}>
				Regresar
			</button>
			<div className="flex flex-row ProfileScreen">
				{user ? (
					<>
						<UserInfo {...user} />
						<AboutUser {...user} />
						<UserExperience {...user} />
					</>
				) : (
					<Redirect to="/error404" />
				)}
			</div>
		</>
	);
};

export default ProfileScreen;
