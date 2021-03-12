import { useHistory } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import ViewListIcon from '@material-ui/icons/ViewList';
import Tooltip from '@material-ui/core/Tooltip';

import { urlTypes } from '../../types/urlTypes';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'avatar_url', label: 'Foto', minWidth: 170 },
  { id: 'login', label: 'Usuario', minWidth: 100 },
  { id: 'btn', label: '', minWidth: 100 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 550,
  },
});

export const TableApp = ({state}: any) => {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const history = useHistory();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={`${classes.root} mt`}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column: any) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((state: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={state.id}>
                    <TableCell component="th" scope="row">
                        <img 
                            className="rounded" 
                            width="50" 
                            src={state.avatar_url} 
                            alt={state.login}
                        /> 
                    </TableCell>
                            
                    <TableCell component="th" scope="row">
                        {state.login}
                    </TableCell>
                            
                    <TableCell component="th" scope="row">
                        <Tooltip title="Detalles">
                            <IconButton 
                                onClick={() => history.push(`${urlTypes.details.url}${state.login}`)} 
                                color="primary" 
                                aria-label="upload picture" 
                                component="span"
                            >
                                <ViewListIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        labelRowsPerPage='Filas por página'
        component="div"
        count={state.items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
