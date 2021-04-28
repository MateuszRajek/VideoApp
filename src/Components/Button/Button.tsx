import React, { FunctionComponent } from 'react';
import { Button } from 'reactstrap';

enum Colors {
  info = 'info',
  danger = 'danger',
  success = 'success',
  link = 'link',
  primary = 'primary'
}

type BtnProps = {
  color: Colors;
  text: string;
  onClick: () => void;
  className?: string;
  size?: string;
  icon: string;
}

export const Btn: FunctionComponent<BtnProps> = ({ color = Colors.primary, text, onClick, className, size, icon }) => {
  let outlineColor: Colors

  outlineColor = Colors[color]

  return (
  <Button outline {...{ color:outlineColor, onClick, className, size }} >
    {text} {icon ? <img src={icon} alt={`${icon} logo`} /> : null}
    </Button>
  );
}