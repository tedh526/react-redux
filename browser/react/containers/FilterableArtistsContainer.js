import { connect } from 'react-redux';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import React, {Component} from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists.list
  };

};

export default connect(mapStateToProps)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        artists: this.props.artists
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
    render(){ 
      const filteredArtists = this.state.artists.filter(artist => artist.name.match(this.state.inputValue));
      return (
        <div>
          <FilterInput 
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
          />
          <Artists artists= {filteredArtists} />
        </div>
      );
    }
  });

