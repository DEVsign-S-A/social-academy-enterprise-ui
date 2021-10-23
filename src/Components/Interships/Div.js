import tw from "tailwind-styled-components"

export const Div = tw.div`
    ${props => props.$containerprymari &&
        'bg-greyLight w-screen h-screen flex justify-center items-center'
    };

    ${props => props.$container_login &&
        'bg-white w-100 h-auto pr-20 pl-20 pt-28 pb-24 overflow-scroll rounded z-10 mobile:w-full tablet:w-100 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20 mobile:h-screen tablet:h-auto'
    };

    ${props => props.$containeregister &&
        'bg-white w-100 h-full pr-20 pl-20 pt-20 pb-20 overflow-scroll rounded z-10 mobile:w-full mobile:h-full tablet:w-100 tablet:h-110 mobile:h-110 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20'
    };

    ${props => props.$containerrecoverpassword &&
        'bg-white w-100 h-auto pr-20 pl-20 pt-20 pb-10 rounded z-10 mobile:w-full tablet:w-100 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20 mobile:h-screen tablet:h-auto'
    };

    ${props => props.$containerlogoleft &&
        'absolute top-4 left-4 z-20'
    };

    ${props => props.$containerlogoright &&
        'absolute top-4 right-4 z-40'
    };

    ${props => props.$container_components_right &&
        'absolute top-4 right-4 z-20 flex'
    };

    ${props => props.$container_log_out_right &&
        'absolute top-20 right-4 z-20'
    };

    ${props => props.$container_input_pass &&
        'appearance-none bg-gray-200 text-gray-700 rounded w-full py-3 px-3 focus:outline-none'
    };

    ${props => props.$disable_div_add &&
        'appearance-none bg-gray-200 text-gray-700 rounded w-full h-12 py-3 px-3 focus:outline-none'
    };

`