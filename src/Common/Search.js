import React from 'react';
import { useState} from 'react';
import './Header.css';
import './Search.css';

const Search = () => {
  const [keyword,setKeyword] = useState('');
  const keywordChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="search-container">
        <form
          class="col-11"
          id="search-bar"
          style={{
            display: "flex",
            // display: 'grid',
            // gridAutoFlow: 'column',
            // gridTemplateColumns: '1fr',
          }}
        >
          <input
            class="col-1"
            className="searchbar_input"
            onChange={keywordChange}
            value={keyword}
            style={{
              marginLeft: "auto",
              textAlign: "center",
              borderRadius: "25px 25px 25px 25px",
              height: 35,
              width: 170,
              borderWidth: '2.5px',
              borderStyle: "solid",
              borderColor: "rgba(219, 219, 219, 1)",
              marginBottom: "20px",
              marginTop: "-30px"
              
            }}
            type="text"
            placeholder="Search"
          />
          {/* <button className="search_Btn" id="search_Btn">
            <i class="bi bi-search-heart-fill"></i>
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Search;
