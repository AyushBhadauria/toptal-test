import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Tooltip,
    TableFooter,
    TablePagination
} from '@mui/material';
import {  Add, Create, Delete, Error } from '@mui/icons-material';
import moment from 'moment';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

interface Props {
  dietList: AdminDietListResponse;
  onCreate: (dietItem: AdminDietList) => void;
  onUpdate: (dietItem: AdminDietList) => void;
  onDelete: (id: number) => void;
  currentPage: number,
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const AdminDietTable = ({ dietList, onUpdate, onCreate, onDelete, currentPage, onPageChange }: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Food Name</TableCell>
                        <TableCell>Calories</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Consumed At</TableCell>
                        <TableCell >Good Diet </TableCell>
                        <TableCell ></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {dietList.data.map(dietItem => (
                <TableRow key={`admin-${dietItem.name}-${dietItem.id}`}>
                    <TableCell component='th' scope='row'>{dietItem.name}</TableCell>
                    <TableCell>{dietItem.calories} kcal</TableCell>
                    <TableCell>{dietItem.user.name}</TableCell>
                    <TableCell>{moment(new Date(dietItem.consumedAt)).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                    <TableCell> 
                        <Checkbox
                          checkedIcon={dietItem.isCheatDiet ? <Error/> : undefined} 
                          checked={true}
                          color={dietItem.isCheatDiet ? 'error' : 'success'}
                        />
                    </TableCell>
                    <TableCell>
                    <Tooltip title="Update user diet"><Create sx={{ cursor: 'pointer'}} onClick={() => onUpdate(dietItem)} /></Tooltip>
                     <Tooltip title="Create Diet for user"><Add sx={{ ml: 2, cursor: 'pointer'}} onClick={() => onCreate(dietItem)} /></Tooltip>
                     <Tooltip title="Delete user diet"><Delete sx={{ml: 2, cursor: 'pointer'}} onClick={() => onDelete(dietItem.id)} /></Tooltip>
                    </TableCell>
                </TableRow>
                ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[]}
                        colSpan={6}
                        count={dietList.count}
                        rowsPerPage={10}
                        page={currentPage}
                        onPageChange={onPageChange}
                        ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default AdminDietTable;
