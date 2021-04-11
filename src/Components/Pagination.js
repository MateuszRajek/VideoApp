import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationComponent({ videosPerPage, totalVideos, paginate, firstPage }) {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setActive(1);
  }, [firstPage]);

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