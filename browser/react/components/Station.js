import React from 'react';
import Songs from './Songs';

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

export default function ({genreName, stationSongs, currentSong, isPlaying, toggleOne}) {
  return (
    <div>
      <h3>{ genreName } Station </h3>
      <Songs 
        songs={stationSongs} 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        toggleOne={toggleOne}
      />
    </div>
  );
}
