import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  function saveInput(event) {
    setKeyword(event.target.value);
  }

  function getDictionaryResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getDictionaryResponse);
  }

  return (
    <div className="Dictionary">
      <form className="form-group my-5" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for any word or phrase"
          onChange={saveInput}
        />
      </form>

      <SearchResults data={searchResults} />
    </div>
  );
}
