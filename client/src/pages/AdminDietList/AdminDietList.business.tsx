import { Cancel, Error } from "@mui/icons-material"
import { Checkbox } from "@mui/material"
import moment from "moment"

export const adminDietListColumns: ITableColumn[] = [
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
        accessor: 'user',
        header: 'User Name',
        format: (user: any) => (user.name),
    },
    { 
        accessor: 'consumedAt',
        header: 'Consumed At',
        format: (value: any) => (moment(new Date(value)).format('MMMM Do YYYY, h:mm:ss a')),
    },
    { 
        accessor: 'isCheatDiet',
        header: 'Good Diet',
        format: (value: any) => (
            <Checkbox
              checkedIcon={value ? <Error/> : <Cancel />} 
              checked={true}
              color={value ? 'error' : 'success'}
            />
        ),
    },
]