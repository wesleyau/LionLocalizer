import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from './Sequences.actions';
import { addSequence } from './Align.actions';

const Sequences = () => {
  const test = useSelector(state => state.sequences.sequences)
  const seqList = useSelector(state => state.sequences.sequences)
  const alignList = useSelector(state => state.align.align.array)
  const queryInfo = useSelector(state => state.align.align.query)
  
  

  const dispatch = useDispatch();
  const [ID, setID] = useState('');
  const [Detail, setDetail] = useState('');

  const [seqPlacerID, setSeqPlacerID] = useState('');

  const [hello, setHello] = useState('');

  useEffect(() => {
    dispatch(getSequences());
  }, [dispatch]);
  
  return (
    <div>

        <button
          onClick={() => {
            setSeqPlacerID(seqList[0])
            setID(seqList[0].id);
            setDetail(seqList[0].cytB)
          }}
        >
          Get Sequences
        </button>

        <button
          onClick={(e) => {
            setSeqPlacerID(seqList[e.target.value]);
            setID(seqList[e.target.value].id);
            setDetail(seqList[e.target.value].cytB)
          }}
        >
          pick sequence
        </button>
        <button
          onClick={() => {
            console.log(ID)
          }}
        >
          ID
        </button>
        <button
          onClick={() => {
            console.log(Detail)
          }}
        >
          cytB
        </button>
        
        <input
          value={ID}
          onChange={(e) => setID(e.target.value)}
          placeholder={seqPlacerID.id}
        />

        <input
          value={Detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder={seqPlacerID.cytB}
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
