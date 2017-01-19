import React from 'react';
import { Motion, spring, presets } from 'react-motion';

import Navigation from '../template/Navigation';

var PageFour = React.createClass({
  render: function() {
    return (
      <div className='page'>
        <div className='heroImage pageFourImage'>
            <img src='/app/img/burung.jpg' />
          </div>


        <div className='textContent'>
          <h1>Your adventure awaits!</h1>
          <p>Millions of travellers depend on Traveloka for all their booking needs. It’s your turn. <br/><br/>
          Start your journey now!</p>
        </div>
        <div className='navigation'>
          <a className='end' href='https://m.traveloka.com'>Set Sail</a>
        </div>
      </div>
    )
  }
});

export default PageFour;
