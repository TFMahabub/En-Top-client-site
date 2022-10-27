import React from 'react';
import { Link } from 'react-router-dom';

const SidebarSIngle = ({cd}) => {
  return (
    <div>
      <Link to={`/course/${cd._id}`}>
        <h3 className='text-md font-medium text-darkLightBlue mb-6 border-b'>{cd.title}</h3>
      </Link>
    </div>
  );
};

export default SidebarSIngle;