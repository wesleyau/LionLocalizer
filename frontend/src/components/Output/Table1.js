import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const columns = [
  { field: 'Haplotype', headerName: 'Halpotype', sortable: false, width: 130 },
  { field: 'Mismatches', headerName: 'Mismatches', sortable: false, width: 132 },
  { field: 'Matches', headerName: 'Matches', sortable: false, width: 110 },
  { field: '=', headerName: 'Matches', sortable: false, width: 130 },
];

const rows = [
  { id: "LEO001", Haplotype: "LEO001", Matches: 'Snow', Mismatches: 'Jon', age: 35 },
  { id: "LEO002", Haplotype: "LEO001", Matches: 'Lannister', Mismatches: 'Cersei', age: 42 },
  { id: "LEO003", Haplotype: "LEO001", Matches: 'Lannister', Mismatches: 'Jaime', age: 45 },
  { id: "LEO004", Haplotype: "LEO001", Matches: 'Stark', Mismatches: 'Arya', age: 16 },
  { id: "LEO005", Haplotype: "LEO001", Matches: 'Targaryen', Mismatches: 'Daenerys', age: null },
  { id: "LEO006", Haplotype: "LEO001", Matches: 'Melisandre', Mismatches: null, age: 150 },
  { id: "LEO007", Haplotype: "LEO001",  Matches: 'Clifford', Mismatches: 'Ferrara', age: 44 },
  { id: "LEO008", Haplotype: "LEO001", Matches: 'Frances', Mismatches: 'Rossini', age: 36 },
  { id: "LEO009", Haplotype: "LEO001", Matches: 'Roxie', Mismatches: 'Harvey', age: 65 },
];

const Table = (props) => {
  return (
    <div style={{ height: 520, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={41}
        rowsPerPageOptions={[0]}
        checkboxSelection 
        collapse
      />
    </div>
  );
}

export default Table;