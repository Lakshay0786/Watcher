import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { cacheResults } from '../Store.js/Slice/CacheSlice';
import { useSelector } from 'react-redux';
import { searchValue } from '../Store.js/Slice/searchValueSlice';


const SearchBar = () => {
  const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.cacheResults)



  useEffect(() => {
    console.log("searchUSeEffect")
    const timer = setTimeout(() => {
      if (searchCache[searchTerm]) {
        setSuggestions(searchCache[searchTerm])
      } else {
        console.log("searchtrigger")
        getSearchSuggestions()
      }
    }, 200)
    return () => {
      clearTimeout(timer);
    };

  }, [searchTerm])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchTerm)
    const json = await data.json();
    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchTerm]: json[1],
    }))
  }

  const pageChange = (s) => {
    console.log("trigger")
    dispatch(searchValue(s))
    setShowSuggestions(false)
    navigate(`/search/${s}`);
    setSearchTerm("")
  }


  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(searchValue(searchTerm))
      navigate(`/search/${searchTerm}`);
      setSearchTerm("")
    }


  };

  const onBLur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200)
  }

  return (
    <div className='main-search-div'>
      <Paper
        component='form'
        className='paper-div'
        onSubmit={onHandleSubmit}
        sx={{
          borderRadius: 20,

          border: '1px solid #e3e3e3',
          boxShadow: 'none',

        }}
      >
        <input
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}

          onBlur={onBLur}
        >
        </input>
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className='suggestions-div'>
        {showSuggestions && (
          <div className=''>

            {suggestions.map((s) => (
              <li key={s} onClick={() => pageChange(s)} className='li-list'><SearchIcon className='iconsearch' />{s}</li>
            ))
            }
          </div>
        )}
      </div>


    </div>
  );
};

export default SearchBar;