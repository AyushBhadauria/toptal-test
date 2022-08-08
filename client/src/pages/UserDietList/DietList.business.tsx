import { Checkbox } from "@mui/material";
import moment from "moment";
import { Cancel, Error } from "@mui/icons-material"

export const dietListColumns: ITableColumn[] = [
    { 
        accessor: 'name',
        header: 'Food Name',
    },
    { 
        accessor: 'calories',
        header: 'Calories',
        format: (value: any) => (`${value} kcal`),
    },
    { 
        accessor: 'consumedAt',
        header: 'Consumed At',
        format: (value: any) => (moment(new Date(value)).format('MMMM Do YYYY, h:mm:ss a')),
    },
    { 
        accessor: 'createdAt',
        header: 'Created At',
        format: (value: any) => (moment(new Date(value)).format('MMMM Do YYYY, h:mm:ss a')),
    },
    { 
        accessor: 'isCheatDiet',
        header: 'is Cheat Diet?',
        format: (value: any) => (
          <Checkbox
            checkedIcon={value ? <Error/> : <Cancel />} 
            checked={true}
            color={value ? 'error' : 'success'}
          />
        ),
    },

]