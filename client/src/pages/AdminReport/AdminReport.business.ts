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
        accessor: 'user',
        header: 'User Name',
        format: (user: any) => (user.name),
    },

    { 
        accessor: 'totalCalories',
        header: 'Average Calories',
        format: (value: any) => ((parseFloat(value) / 7).toFixed(2)),
    },

]

export const getEntriesReportRows = (report: IAdminReportCount) => {
  return [{
    lastWeekEntriesCount: report.lastWeekEntriesCount,
    secondLastWeekEntriesCount: report.secondLastWeekEntriesCount,
    todayEntriesCount: report.todayEntriesCount
  }]
}