import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import Logo from '../components/logo';
import Paragraph from '../components/paragraph';
import Tagline from '../components/tagline';
import Clients from '../components/clients';
import DemoComponent from '../components/DemoComponent'
import Service from '../components/Service'
import ContactUs from '../components/ContactUs'
import ProgressSectin from '../components/ProgressSectin'
import OurClint from '../components/OurClint';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection'
const AnimatedLogo = animated(Logo);
const AnimatedParagraph = animated(Paragraph);

export default function Home(): JSX.Element {
  const paragraphProps = useSpring({
    opacity: 0,
    x: 20,
    to: {
      opacity: 1,
      x: 0,
    },
    config: config.slow,
  });

  return (
    <>
    <Navbar />
    <Herosection />
    <ProgressSectin />
    <Service />
    <OurClint />
    <DemoComponent />
    <ContactUs />
    </>
  );
}
