import React from 'react';
import { useState} from 'react';

const Search = () => {
  const [keyword,setKeyword] = useState('');
  const keywordChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <div class="col-11">
    <div className="search-container">
      <div class="row" id="search-bar"
        style={{
        display: 'flex'
          // display: 'grid',
          // gridAutoFlow: 'column',
          // gridTemplateColumns: '1fr',
        }} >
                    <input class="col-1"
                        className="search-bar"
                        onChange={keywordChange}
                        value={keyword}
                        style={{
                            marginLeft: 'auto',
                            textAlign:'center',
                            borderRadius:"25px 25px 25px 25px",
                            height:35,
                            width:170,
                            borderWidth: "thin",
                            borderStyle: "solid",
                            borderColor: "rgba(153, 153, 153, 1)",}}
                            type="text"
                            placeholder="Search ➡️" />
                </div>
  </div>
  </div>
  );
};

export default Search;