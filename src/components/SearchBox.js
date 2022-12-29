import React, { useState } from "react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  //   const filteredData = data.filter((item) => {
  //     if (filterOption === "all") {
  //       return item.name.includes(searchQuery);
  //     } else {
  //       return item.name.includes(searchQuery) && item.type === filterOption;
  //     }
  //   });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <select value={filterOption} onChange={handleFilterOptionChange}>
        <option value="all">All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
      </select>
      {/* {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
    </div>
  );
};

export default SearchBox;
