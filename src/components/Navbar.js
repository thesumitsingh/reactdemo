
import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">SumitDemo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  </div>;
}

Navbar.propTypes={title:PropTypes.string,
                    aboutText:PropTypes.string}

Navbar.defaultProps={title:"Navbar text goes here",
                    aboutText:"About text here"}