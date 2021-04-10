import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationComponent({ videosPerPage, totalVideos, paginate }) {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map(number => {
        return( 
        <PaginationItem key={number} active={number === active ? true : false}>
          <PaginationLink onClick={() => {
            paginate(number)
            setActive(number)
            }} href="#">
            {number}
          </PaginationLink>
       </PaginationItem>)   
      })}
    </Pagination>
  );
}

export default PaginationComponent;