import React from 'react';
import Podcast from './Podcast.jsx';
import Title from './Title.jsx'
import withRoot from '../withRoot.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [{
        id: 1,
        title: 'chapo trap house',
        patreon_RSS: 'https://www.patreon.com/rss/chapotraphouse?auth=e0I3MNk1lNjZaPpZdXiRgSzDc0cZoIU8'
      },
      {
        id: 2,
        title: 'true anon',
        patreon_RSS: 'https://www.patreon.com/rss/TrueAnonPod?auth=JTuvlyYuLVwMcMkbJcZWvGmbM6OL4H2p'
      },
      {
        id: 3,
        title: 'yeah but still',
        patreon_RSS: 'https://www.patreon.com/rss/yeahbutstill?auth=2TbDeao7wyMqlSl_i9NNHy8-zivf04_1'
      }]
    };
  }
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
