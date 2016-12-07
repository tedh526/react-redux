import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = (songsArray) => {
  return songsArray.reduce(function(obj, song) {
    obj[song.genre] ? obj[song.genre].push(song) : obj[song.genre] = [song];
    return obj;
  }, {});
};

const mapStateToProps = (state) => {
  return {
    stations: convertSongsToStations(state.songs)
  };

};


const mapDispatchToProps = (dispatch) => {
  return {};

};

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;