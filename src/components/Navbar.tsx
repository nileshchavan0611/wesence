import React from 'react';

function navbar() {
  return (
    <>
      <div className="container-fluid navbar">
        <div className="nav flex flex-row  flex-wrap py-5">
          <img className="logo_nav md:mx-32" src="/images/favicon.png" alt="icon-nav" />
          <div className="ml-auto">
            <ul className="flex space-x-4 mr-16">
              <li>Projects</li>
              <li>Services</li>
              <li>About</li>
              <li>Talt to Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default navbar;
