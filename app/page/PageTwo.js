import React from 'react';
import { Motion, spring, StaggeredMotion } from 'react-motion';

import Navigation from '../template/Navigation';

var PageTwo = React.createClass({
  render: function() {
    const defaultStyles = [
      {h: -200},
      {h: -200},
      {h: -200},
      {h: -200},
      {h: -200}
    ];

    const styles = (prevStyles) => prevStyles.map((style, i) => {
      return i === 0
      ? {x: spring(0)}
      : {x: spring(prevStyles[i - 1].x)}
    });

    return (
      <div className='page'>
          <div className='heroImage pageTwoImage'>
          <StaggeredMotion
            defaultStyles={defaultStyles}
            styles={prevStyles => prevStyles.map((style, i) => {
              return i === 0
                ? {h: spring(0)}
                : {h: spring(prevStyles[i - 1].h)}
            })}>
            {interpolatingStyles =>
              <div>
                {interpolatingStyles.map((style, i) =>
                  <img key={i} src='/app/img/book1.png' style={{transform: `translateX(${style.h}%)`}} />)
                }
              </div>
            }
          </StaggeredMotion>
          </div>

        <div className='textContent'>
          <h1>Manage your Booking Easier</h1>
          <p>After creating an account, managing all your itineraries is easier than ever.</p>
        </div>
        <Navigation pathname={this.props.location.pathname} next='/3'/>
      </div>
    )
  }
});

export default PageTwo;
