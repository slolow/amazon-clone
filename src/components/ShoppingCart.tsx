import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateReducer } from '../data_layer/useStateReducer';

export const ShoppingCart = () => {
    const [{ shoppingCart }] = useStateReducer();

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <ShoppingCartIcon />
            <span>
                {shoppingCart.length}
            </span>
        </div>
    )
}