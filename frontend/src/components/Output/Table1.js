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

const Table = ({setChecked}) => {
  const dispatch = useDispatch();
  const alignList = useSelector(state => state.align.align.array)
  const queryInfo = useSelector(state => state.align)
  
  //filters based on mismatch == 0 in alignList
  const zeroMismatch = alignList.filter(row => row.mismatch==0);
  const zeroArray = zeroMismatch.map(row => row.id)


  //got to find the ids of the mismatches that are 0 automatically and pre put them in selectionModel - maybe with a map function
  const [selectionModel, setSelectionModel] = React.useState(zeroArray)
  
 
  const [page, setPage] = React.useState(0);
   



  const columns = [
    { field: 'Haplotype', headerName: 'Haplotype', sortable: false, width: 135 },
    { field: 'Mismatches', headerName: 'Mismatches', headerAlign: "center", align: "center", sortable: false, minWidth: 135 },
    { field: 'Matches', headerName: 'Matches', headerAlign: "center", align: "center", sortable: false, minWidth: 135},
    { field: 'Country', headerName: 'Country', sortable: false, width: 200, },
    { field: 'Locality', headerName: 'Locality', sortable: false, width: 325, },
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
    Locality: row.location + " " + row.locationName,
    Publications: row.author,
    Genbank: row.genBankAccession
  }));

  //need to change width below in order to render the right side of the table in print 
  return (
    <div class="table-container" style={{height: 5000, width:1400,}} > 
      
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
        rowsPerPageOptions={[25, 50, 100, 146]}
        
        disableColumnFilter={true}
        pagination
        
        selectionModel={selectionModel}
        onSelectionModelChange={newSelectionModel => {
          setSelectionModel(newSelectionModel);
          setChecked(alignList.filter(item => newSelectionModel.includes(item.id)))
        }}
        
      />
      )}
      
      
    </div>
  );
}

export default Table;