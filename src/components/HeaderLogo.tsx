import StorefrontIcon from '@mui/icons-material/Storefront';

export const HeaderLogo = () => {

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
        }}>
            <StorefrontIcon color='secondary' fontSize='large' sx={{ margin: "0 2% 0 2%"}}/>
            <h1>eShop</h1>
        </div>
    )
}

