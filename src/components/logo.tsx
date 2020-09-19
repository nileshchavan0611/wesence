import React from 'react';
import LogoSVG from '../assets/logo.svg';

export default function Logo(): JSX.Element {
  return (
    <>
      <LogoSVG className="logo" />
      <h1 className="name">Wesence</h1>
      <h2 className="hide">Web and mobile app development</h2>
    </>
  );
}
