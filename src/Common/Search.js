import React from 'react';
import { useState,useEffect } from 'react';

const Search = () => {
  const [keyword,setKeyword] = useState('');
  const keywordChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    // <div class="col-9">
      <div id="search-bar"
        style={{
          display: 'flex'
          // display: 'grid',
          // gridAutoFlow: 'column',
          // gridTemplateColumns: '1fr',
        }} >
                    <input 
                        className="search-bar"
                        onChange={keywordChange}
                        value={keyword}
                        style={{
                            marginLeft: 'auto',
                            textAlign:'center',
                            borderRadius:"25px 25px 25px 25px",
                            height:35,
                            borderWidth: "thin",
                            borderStyle: "solid",
                            borderColor: "rgba(153, 153, 153, 1)",}}
                        type="text"
                        placeholder="Search ➡️" />
                </div>
  // </div>
  );
};

export default Search;