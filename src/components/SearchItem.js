import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
const SearchItem = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.pushState(`/search/${keyword}`);
    } else {
      history.pushState("/");
    }
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        type="text"
        className="searchText"
        placeholder="search Items or Products"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="search">
        {" "}
        <SearchOutlinedIcon />
      </div>
    </form>
  );
};

export default SearchItem;
