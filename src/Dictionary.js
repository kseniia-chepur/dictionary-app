import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import Photos from './Photos';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [notFoundMsg, setNotFoundMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSearchResults(null);
    setPhotos(null);
    setNotFoundMsg(false);
    setIsLoading(true);

    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    const dictionaryRequest = axios.get(dictionaryUrl);

    const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    const pexelsRequest = axios.get(pexelsUrl, {
      headers: {
        Authorization: pexelsApiKey,
      },
    });

    Promise.allSettled([dictionaryRequest, pexelsRequest])
      .then(async ([dictionaryRaw, pexelsRaw]) => {
        const dictionaryResponse = await dictionaryRaw.value;
        const pexelsResponse = await pexelsRaw.value;

        setSearchResults(dictionaryResponse?.data[0]);
        setPhotos(pexelsResponse.data.photos);

        if (!dictionaryResponse && !pexelsResponse.data.photos.length) {
          setNotFoundMsg(true);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className='Dictionary'>
      <form className='form-group my-5' onSubmit={handleSubmit}>
        <input
          type='search'
          className='form-control'
          placeholder='Search for any word or phrase'
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>

      {notFoundMsg && !isLoading ? (
        <p className='text-center'>No Results Found</p>
      ) : (
        <>
          <SearchResults data={searchResults} />
          <Photos photos={photos} />
        </>
      )}
    </div>
  );
}
