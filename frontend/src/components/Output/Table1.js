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

  const alignList = useSelector(state => state.align.align.array)
  
  //finding the ids of the arrays that have 0 mismatches 
  //true false array - now compare this array
  //let zeroMismatch = alignList.map(row => row.mismatch==0);
  
  //filters based on mismatch == 0 in alignList
  let zeroMismatch = alignList.filter(row => row.mismatch==0);
  let zeroArray = zeroMismatch.map(row => row.id)
  //console.log(zeroMismatch.map(row => row.id))
  //console.log(zeroArray)

  //got to find the ids of the mismatches that are 0 automatically and pre put them in selectionModel - maybe with a map function
  const [selectionModel, setSelectionModel] = React.useState([zeroArray])
  
  //console.log(selectionModel)
  
  
  const columns = [
    { field: 'Haplotype', headerName: 'Haplotype', sortable: false, width: 120 },
    { field: 'Mismatches', headerName: 'Mismatches', sortable: false, minWidth: 135 },
    { field: 'Matches', headerName: 'Matches', sortable: false, minWidth: 110},
    { field: 'Locality', headerName: 'Locality', sortable: false, width: 250, 
      renderCell: (params) => (
        <Typography>{params.value.map((sub) => (
          <li>{sub.locationName}</li>
          
        ))}</Typography>
      )
    },
    { field: 'Country', headerName: 'Country', sortable: false, width: 200, 
    renderCell: (params) => (
        <Typography>{params.value}</Typography>
        
      
    )
    },
    { field: 'Publications', headerName: 'Publications', sortable: false, minWidth: 200 },
  ];

  //by haplotype version
  const rows = alignList.map((row) => ({
    id: row.id,  
    Haplotype: row.haplotypeId,
    Mismatches: row.mismatch,
    Matches: row.match,
    Locality: row.locArray,
      Country: row.locArray.map((sub) => (
        <li>{sub.locality}</li>
      )),
    Publications: row.locArray.map((sub) => (
        sub.author
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
        rowHeight={400}
        disableColumnFilter={true}
        hideFooterPagination={true}
        selectionModel={selectionModel}
        onSelectionModelChange={selectionModel => {
          setSelectionModel(selectionModel);
          setChecked(alignList.filter(item => selectionModel.includes(item.id)))
          console.log(selectionModel)
        }}
        
      />
      
    </div>
  );
}

export default Table;