import { useTheme } from '@emotion/react';
import { Button, type ButtonProps  } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { useStateReducer } from '../data_layer/useStateReducer';

export type ProductProps = {
    title: string;
    price: number;
    rating: number;
    imgSrc: string;
    imgAlt: string;
}

/* customize style off matarial-UI button
white text
*/
const ShopProductButton = styled(Button)<ButtonProps>(() => ({
    color: '#FFF',
}));

export const Product = ({ title, price, rating, imgSrc, imgAlt }: ProductProps) => {
    const theme = useTheme();
    const [, dispatch] = useStateReducer();

    const addToShoppingCart = () => {
        dispatch({
            type: 'ADD_TO_SHOPPING_CART',
            item: {
                title,
                price,
                rating,
                imgSrc,
                imgAlt,
            }
        })
    }

    return (
        <div id="productContainer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: theme.palette.background.default,
                width: "80%",
                borderRadius: "1%",
                padding: "2%",
            }}
        >
            <h3>{title}</h3>
            <span>{`$${price}`}</span>
            <span>{'⭐'.repeat(rating)}</span>
            <img 
                src={imgSrc}
                alt={imgAlt}
                style={{
                    width: "200px",
                    height: "200px",
                    marginBottom: "1%",
                }}
            />
            <ShopProductButton 
                variant="contained"
                color="secondary"
                endIcon={<ShoppingCartIcon />}
                onClick={addToShoppingCart}
            >
                Add to Shoppingcart
            </ShopProductButton>
        </div>
    ) 
}

