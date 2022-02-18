import React, { useMemo } from 'react'
import { useTable, useRowSelect } from 'react-table'
import { Checkbox } from './Checkbox'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

export const RowSelection = () => {
  
  const alignList = useSelector(state => state.align.align.array)

  const columns = [
    { field: 'Haplotype', headerName: 'Halpotype', sortable: false, width: 130 },
    { field: 'Mismatches', headerName: 'Mismatches', sortable: false, width: 130 },
    { field: 'Matches', headerName: 'Matches', sortable: false, width: 130 },
    { field: 'Locations', headerName: 'Locations', sortable: false, width: 500 },
    { field: 'GenBankAccession', headerName: 'GenBank Accession', sortable: false, width: 300 },
  ];

  const data = alignList.map((row) => ({
    id: row.id,  
    Haplotype: row.haplotypeId,
    Mismatches: row.mismatch,
    Matches: row.match,
    Locations: row.locArray.map((sub) => (
      <li>
      {sub.locationName}
      </li>
      )),
      GenBankAccession: row.lochappub.map((sub) => (     
      sub.genBankAccession
      )),
  }));


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  )

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  )
}