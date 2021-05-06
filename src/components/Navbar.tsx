import React from 'react';

function navbar() {
  return (
    <>
      <div className="container-fluid navbar">
        <div className="nav flex flex-row py-5">
          <img className="logo_nav" src="/images/favicon.png" alt="icon-nav" />
          <div className="ml-auto">
            <ul className="flex space-x-4 mr-16">
              <li>Projects</li>
              <li>Services</li>
              <li>About</li>
              <li>Talt to Us</li>
            </ul>
          </div>
        </div>

        <div className="hero_content text-left">
          <div className="py-10 text">
            <h1 className="text-2xl font-bold mb-3">We are a Tech Laboratory.</h1>
            <p className="font-bold mb-3">_Handcrafting business solutions.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <button className="btn text-white font-bold py-1 px-6 rounded  mb-48">build with us</button>
        </div>
      </div>
    </>
  );
}
export default navbar;
