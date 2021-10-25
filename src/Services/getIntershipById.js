import { useSelector } from "react-redux";
import { dataIntership } from "../data/dataInternship";

export const getIntershipById = (id) => {

  // const intership = useSelector(state => state.intership)

  return dataIntership.find((inter) => inter.IdIntership === id);
};
