import React from 'react';
import { animated } from 'react-spring';
import Logo from '../components/logo';
const AnimatedLogo = animated(Logo);
function contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="content_contact">
          <div className="flex flex-row justify-around gap-5 text-left py-10 px-10 flex-wrap">
            <div>
              <AnimatedLogo />
            </div>
            <div>
              <h1 className="font-bold">About</h1>
              <ul>
                <li>Our Company</li>
                <li>Working</li>
                <li>Partner</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Services</h1>
              <ul>
                <li>Discovery</li>
                <li>Development</li>
                <li>Design</li>
                <li>Deployment</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Talk to us</h1>
              <ul>
                <li>You can write to us.</li>
                <li>hello@wesence.com</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Follow</h1>
              <div>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default contact;
