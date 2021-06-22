import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className='row justify-content-center mt-3'>
      <button className="buttonAdd mb-5" style={{width:'20%'}} onClick={() => setShow(true)}>
        Add Movie
      </button>
      {show && (
        <Modal isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;