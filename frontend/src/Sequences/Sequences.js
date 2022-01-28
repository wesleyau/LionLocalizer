import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Sequences = () => {

  
  

  const dispatch = useDispatch();
  const [ID, setID] = useState('');
  const [Detail, setDetail] = useState('');

  const [seqPlacerID, setSeqPlacerID] = useState('');

  const [hello, setHello] = useState('');


  return (
    <div>


      hi
      </div>
  );
};

export default Sequences;
