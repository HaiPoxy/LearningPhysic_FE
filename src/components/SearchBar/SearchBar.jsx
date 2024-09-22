import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasResults, setHasResults] = useState(true);


  const dropdownRef = useRef();

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log("json...", json);
        const results = json.filter((user) => {
          return (value && user && user.name && user.name.toLowerCase().includes(value));
        });
        setSearchResults(results);
        setHasResults(results.length > 0);
        setShowDropdown(true);
      });
  };

  const handleInputSearch = (e) => {
    const { value } = e.target;
    setInput(value);
    if (value.trim() === "") {
      setShowDropdown(false);
    } else {
      fetchData(value);
    }
  };

  const handleSelectResult = (selectedResult) => {
    setInput(selectedResult.name);
    setResults([selectedResult]);
    setShowDropdown(false);
  };

  const handleOpenAndCloseDropdown = (e) => {
    if (
      (dropdownRef.current && !dropdownRef.current.contains(e.target))
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOpenAndCloseDropdown);

    return () => {
      document.removeEventListener("mousedown", handleOpenAndCloseDropdown);
    };
  }, [handleOpenAndCloseDropdown]);

  const handleFocusInput = () => {
    setShowDropdown(true);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder='Tìm kiếm khoá học, bài tập, kiểm tra...'
        value={input}
        onChange={handleInputSearch}
        onFocus={handleFocusInput}
      />
      {showDropdown && (
        <div ref={dropdownRef} className="dropdown-container">
          <div className="dropdown">
            {hasResults ? (
              searchResults.map((result) => (
                <div key={result.id} onClick={() => handleSelectResult(result)}>
                  {result.name}
                </div>
              ))
            ) : (
              <div className="no-results">Không có kết quả với từ khóa "{input}"</div>
            )}
          </div>
        </div>

      )}
    </div>
  );
};

export default SearchBar;