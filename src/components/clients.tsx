import React from 'react';
import classNames from 'classnames';

type ClientProps = {
  className?: string;
  img: string;
  link?: string;
  name?: string;
};

const Client = ({ img, link, name, className = '' }: ClientProps): JSX.Element => (
  <li>
    <a className={classNames(['client', className])} href={link} target="_blank" rel="noreferrer">
      <img src={img} alt={name} />
    </a>
  </li>
);

export default function Clients(): JSX.Element {
  return (
    <div className="clients">
      <h4>Our Clients</h4>
      <ul>
        <Client img="/images/eenadu.png" name="Eenadu Siri" link="http://eenadusiri.net/" />
        <Client img="/images/uniquebiotech.png" name="Unique Biotech" link="http://uniquebiotech.com/" />
        <Client className="high" img="/images/bbd.png" name="Superb GXM" link="http://superbexperience.com/" />
        <Client img="images/superb.png" name="Superb GXM" link="http://superbexperience.com/" />
        <Client
          className="high"
          img="images/indiannica.png"
          name="Indiannica Learning"
          link="http://indiannicalearning.com/"
        />
        <Client className="high" img="images/qdc.png" name="Quick Dry Cleaning" link="https://quickdrycleaning.com/" />
      </ul>
    </div>
  );
}
