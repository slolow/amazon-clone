import { ProductProps } from "../components/Product";

export type State = {
    shoppingCartItems: ProductProps[];
};

export type Action = {
  type: string;
  item: ProductProps;
};

export type Reducer = (state: State, action: Action) => State;

export const initialState: State = {
    shoppingCartItems: [],
}

export const reducer: Reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_SHOPPING_CART": 
            return {
                ...state,
                shoppingCartItems: [...state.shoppingCartItems, action.item],
            }
    }
  }