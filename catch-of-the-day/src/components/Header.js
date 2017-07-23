import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        <Link to="/" activeClassName="active">
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </Link>
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header
