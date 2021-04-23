import React, {FunctionComponent} from 'react';
import { Button } from 'reactstrap';

type BtnProps = {
  color: string;
  text: string;
  onClick: () => void;
  className: string;
  size: string;
  icon: string;
}

export const Btn: FunctionComponent<BtnProps> = ({ color, text, onClick, className, size, icon }) => {
  let outlineColor: string


  switch(color) {
    case 'info':
      outlineColor = 'info';
      break;
    case 'danger':
      outlineColor = 'danger';
      break;
    case 'success':
      outlineColor = 'success';
      break;
    case 'link':
      outlineColor = 'link';
      break;
    default:
      outlineColor = 'primary';
  }

  return (
  <Button outline {...{ color:outlineColor, onClick, className, size }} >
    {text} {icon ? <img src={icon} alt={`${icon} logo`} /> : null}
    </Button>
  );
}