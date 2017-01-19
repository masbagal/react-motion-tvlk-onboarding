import React from 'react';

var HeroImage = React.createClass({
  render: function() {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
});

export default HeroImage;
