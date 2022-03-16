import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [ selectedID, setSelectedID ] = useState("U2nN0ridM4lXy");
  const [gifIDs, setGifIDs] = useState(["gG6OcTSRWaSis", "13UZisxBxkjPwI", "ZG719ozZxGuThHBckn"]);

  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGifIDs(res.data.map((gif) => gif.id));
    });
  }

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifs={changeGifs} />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
