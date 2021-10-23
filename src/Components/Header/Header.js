import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GirdModalItems } from "../Interships/GirdModalItems";

export const Header = () => {
	const { displayName, UserData } = useSelector((state) => state.auth);
	const { providerId, profile } = UserData;
	let photo;

	if(providerId === 'password'){
		photo = 'https://thispersondoesnotexist.com/image';
	}else{
		const { picture } = profile;
		photo = picture;
	}
	const [ItemModal, setItemModal] = useState(false);

	return (
		<>
			<header className="pt-3 w-full flex justify-between">
				<nav className="pt-8"></nav>
				<div className="flex mx-5 pt-5 mb-3 relative right-0 justify-center items-center">
					<p className="font-Poppins font-bold text-gray-600">{displayName}</p>
					
					<img
						src={photo}
						alt={displayName}
						className="mx-5 w-16 rounded-full ring-1 ring-gray-200 drop-shadow-lg shadow-md cursor-pointer"
						onClick={() => setItemModal(!ItemModal)}
					/>
					<GirdModalItems ItemModal={ItemModal} setItemModal={setItemModal} />
				</div>
			</header>
		</>
	);
};
