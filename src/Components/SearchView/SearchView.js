import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { Btn } from '../Button/Button';

function SearchView({ onChange, onSubmit, onClick, source, inputValue }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        < Dropdown {...{ isOpen:dropdownOpen, toggle }} >
          <DropdownToggle caret>
          {source}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem {...{ onClick }}>YouTube</DropdownItem>
          <DropdownItem {...{ onClick }}>Vimeo</DropdownItem>
        </DropdownMenu>
        </Dropdown>
          <Input placeholder='Video URL' {...{ onChange, value:inputValue }}/>
          <InputGroupAddon addonType='append'>
            <Btn color='info' text='Add a video' />
          </InputGroupAddon>
      </InputGroup>
    </form>
    
  );
}

export default SearchView;