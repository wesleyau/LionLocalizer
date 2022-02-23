import * as React from 'react';
import { DataGrid, GridColDef,} from '@mui/x-data-grid';
import { useState, useEffect } from 'react'

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

  const alignList = useSelector(state => state.align.align.array)
  
  
  //const zero = [0]
  //let zeroMismatches = alignList.mismatch.filter(val => zero.includes(val))
  //console.log(zeroMismatches)

  //got to find the ids of the mismatches that are 0 automatically and pre put them in selectionModel - maybe with a map function
  const [selectionModel, setSelectionModel] = React.useState([])
  
  //console.log(selectionModel)
  
  
  const columns = [
    { field: 'Haplotype', headerName: 'Halpotype', sortable: false, width: 120 },
    { field: 'Mismatches', headerName: 'Mismatches', sortable: false, minWidth: 135 },
    { field: 'Matches', headerName: 'Matches', sortable: false, minWidth: 110},
    { field: 'Locations', headerName: 'Locations', sortable: false, width: 250 },
    { field: 'GenBankAccession', headerName: 'GenBank Accession', sortable: false, minWidth: 300 },
  ];

  const rows = alignList.map((row) => ({
    id: row.id,  
    Haplotype: row.haplotypeId,
    Mismatches: row.mismatch,
    Matches: row.match,
    Locations: row.locArray.map((sub) => (
        <li>
        {JSON.stringify(sub.locationName)}
        </li>
      )),
      GenBankAccession: row.lochappub.map((sub) => (     
      sub.genBankAccession
      )),
  }));

  
  return (
    <div style={{ height: 520, width: '100%',}}>

      <DataGrid 
        sx={{ 
        m:2,
        borderColor: 'secondary'
        }}
        rows={rows}
        columns={columns}
        checkboxSelection
        rowHeight={60}
        disableColumnFilter={true}
        hideFooterPagination={true}

        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
          setChecked(alignList.filter(item => newSelectionModel.includes(item.id)))
        }}
        selectionModel={selectionModel}
      />
      
    </div>
  );
}

export default Table;