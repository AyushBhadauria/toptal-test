import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
} from '@mui/material';
import { groupDietListBasedOnDates } from 'src/helpers/utils';
import moment from 'moment';
import CalorieText from 'src/component/CalorieText';
import { getLocalData } from 'src/helpers/storage';
import { Cancel } from '@mui/icons-material';

interface Props {
  dietList: UserDiet[]
}

const DietReportTable = ({ dietList }: Props) => {
    const dietReport = groupDietListBasedOnDates(dietList);
    const user: UserProfile = getLocalData('user');
    const isOver = (cal: number) => cal > user.thresholdCalories;

    return (
        <TableContainer component={Paper} sx={{mt: 5}}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell component='th' >Date</TableCell>
                        <TableCell component='th' >Total Calories</TableCell>
                        <TableCell component='th' >Diet Maintained</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {Object.keys(dietReport).map((key, i) => (
                <TableRow key={`diet-report-${i}`}>
                    <TableCell> {moment(new Date(key)).format("MMM Do YY")} </TableCell>
                    <TableCell> <CalorieText calories={dietReport[key]} /></TableCell>
                    <TableCell> 
                        <Checkbox 
                          checked={true} 
                          checkedIcon={isOver(dietReport[key]) ? <Cancel /> : undefined} 
                          color={isOver(dietReport[key]) ? 'error' : 'success'} />
                    </TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DietReportTable;
