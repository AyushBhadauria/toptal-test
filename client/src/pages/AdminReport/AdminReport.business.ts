export const entriesReportColumns: ITableColumn[] = [
    { 
        accessor: 'lastWeekEntriesCount',
        header: 'Entries Count (Last Week)',
    },

    { 
        accessor: 'secondLastWeekEntriesCount',
        header: 'Entries Count (Second Last Week)',
    },

    { 
        accessor: 'todayEntriesCount',
        header: 'Entries Count (Today)',
    },

]
export const averageCaloriesReportColumns: ITableColumn[] = [
    { 
        accessor: 'name',
        header: 'User Name',
    },
    { 
        accessor: 'totalCalories',
        header: 'Total Calories',
    },
    { 
        accessor: 'averageCalories',
        header: 'Average Calories (7 Days)',
        format: (value: any) => value ? value.toFixed(5) : '-',
    },

]

export const getEntriesReportRows = (report: IAdminReportCount) => {
  return [{
    lastWeekEntriesCount: report.lastWeekEntriesCount,
    secondLastWeekEntriesCount: report.secondLastWeekEntriesCount,
    todayEntriesCount: report.todayEntriesCount
  }]
}