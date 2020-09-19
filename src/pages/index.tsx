import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import Logo from '../components/logo';
import Paragraph from '../components/paragraph';
import Tagline from '../components/tagline';
import Clients from '../components/clients';

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
      <AnimatedLogo />
      <Tagline />
      <AnimatedParagraph className="content" style={paragraphProps}>
        Our site wasn’t updated since a long time and we are making a brand new one just for you.
        <br />
        <br />
        Thanks for visiting.
        <br />
        Come back in a few days for the surprise reveal!
      </AnimatedParagraph>
      <Clients />
      <AnimatedParagraph className="contact" style={paragraphProps}>
        In the mean time, reach us at
        <br />
        <a href="mailto:hello@wesence.com">hello@wesence.com</a>
      </AnimatedParagraph>
      <AnimatedParagraph className="copyright" style={paragraphProps}>
        &copy; 2020 Wesence Technologies Private Limited
      </AnimatedParagraph>
    </>
  );
}
