import React from 'react';
import WesenceLogo from '../assets/logo.svg';

function MenuItem({ label }: { label: string }) {
  return <li className="mx-2 p-1">{label}</li>;
}

function MainMenu() {
  const menuItems = [{ label: 'Projects' }, { label: 'Services' }, { label: 'About' }, { label: 'Talk to Us' }];
  return (
    <nav>
      <ul className="flex items-center -mx-2">
        {menuItems.map((item) => (
          <MenuItem key={item.label} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <WesenceLogo className="w-12" />
          <MainMenu />
        </div>
      </div>
    </header>
  );
}
