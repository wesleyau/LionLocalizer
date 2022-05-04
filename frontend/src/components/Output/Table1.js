import * as React from 'react';
import { DataGrid, GridColDef,} from '@mui/x-data-grid';
import { useState, useEffect } from 'react'
import { Link } from '@material-ui/core'

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';



//accordian the rows right here


const Table = ({setChecked}) => {
  const dispatch = useDispatch();
  const alignList = useSelector(state => state.align.align.array)
  const queryInfo = useSelector(state => state.align)

  //finding the ids of the arrays that have 0 mismatches 
  //true false array - now compare this array
  //let zeroMismatch = alignList.map(row => row.mismatch==0);
  
  //filters based on mismatch == 0 in alignList
  var zeroMismatch = alignList.filter(row => row.mismatch==0);
  var zeroArray = zeroMismatch.map(row => row.id)
  var zList = []
  //console.log(zeroMismatch.map(row => row.id))
  //console.log(zeroArray)

  for (let i = 0; i < zeroArray.length; i++) {
    zList[i] = zeroArray[i]
  }
  //console.log(zList)

  //got to find the ids of the mismatches that are 0 automatically and pre put them in selectionModel - maybe with a map function
  const [selectionModel, setSelectionModel] = React.useState([zList])
  
  //console.log(selectionModel)
  
   



  const columns = [
    { field: 'Haplotype', headerName: 'Haplotype', sortable: false, width: 135 },
    { field: 'Mismatches', headerName: 'Mismatches', sortable: false, minWidth: 135 },
    { field: 'Matches', headerName: 'Matches', sortable: false, minWidth: 135},
    { field: 'Country', headerName: 'Country', sortable: false, width: 200, },
    { field: 'Locality', headerName: 'Locality', sortable: false, width: 250, },
    { field: 'Publications', headerName: <a href='http://lionlocalizer.org/references' target="_blank"> Publications </a>, sortable: false, minWidth: 200 },
    { field: 'Genbank', headerName: <a href='https://www.ncbi.nlm.nih.gov/genbank/' target="_blank"> GenBank </a>, sortable: false, minWidth: 225 },
  ];

  //by haplotype version
  const rows = alignList.map((row) => ({
    id: row.id,  
    Haplotype: row.haplotypeId,
    Mismatches: row.mismatch,
    Matches: row.match,
    Country: row.locality,
    Locality: row.locationName,
    Publications: row.author,
    Genbank: row.genBankAccession
  }));


  
  return (
    <div style={{ height: 520, width: '100%',}}>

      {queryInfo.isLoading == false && queryInfo.error == null &&(
        <DataGrid 
        sx={{ 
        m:2,
        borderColor: 'secondary'
        }}
        rows={rows}
        columns={columns}
        checkboxSelection
        rowHeight={50}
        disableColumnFilter={true}
        hideFooterPagination={true}
        
        onSelectionModelChange={newSelectionModel => {
          setSelectionModel(newSelectionModel);
          setChecked(alignList.filter(item => newSelectionModel.includes(item.id)))
        }}
        selectionModel={selectionModel}
      />
                    )}
      
      
    </div>
  );
}

export default Table;