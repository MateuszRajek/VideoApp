import React from 'react';
import { Button } from 'reactstrap';

function Btn({ color, text, onClick, className }) {
  let outlineColor


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
    default:
      outlineColor = 'primary';
  }

  return (
  <Button outline color={outlineColor} onClick={onClick} className={className} >
    {`${text}`}
    </Button>
  );
}

export default Btn;