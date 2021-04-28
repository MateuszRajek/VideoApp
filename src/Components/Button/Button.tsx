import React, {FunctionComponent} from 'react';
import { Button } from 'reactstrap';

enum Colors {
  info = 'info',
  danger = 'danger',
  success = 'success',
  link = 'link',
}

type BtnProps = {
  color: Colors;
  text: string;
  onClick: () => void;
  className: string;
  size: string;
  icon: string;
}

export const Btn: FunctionComponent<BtnProps> = ({ color, text, onClick, className, size, icon }) => {
  let outlineColor: string

  color ? outlineColor = Colors[color] : outlineColor = 'primary'

  return (
  <Button outline {...{ color:outlineColor, onClick, className, size }} >
    {text} {icon ? <img src={icon} alt={`${icon} logo`} /> : null}
    </Button>
  );
}