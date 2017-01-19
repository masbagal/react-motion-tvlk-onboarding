import React from 'react';
import { Link } from 'react-router';

var Navigation = React.createClass({
  handleActive: function(idx) {
    const pathname = this.props.pathname.replace('/', '');
    if(pathname == idx) {
      return 'active';
    }
  },

  render: function() {
    return (
      <div className='navigation'>
      <ul className='pageStatus'>
        <li className={this.handleActive(1)}/>
        <li className={this.handleActive(2)}/>
        <li className={this.handleActive(3)}/>
        <li className={this.handleActive(4)}/>
      </ul>
      <Link to={this.props.next}>
        <button className='next'>Next ></button>
      </Link>
      </div>
    )
  }
});

export default Navigation;
