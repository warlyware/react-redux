import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { SearchBar } from './components/search-bar';
import { VideoList } from './components/video-list';
import { VideoDetail } from './components/video-detail';

import { ApiKeys } from '../api-keys.constant.js';

const API_KEY = ApiKeys.youtube;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: undefined
    };

    this.videoSearch('hiatus kayote');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
