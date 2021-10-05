// import React from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import { DivModal } from "../../Components/Modal";
// import {useTranslation} from 'react-i18next'

// // images
// import deleted from "../../assets/Delete red.svg";
// import eye from "../../assets/Show.svg";
// import { P } from "../../Components/P";
// import { Grid } from "../../Components/Grid";

// export const GirdModalItems = ({ ItemModal, setItemModal }) => {
  
//   const [t] = useTranslation("global");

//   // const handleChange = async (e) => {
//   //   setItemModal(false);
//   // };

//   return (
//     <>
//       {ItemModal && (
//         <OutsideClickHandler
//           onOutsideClick={() => {
//             setItemModal(false);
//           }}
//         >
//           <DivModal $color_modal>
//             <Grid $grid_modal_items_container>
//               <button className="flex my-3">
//                 <img src={eye} alt="eye" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("view")}</P>
//               </button>

//               <button className="flex my-3">
//                 <img src={edited} alt="edit" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("edit")}</P>
//               </button>

//               <button className="flex my-3">
//                 <img src={text} alt="edit" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("view-rates")}</P>
//               </button>
//               <button className="flex my-3">
//                 <img src={project} alt="edit" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("view-lessons")}</P>
//               </button>
//               <button className="flex my-3">
//                 <img src={task} alt="task" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("view-mini-chanllenges")}</P>
//               </button>
//               <button className="flex my-3">
//                 <img src={time} alt="time" className="mx-1 mt-1" />
//                 <P $grid_modal_title>{t("view-admin-hours")}</P>
//               </button>
//               <hr />
//               <button className="flex my-3">
//                 <img src={deleted} alt="deleted" className="mx-1 mt-1" />
//                 <P $grid_modal_title_red>{t("delete-teacher")}</P>
//               </button>
//             </Grid>
//           </DivModal>
//         </OutsideClickHandler>
//       )}{" "}
//     </>
//   );
// };
