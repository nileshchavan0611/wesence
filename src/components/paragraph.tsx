import React from 'react';

type Props = {
  children: any;
  className?: string;
  style?: object;
};

export default function Paragraph({ children, className, style }: Props): JSX.Element {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}
