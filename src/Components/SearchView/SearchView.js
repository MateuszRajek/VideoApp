import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Btn from '../Button/Button';
import './SearchView.css';

function SearchView() {

  return (
    <InputGroup>
        <Input placeholder="Video URL" />
        <InputGroupAddon addonType="append">
          <Btn outlineColor='info' text='Search for video'/>
        </InputGroupAddon>
      </InputGroup>
  );
}

export default SearchView;