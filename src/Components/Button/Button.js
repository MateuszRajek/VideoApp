import React from 'react';
import { Button } from 'reactstrap';

function Btn({ outlineColor, text, onClick }) {

  return (
    <Button outline color={`${outlineColor}`} onClick={onClick}>
    {`${text}`}
    </Button>
  );
}

export default Btn;