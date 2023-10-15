
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GDSC Logo</div>
      <nav className="nav">
        <a href="/aboutgdsc">AboutGDSC</a>
        <a href="/chapters">Chapters</a>


        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;

