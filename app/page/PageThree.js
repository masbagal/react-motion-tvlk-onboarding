import React from 'react';
import { Motion, spring, presets } from 'react-motion';

import Navigation from '../template/Navigation';

var PageThree = React.createClass({
  render: function() {
    const defaultStyle = {
      x: -200
    }

    const style = {
      x: spring(0, presets.wobbly )
    }
    return (
      <div className='page'>
        <div className='heroImage pageThreeImage'>
          <Motion defaultStyle={defaultStyle} style={style}>
          {({x}) =>
          <div className='tqContainer' style={{transform: `translateX(${x}%)`}}>
            <img src='/app/img/travQuick.png' />
            <h2>1 Click Payment</h2>
          </div>
          }

          </Motion>
        </div>


        <div className='textContent'>
          <h1>Fastest Way to Book your Best Price</h1>
          <p>Book and get your e-ticket/hotel voucher in less than 1 minute with only <strong>one click.</strong></p>
        </div>
        <Navigation pathname={'/3'} next='/4'/>
      </div>
    )
  }
});

export default PageThree;
