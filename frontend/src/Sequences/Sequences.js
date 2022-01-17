import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from './Sequences.actions';
import { addSequence } from './Align.actions';

const Sequences = () => {
  const seqList = useSelector(state => state.sequences.sequences)
  const alignList = useSelector(state => state.align.align)

  const dispatch = useDispatch();
  const [ID, setID] = useState('');
  const [Detail, setDetail] = useState('');
  

  return (
    <div>
      
      <button
        onClick={() => {
          dispatch(getSequences());
        }}
      >
        Get Sequences
      </button>

      <input
        value={ID}
        onChange={(e) => setID(e.target.value)}
        placeholder='ID'
      />

      <input
        value={Detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder='Sequence'
      />

      <button
        onClick={() => {
          dispatch(addSequence({ ID, Detail }));
        }}
      >
        Post Sequence
      </button>
    </div>
  );
};

export default Sequences;
