import { ProductProps } from "../components/Product";

export type State = {
    shoppingCart: ProductProps[];
};

export type Action = {
  type: string;
  item: ProductProps;
};

export type Reducer = (state: State, action: Action) => State;

export const initialState: State = {
    shoppingCart: [],
}

export const reducer: Reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_SHOPPING_CART": 
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.item],
            }
    }
  }