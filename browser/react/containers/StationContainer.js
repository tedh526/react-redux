import { connect } from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';


const mapStateToProps = (state, ownProps) => {
  let genreName = ownProps.params.genreName;
  let filterSongs = state.songs.filter(song => genreName === song.genre);
  let stationSongs = filterSongs.map(convertSong);

  return {
    genreName,
    stationSongs,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);
export default StationContainer;