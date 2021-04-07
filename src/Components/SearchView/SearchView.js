import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import Btn from '../Button/Button';
import './SearchView.css';

function SearchView({ onChange, onSubmit, onClick, source }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        < Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
          {source}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={onClick}>YouTube</DropdownItem>
          <DropdownItem onClick={onClick}>Vimeo</DropdownItem>
        </DropdownMenu>
        </Dropdown>
          <Input placeholder="Video URL" onChange={onChange}/>
          <InputGroupAddon addonType="append">
            <Btn outlineColor='info' text='Add a video' />
          </InputGroupAddon>
      </InputGroup>
    </form>
    
  );
}

export default SearchView;