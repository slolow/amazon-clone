import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ShoppingCart = () => {
    const count = 0

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <ShoppingCartIcon />
            <span>
                {count}
            </span>
        </div>
    )
}