import {connect} from 'react-redux';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedArtist: state.artists.selected,
    children: ownProps.children.props.children

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}



  render() {
    return (
      <Artist
        {...this.state.player}
        selectedArtist={this.state.artists.selected}
        toggleOne={this.toggle}
        children={this.props.children.props.children} />
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Artist);