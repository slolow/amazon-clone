import { useTheme } from '@emotion/react';
import { HeaderLogo } from './HeaderLogo';
import { SearchBar } from './SearchBar';
import { ShoppingCart } from './ShoppingCart';
import { Link } from 'react-router-dom';

export const Header = () => {
    const theme = useTheme();

    return (
        <header style={{
                display: 'flex',
                alignItems: "center",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                padding: "0 2%",
                fontFamily: theme.typography.fontFamily,
        }}>
            <Link to={'/'} style={{ textDecoration: "none", color: theme.palette.text.secondary, }}>
                <div id="headerLogo"
                    style={{
                        width: "15%"
                    }}
                >
                    <HeaderLogo />
                </div>
            </Link>

            <div id="searchBar"
                style={{
                    width: "70%",
                    margin: "0 2%"
                }}
            >
                <SearchBar />
            </div>

            <div id="headerInfos"
                style={{
                        display: "flex",
                        width: "20%",
                        justifyContent: "space-between",
                }}
            >
                <div id="signIn" 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                }}>
                    <span style={{ whiteSpace: "nowrap", }}>Hello Guest</span>
                    <span style={{ whiteSpace: "nowrap", }}>Sign In</span>
                </div>

                <div id="shopInfo"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                }}>
                    <span>Your</span>
                    <span>Shop</span>
                </div>

                <Link to={'/checkout'} style={{ textDecoration: "none", color: theme.palette.text.secondary, }}>
                    <ShoppingCart />
                </Link>
            </div>
        </header>
    )
}

