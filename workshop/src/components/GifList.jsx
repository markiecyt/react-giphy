import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs, setSelectedID }) => {
  // const gifIDs = ["gG6OcTSRWaSis", "13UZisxBxkjPwI", "ZG719ozZxGuThHBckn"];
  return (
    <div className="gif-list">
      {
        gifIDs.map((gifId) => <Gif gifID={gifId} key={gifId} setSelectedID={setSelectedID} />)
      }
    </div>
  );
};

export default GifList;
