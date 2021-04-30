import React, { useState, FunctionComponent } from 'react';
import { InputGroup, InputGroupAddon, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { Btn } from '../Button/Button';

type SearchViewProps = {
  onChange: () => void;
  onSubmit: () => void;
  onClick: () => void;
  source: string;
  inputValue: string;
}

export const SearchView: FunctionComponent<SearchViewProps> = ({ onChange, onSubmit, onClick, source, inputValue }) => {
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