import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="topHeader">
        <div className="container">
          <div className="header_container">
            <div className="brand_name d-flex"> <a href="javascript:void(0)">Video Library</a> </div>
            <ul className="top_nav d-flex">
              <li><a href="javascript:void(0)" className="active">Home</a></li>
              <li><a href="javascript:void(0)"><img src="images/user-icon.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
