import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

interface Props {
    name: string
    columns: ITableColumn[];
    rows: any[]
}

export const AppTable = ({name, columns, rows}: Props) => {
    const getRowValue = (key: string, keyIndex: number, row: any)=> {
        const column = columns.find(c => c.accessor === key);
        if(column) {
           return (
            <TableCell key={`${key}-${keyIndex}`} component='th' scope='row'>
              {column.format ? column.format(column.accessor === 'id' ? row: row[key]) : row[key]}
            </TableCell>
           )
        }
    }
    const columnsAccessors = columns.map(c => c.accessor);
    const rowsAccessorsMapped: any[] = rows.map(row => columnsAccessors.reduce((a, key) => ({...a, ...{ [key]: row[key] }}), {}))
    return (
        <TableContainer component={Paper} sx={{mt: 5}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label={name}>
                <TableHead>
                    <TableRow>
                        {columns.map((header, i) => <TableCell sx={{fontWeight: 600}} key={`${name}-header${i}`} component='th' >{header.header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rowsAccessorsMapped.map((row, i) => (
                    <TableRow key={`${name}-row-${i}`}>
                        {Object.keys(row).map((k, j) => (getRowValue(k, j, row)))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}