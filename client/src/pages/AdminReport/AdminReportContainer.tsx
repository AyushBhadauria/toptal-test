import React, { useEffect, useState } from 'react';

import { Box, Container } from '@mui/material';
import DietService from './../../service/dietService'
import Title from 'src/component/Title';
import AppTable from 'src/component/AppTable';
import { entriesReportColumns, averageCaloriesReportColumns, getEntriesReportRows } from './AdminReport.business';

export const AdminReportContainer = () => {
    const [ report, setReport ] = useState<IAdminReportCount>()
    useEffect(() => {
        DietService.reportCount()
        .then(res => setReport(res))
    }, []);

    return (
        <Container sx={{ py: 2 }} maxWidth={false}>
           <Title variant='h5'>Reports </Title>
           {report ?
            <>
                <AppTable name='AdminReport' columns={entriesReportColumns} rows={getEntriesReportRows(report!)} />
                <Box sx={{mt: 5}}><Title variant={'h6'}>Average cal added (last 7 days)</Title></Box>
                <AppTable name='CaloriesReport' columns={averageCaloriesReportColumns} rows={report.userLastSevenDaysSumCal} />
            </>
           : null}
        </Container>
      )
}

