import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    const theme = useTheme();

    return (<div style={{
        display: "flex",
    }}>
        <input style={{ 
            width: "100%",
            height: "30px",
            borderRadius: "10px 0 0 10px"
        }} />
        <SearchIcon sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            height: "36px",
            borderRadius: "0 10px 10px 0"
        }}/>
    </div>)
}