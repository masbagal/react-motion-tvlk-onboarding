import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var MainContainer = React.createClass({
  render: function() {
    const pathname = this.props.location.pathname;
    const isFinished = pathname === '/4';
    return (
      <div>
      {
        !isFinished ?
      <header>
        <img src='/app/img/logo.png'/>
      </header> : ''
      }
        <div className='content'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
});

export default MainContainer;
