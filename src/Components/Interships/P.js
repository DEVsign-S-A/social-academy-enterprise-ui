import tw from "tailwind-styled-components";

export const P = tw.p`
    ${ props => props.$grid_modal_title &&
        "mx-2 text-gray-500 font-medium"
    }

    ${props => props.$grid_modal_title_red &&
        "mx-2 text-red-400 font-medium"
    }

    ${props => props.$grid_footer_title &&
        "mt-8 font-medium text-gray-500"
    }
`;