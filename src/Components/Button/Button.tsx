import React, { FunctionComponent } from 'react';
import { Button } from 'reactstrap';

type BtnProps = {
  color?: string;
  text: string;
  onClick: () => void;
  className?: string;
  size?: string;
  icon?: string;
}

export const Btn: FunctionComponent<BtnProps> = ({ color = 'primary', text, onClick, className, size, icon }) => {

  return (
  <Button outline {...{ color, onClick, className, size }} >
    {text} {icon ? <img src={icon} alt={`${icon} logo`} /> : null}
    </Button>
  );
}