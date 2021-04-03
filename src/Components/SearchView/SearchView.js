import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Btn from '../Button/Button';
import './SearchView.css';

function SearchView({ onChange, onClick }) {

  return (
    <InputGroup>
        <Input placeholder="Video URL" onChange={onChange}/>
        <InputGroupAddon addonType="append">
          <Btn outlineColor='info' text='Add a video' onClick={onClick}/>
        </InputGroupAddon>
      </InputGroup>
  );
}

export default SearchView;