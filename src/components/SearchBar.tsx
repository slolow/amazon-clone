import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {

    return (<div style={{
        display: "flex",
    }}>
        <input style={{ 
            width: "100%",
            height: "30px",
            marginRight: "1%", 
        }} />
        <SearchIcon />
    </div>)
}