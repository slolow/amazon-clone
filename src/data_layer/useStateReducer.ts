import { useContext } from "react";
import { StateContext } from "./StateProvider";

export const useStateReducer = () => useContext(StateContext);