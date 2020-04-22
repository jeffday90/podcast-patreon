import React from 'react';
import Podcast from './Podcast.jsx';
import Title from './Title.jsx'
import withRoot from '../withRoot.jsx'


class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Podcast />
      </div>
    );
  }
}

// TODO LIST:
  // create UI
    // format on page with header and 
    // other details that make it look good :)
    // each podcast
      // picture
      // title
      // list
      // player
  
  // figure out how to attach RSS feed that updates


export default withRoot(App);
