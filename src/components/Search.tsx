import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { NavigateFunction } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import { getFeaturesByName } from '../redux/reducers/features';
import "../styles/SearchInput.css"
import '../styles/SearchBar.css';

interface Props {
    navigate: NavigateFunction;
}


const Search: React.FunctionComponent<Props> = ({ navigate }) => {
    const [searchText, setSearchText] = useState("");
    const dispatch = useAppDispatch();

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchText(event.target.value);
    }

    return (
        <div className='search_input_container'>
            <input
                value={searchText}
                onChange={onInputChange}
                className="input_field"
                placeholder='Pizza, Break fast, Family mall...etc' />

            <div className="search_icon">
                <SearchIcon style={
                    {
                        fontSize: '40px',
                        // backgroundColor: 'red',
                        height: '100%',
                        padding: '3px',
                        // borderTopRightRadius: '10px',
                        // borderBottomRightRadius: '10px'
                    }}
                    onClick={() => {
                        dispatch(getFeaturesByName({ name: searchText }))
                        setSearchText("");
                        navigate('/search')
                    }}
                />
            </div>
        </div>
    )
}

export default Search