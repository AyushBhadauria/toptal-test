import { Popover, FormGroup, TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

interface Props {
  onSubmit: (params?: DietListParams) => void;
}
const DietListFilter = ({ onSubmit }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = () => {
    onSubmit({ endDate, startDate });
    handleClose()
  }

  const onResetClick = () => {
    setStartDate('');
    setEndDate('');
    onSubmit();
    handleClose();
  }

  return (
    <Box display={'block'} sx={{width: '100%', margin: '20px 0'}}>
        <Button
            disableElevation
            sx={{ height: 'fit-content', alignSelf: 'center' }}
            aria-describedby={id}
            variant='outlined'
            startIcon={<FilterListIcon />}
            onClick={handleClick}>
            Filters
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}>

        <FormGroup sx={{ p: 2 }}>
        <TextField
            id="consumedAt"
            label="Comsumed At Start Date"
            type="date"
            margin='normal'
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.currentTarget.value)}
            sx={{ width: 200 }}
        />
        <TextField
            id="consumedAt"
            label="Comsumed At End Date"
            type="date"
            margin='normal'
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.currentTarget.value)}
            sx={{ width: 200 }}
        />
         <Button
            disableElevation
            disabled={!startDate || !endDate}
            sx={{ height: 'fit-content', alignSelf: 'center' }}
            aria-describedby={'add-new'}
            variant='contained'
            fullWidth
            onClick={onClick}>
            Filter
        </Button>
        {startDate && endDate ? <Button onClick={onResetClick} fullWidth variant="text">Reset</Button> : null}
        </FormGroup>
    </Popover>
   </Box>
  )
}

export default DietListFilter;