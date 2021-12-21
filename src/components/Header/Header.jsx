import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <Menu />
    </div>
  );
}
