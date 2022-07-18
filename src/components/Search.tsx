import SearchIcon from '@mui/icons-material/Search';
import { NavigateFunction } from 'react-router-dom';
import '../styles/SearchBar.css';

interface Props {
    navigate: NavigateFunction;
}


const Search: React.FunctionComponent<Props> = ({ navigate }) => {
    return (
        <div style={{
            display: 'flex',
            color: 'white',
            alignItems: 'center',
            height: '50%',
            width: '100%',
            minWidth: '100px',
            marginRight: '40px',
            marginLeft: '5%'
        }}>
            <input style={
                {
                    height: '100%',
                    width: '400px',
                    minWidth: '100px',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    padding: '15px',
                }}
                placeholder='Pizza, Break fast, Family mall...etc' />

            <SearchIcon style={
                {
                    fontSize: '40px',
                    backgroundColor: 'red',
                    height: '95%',
                    padding: '3px',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px'
                }}
                onClick={() => navigate('/search')}
            />
        </div>
    )
}

export default Search