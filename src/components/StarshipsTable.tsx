import React from 'react';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import "./StarshipsTable.css";

interface StarshipsTableProps {
    data: any[]
}

function StarshipsTable({ data }: StarshipsTableProps) {
    return(
        <TableContainer component={Paper}>
            <Table aria-label="starships table" className="starships-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Manufacturer</TableCell>
                        <TableCell align="right">Cost (Credits)</TableCell>
                        <TableCell align="right">Length</TableCell>
                        <TableCell align="right">Max Speed</TableCell>
                        <TableCell align="right">Crew</TableCell>
                        <TableCell align="right">Passengers</TableCell>
                        <TableCell align="right">Cargo Capacity</TableCell>
                        <TableCell>Consumables</TableCell>
                        <TableCell align="right">Hyperdrive Rating</TableCell>
                        <TableCell align="right">MGLT</TableCell>
                        <TableCell>Starship Class</TableCell>
                    </TableRow>
                    {data.map(row => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.model}</TableCell>
                            <TableCell>{row.manufacturer}</TableCell>
                            <TableCell align="right">{row.cost_in_credits}</TableCell>
                            <TableCell align="right">{row.length}</TableCell>
                            <TableCell align="right">{row.max_atmosphering_speed}</TableCell>
                            <TableCell align="right">{row.crew}</TableCell>
                            <TableCell align="right">{row.passengers}</TableCell>
                            <TableCell align="right">{row.cargo_capacity}</TableCell>
                            <TableCell>{row.consumables}</TableCell>
                            <TableCell align="right">{row.hyperdrive_rating}</TableCell>
                            <TableCell align="right">{row.MGLT}</TableCell>
                            <TableCell>{row.starship_class}</TableCell>
                        </TableRow>
                    ))}
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default StarshipsTable;