import React from 'react';
import { Button } from 'reactstrap';

function Btn({ outlineColor, text }) {

  return (
    <Button outline color={`${outlineColor}`}>
    {`${text}`}
    </Button>
  );
}

export default Btn;