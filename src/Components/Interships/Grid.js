import tw from "tailwind-styled-components";

export const Grid = tw.div`
	${(props) => props.$grid_primary_container &&
		"rounded-lg bg-white mt-10 mr-3 pb-8 shadow-md"}

	${(props) => props.$grid_primary_container_add &&
		"rounded-lg bg-white mt-10 mr-3 pb-10 pt-10 shadow-md"}

	${(props) =>props.$grid_items && 
		"grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-6 tablet:gap-4"
	}

	${(props) =>props.$grid_items_rates && 
		"grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-3 tablet:gap-4 pl-10"
	}

	${(props) =>props.$grid_items_lesson && 
		"grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-5 tablet:gap-4"
	}

	${(props) =>props.$grid_items_challenges && 
		"grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-4 tablet:gap-4"
	}

	${(props) =>props.$grid_items_administrative_hours && 
		"grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-5 tablet:gap-4"
	}


	${(props) =>
		props.$grid_items_container &&
		"mx-10 my-5 bg-white rounded-2xl border-2 border-gray-200"
	}

	${(props) =>
		props.$grid_search_bar &&
		"flex justify-around bg-gray-100 rounded-lg m-8 py-4 w-full"
	}

	${props => props.$grid_modal_items_container &&
		"flex-col mx-3 my-2 w-44"
	}
`;

export const GridText = tw.p`
	${(props) => props.$grid_title && 
		"text-2xl text-gray-700 font-semibold mt-10 ml-10"
	}
		
	${(props) => props.$grid_items_header && 
		"text-gray-400 text-1s font-bold uppercase laptop:text-2s"
	}

	${(props) => props.$grid_items_subtitle && 
		"text-gray-400 font-bold"
	}

	${(props) => props.$grid_items_img && 
		"ml-8  tablet:flex justify-around"
	}

	${(props) => props.$grid_items_title && 
		"ml-8 text-2s font-medium mt-2 mb-2 laptop:text-2s tablet:text-1s tablet:ml-0"
	}

	${(props) => props.$grid_tlf_title && 
		"text-2s font-medium mt-2 mb-2 laptop:text-2s tablet:text-1s"
	}

	${(props) => props.$grid_mail_title && 
		"ml-8 text-1s font-medium mt-2 mb-2 laptop:text-2s tablet:text-1s tablet:ml-0"
	}

	${(props) => props.$grid_hours_title && 
		"pl-10 text-1s font-medium mt-2 mb-2 laptop:text-2s tablet:text-1s tablet:ml-0"
	}


	${(props) => props.$grid_items_title2 && 
		"ml-8 text-gray-600 text-1s font-medium laptop:text-2s tablet:ml-0"
	}

	${(props) => props.$grid_items_titleRates && 
		"ml-8 text-gray-600 text-1s font-medium laptop:text-2s tablet:ml-0"
	}

	${(props) => props.$grid_items_title_sm && 
		"ml-8 text-gray-500 text-1s font-normal my-1 tablet:ml-0"
	}
`;

export const GridInput = tw.button`
    ${(props) =>props.$grid_btn_action &&
			"bg-gray-100 mr-10 py-4 px-7 rounded-lg text-xs flex justify-between items-center hover:shadow-md"
	}

    ${props => props.$grid_btn_footer &&
		"flex justify-between m-5 text-gray-500 font-semibold bg-gray-100 py-1 px-1 rounded-lg"
	}

	${props => props.$grid_btn_header &&
		"flex justify-between mx-5 my-8 bg-BlueOfficial px-4 text-white font-medium shadow-sm rounded-md"
	}
`;

export const GridArrowImage = tw.img`

${
	props => props.$grid_header_arrow &&
	"mx-2 mt-2"
}
`;

