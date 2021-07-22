import React from 'react';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';

function StarshipsTable() {
    return(
        <TableContainer component={Paper}>
            <Table aria-label="starships table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default StarshipsTable;