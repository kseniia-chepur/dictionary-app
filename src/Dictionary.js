import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [photos, setPhotos] = useState(null);

   function getDictionaryResponse(response) {
    setSearchResults(response.data[0]);
  }

  function getPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001223061c877d44961b96bbe66a00da528";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then(getPexelsResponse);
  }

  return (
    <div className="Dictionary">
      <form className="form-group my-5" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for any word or phrase"
          onChange={(e) =>
            setKeyword(e.target.value)
          }
        />
      </form>
      <SearchResults data={searchResults} />
      <Photos photos={photos} />
    </div>
  );
}
