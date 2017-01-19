import React from 'react';
import { Motion, spring, StaggeredMotion } from 'react-motion';

import Navigation from '../template/Navigation';

var PageOne = React.createClass({
  getInitialState: function() {
    return {
      gridSlowing: false
    }
  },

  componentDidMount: function() {
    var self = this;
    setTimeout(function() {
      self.setState({
        gridSlowing: true
      })
    }, 2500)
  },
  render: function() {
    const defaultStyle = {
      grid: -310  ,
      plane1: 150,
      hotel: 0
    }

    const style = {
      grid: spring(-30, { stiffness: 40, damping: 50 } ),
      plane1: spring(this.state.gridSlowing ? -100 : 30, this.state.gridSlowing ? { stiffness: 150, damping: 26 } : { stiffness: 50, damping: 26 }),
      hotel: spring(this.state.gridSlowing ? 3.5 : 0)
    }
    return (
      <div className='page'>
      <Motion defaultStyle={defaultStyle} style={style}>
      { motion => (
        <div>
          <div className='heroImage pageOneImage'
            style={{backgroundPositionY: `${motion.grid}px`}}>
            <img className='plane' src='/app/img/pesawat.png' style={{top: `${motion.plane1}%`}}/>
            <img className='hotel' src='/app/img/hotel.png' style={{height: `${motion.hotel}em`}} />
          </div>

        </div>
      )

      }

      </Motion>
        <div className='textContent'>
          <h1>Welcome to Traveloka</h1>
          <p>With Traveloka, you're just one step away from finding your next flight and hotel with the best price</p>
        </div>
        <Navigation pathname={'/1'} next='/2'/>
      </div>
    )
  }
});

export default PageOne;
