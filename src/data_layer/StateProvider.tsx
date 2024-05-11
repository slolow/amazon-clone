import { createContext, PropsWithChildren, useReducer } from "react";
import { Reducer, State } from "./reducer";

type StateProviderProps = {
    reducer: Reducer,
    initialState: State
}

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }: PropsWithChildren<StateProviderProps>) => {
    
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider >
    )
}